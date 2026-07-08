import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  createNote,
  deleteNote,
  getNoteById,
  getAllNotes,
  updateNote } from '../controllers/notesController.js';
import {
  createNotesSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNotesSchema } from '../validations/notesValidation.js';

const router = Router();

router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

router.post('/notes', celebrate(createNotesSchema), createNote);

router.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

router.patch('/notes/:noteId', celebrate(updateNotesSchema), updateNote);

export default router;
