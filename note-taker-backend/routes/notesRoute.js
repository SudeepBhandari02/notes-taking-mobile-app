const express = require('express');
const {createNote,getNotes,getNoteById,updateNote,deleteNote} = require(''); //need to import controllers later from their directory

const router = express.Router();

router.post('/',createNote);
router.get('/',getNotes);
router.get('/:id',getNoteById);
router.put('/:id',updateNote);
router.delete('/:id',deleteNote);

module.exports = router;