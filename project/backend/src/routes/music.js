import express from 'express';
import { getAllMusic, createMusic, getMusicById } from '../controllers/music.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllMusic);
router.get('/:id', getMusicById);
router.post('/', authMiddleware, createMusic);

export default router;