const Note = require('../models/note');

const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getNotes = async (req, res) => {
  console.log("inside get notes");
  
  const { pinned } = req.query;
  const filter = pinned ? { pinned: pinned === 'true' } : {};

  const notes = await Note.find(filter).sort({ createdAt: -1 });
  res.status(200).json(notes);
};

const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.status(200).json(note);
  } catch {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

const updateNote = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'No data provided to update' });
  }

  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const deleteNote = async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  if (!note) return res.status(404).json({ error: 'Note not found' });
  res.status(204).send();
};

module.exports = {createNote,getNotes,getNoteById,updateNote,deleteNote};