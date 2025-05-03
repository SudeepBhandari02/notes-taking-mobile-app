const express = require('express');
const {createNote,getNotes,getNoteById,updateNote,deleteNote} = require(''); //need to import controllers later from their directory
const authenticateJWT = require(''); //JWt authentication checker // still needs to be defined

const router = express.Router();

router.post('/',authenticateJWT,createNote);
router.get('/',authenticateJWT,getNotes);
router.get('/:id',authenticateJWT,getNoteById);
router.put('/:id',authenticateJWT,updateNote);
router.delete('/:id',authenticateJWT,deleteNote);

module.exports = router;