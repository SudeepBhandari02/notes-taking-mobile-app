const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
}


function generateRefreshToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
}

module.exports = { generateAccessToken, generateRefreshToken };
