import React from 'react';
import MusicList from '../../components/MusicList/MusicList';
import styles from './Music.module.css';

const featuredArtists = [
  { id: 1, name: 'Artist One', bio: 'A brief bio about Artist One.', image: '/path/to/image1.jpg' },
  { id: 2, name: 'Artist Two', bio: 'A brief bio about Artist Two.', image: '/path/to/image2.jpg' },
  { id: 3, name: 'Artist Three', bio: 'A brief bio about Artist Three.', image: '/path/to/image3.jpg' },
];

const Music: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>音乐课程</h1>
      <div className={styles.musicCard}>
        <div className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <div className={styles.selectGroup}>
              <select className={styles.select}>
                <option value="">所有级别</option>
                <option value="beginner">初级</option>
                <option value="intermediate">中级</option>
                <option value="advanced">高级</option>
              </select>
              <select className={styles.select}>
                <option value="">所有类型</option>
                <option value="piano">钢琴</option>
                <option value="guitar">吉他</option>
                <option value="violin">小提琴</option>
              </select>
            </div>
            <div className={styles.searchGroup}>
              <input
                type="search"
                placeholder="搜索课程..."
                className={styles.searchInput}
              />
              <span className={styles.searchIcon}>🔍</span>
            </div>
          </div>
        </div>
        <MusicList />
      </div>

      <section className={styles.featuredArtistsSection}>
        <h2 className={styles.sectionTitle}>推荐艺术家</h2>
        <div className={styles.artistList}>
          {featuredArtists.map((artist) => (
            <div key={artist.id} className={styles.artistCard}>
              <img src={artist.image} alt={artist.name} className={styles.artistImage} />
              <h3 className={styles.artistName}>{artist.name}</h3>
              <p className={styles.artistBio}>{artist.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Music;