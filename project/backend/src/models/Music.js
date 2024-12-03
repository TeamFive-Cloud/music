import mongoose from 'mongoose';

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  album: String,
  genre: String,
  releaseDate: Date,
  imageUrl: String,
  description: String,
  price: Number,
  duration: Number,
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  }
}, {
  timestamps: true
});

export default mongoose.model('Music', musicSchema);