import axios from 'axios';
import {getToken,saveToken,deleteToken} from "../utils/storage";

const API_URL =process.env.EXPO_PUBLIC_API_URL;

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attach token before request is sent
axiosInstance.interceptors.request.use(
    async (config) => {
        console.log("inside request interceptor")
        const token = await getToken('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Handle 401 responses and try to refresh token
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Prevent infinite loop
        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            const refreshToken = await getToken('refreshToken');

            if (refreshToken) {
                try {
                    const response = await axios.post(`${API_URL}/auth/refresh`, {
                        refreshToken,
                    });

                    const { accessToken: newAccessToken } = response.data;

                    await saveToken('accessToken', newAccessToken);

                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    console.error('Token refresh failed:', refreshError);
                    await deleteToken('accessToken');
                    await deleteToken('refreshToken');
                    return Promise.reject(refreshError);
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
