import React, { useEffect, useState } from 'react';
import styles from './Resources.module.css';

interface NewsItem {
  link: string;
  img_url: string;
  title: string;
  description: string;
  source: string;
}

interface ReviewItem {
  img_url: string;
  title: string;
  description: string;
  artist: string;
  source: string;
  date: string;
  link: string;
}

interface ScoreItem {
  link: string;
  title: string;
  artist: string;
  image: string;
  audio: string;
}

const Resources: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [scores, setScores] = useState<ScoreItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch('http://47.108.223.242:5000/api/news/all-news')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));

    fetch('http://47.108.223.242:5000/api/news/pitchfork-reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));

    fetch('http://47.108.223.242:5000/api/news/8notes')
      .then(response => response.json())
      .then(data => setScores(data))
      .catch(error => console.error('Error fetching scores:', error));
  }, []);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const displayedScores = scores.slice(0, currentPage * itemsPerPage);

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Music news</h2>
        <div className={styles.newsList}>
          {news.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={styles.card}>
                <img src={item.img_url} alt={item.title} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <p className={styles.cardSource}>{item.source}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Single review</h2>
        <div className={styles.reviewsList}>
          {reviews.map((item, index) => (
            <div key={index} className={styles.reviewCard}>
              <img src={item.img_url} alt={item.title} className={styles.reviewCardImage} />
              <div className={styles.reviewCardContent}>
                <h3 className={styles.reviewCardTitle}>{item.title}</h3>
                <p className={styles.reviewCardDescription}>{item.description}</p>
                <p className={styles.reviewCardReviewer}>artist: {item.artist}</p>
                <p className={styles.reviewCardSource}>source: {item.source}</p>
                <p className={styles.reviewCardDate}>date: {item.date}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.reviewCardLink}>more</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Classical music</h2>
        <div className={styles.learningResourcesList}>
          {displayedScores.map((item, index) => (
            <div key={index} className={styles.resourceCard}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.resourceTitle}>
                {item.title}
              </a>
              <p className={styles.resourceArtist}>{item.artist}</p>
              {item.image && !item.image.includes('N/A') ? (
                <img src={item.image} alt={item.title} className={styles.resourceImage} />
              ) : (
                <div className={styles.placeholder}>
                  
                  <p className={styles.placeholderText}>🎵 No sample audio. More information available at the original link 🎶</p>
                </div>
              )}
              {item.audio && !item.audio.includes('N/A') ? (
                <audio controls className={styles.audioPlayer}>
                  <source src={item.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <div className={styles.placeholder}>
                  🎶
                </div>
              )}
            </div>
          ))}
        </div>
        {displayedScores.length < scores.length && (
          <button onClick={handleLoadMore} className={styles.loadMoreButton}>
            load more
          </button>
        )}
      </section>
    </div>
  );
};

export default Resources;