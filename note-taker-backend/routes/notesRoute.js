const express = require('express');
const {createNote,getNotes,getNoteById,updateNote,deleteNote} = require('../controllers/notesController'); 
const authenticateJWT = require('../middlewares/authenticateJWT'); 

const router = express.Router();

router.post('/',authenticateJWT,createNote);
router.get('/',authenticateJWT,getNotes);
router.get('/:id',authenticateJWT,getNoteById);
router.put('/:id',authenticateJWT,updateNote);
router.delete('/:id',authenticateJWT,deleteNote);

module.exports = router;