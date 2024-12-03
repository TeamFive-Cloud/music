import Music from '../models/Music.js';

export const getAllMusic = async (req, res) => {
  try {
    const music = await Music.find();
    res.json(music);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMusic = async (req, res) => {
  const music = new Music(req.body);
  try {
    const newMusic = await music.save();
    res.status(201).json(newMusic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMusicById = async (req, res) => {
  try {
    const music = await Music.findById(req.params.id);
    if (music) {
      res.json(music);
    } else {
      res.status(404).json({ message: 'Music not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};