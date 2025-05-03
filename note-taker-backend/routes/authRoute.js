const express = require('express');
const {signup,login,refreshToken} = require(''); //need to import controllers later from their directory

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/refresh-token',refreshToken);

module.exports = router;