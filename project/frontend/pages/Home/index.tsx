import React from 'react';
import MusicList from '../../components/MusicList/MusicList';
import styles from './Home.module.css';

const courses = [
  { id: 1, title: '吉他入门', level: '初级', duration: '8周', color: styles.fromGreen400 },
  { id: 2, title: '钢琴进阶', level: '中级', duration: '12周', color: styles.fromPurple400 },
  { id: 3, title: '声乐训练', level: '全级别', duration: '16周', color: styles.fromYellow400 },
];

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.welcomeSection}>
        <h1 className={styles.title}>欢迎来到音乐培训平台</h1>
        <p className={styles.description}>
          发现优质音乐课程，开启您的音乐之旅
        </p>
        <div className={styles.latestCourses}>
          <h2 className={styles.sectionTitle}>最新课程</h2>
          <MusicList />
        </div>
      </section>
      
      <section className={styles.coursesSection}>
        <h2 className={styles.sectionTitle}>课程介绍</h2>
        <div className={styles.courseList}>
          {courses.map((course) => (
            <div key={course.id} className={`${styles.courseCard} ${course.color}`}>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <p className={styles.courseLevel}>{course.level}</p>
              <p className={styles.courseDuration}>{course.duration}</p>
              <p className={styles.courseDescription}>
                探索音乐的奥秘，提升您的技能水平。
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.subscribeSection}>
        <h2 className={styles.sectionTitle}>订阅我们</h2>
        <div className={styles.subscribeCard}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className={styles.input}
              />
              <button
                type="submit"
                className={styles.submitButton}
              >
                订阅
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;