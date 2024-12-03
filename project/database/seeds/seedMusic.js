import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const sampleMusic = [
  {
    title: "基础钢琴课程",
    artist: "王老师",
    album: "钢琴入门系列",
    genre: "古典",
    releaseDate: new Date("2024-01-01"),
    imageUrl: "/images/piano-basics.jpg",
    description: "适合零基础学习的钢琴入门课程",
    price: 299,
    duration: 45,
    level: "beginner"
  },
  {
    title: "进阶吉他教程",
    artist: "李老师",
    album: "吉他大师课",
    genre: "摇滚",
    releaseDate: new Date("2024-01-02"),
    imageUrl: "/images/guitar-advanced.jpg",
    description: "针对有基础的学员的进阶吉他课程",
    price: 399,
    duration: 60,
    level: "intermediate"
  }
];

async function seedDatabase() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    
    await db.collection('music').insertMany(sampleMusic);
    
    console.log('Database seeded successfully');
    client.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();