import React from 'react';
import { Users, Book, Clock, Music } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>关于我们</h1>
      
      <div className={styles.missionCard}>
        <h2 className={styles.sectionTitle}>我们的使命</h2>
        <p className={styles.description}>
          致力于为每一位音乐爱好者提供优质的在线音乐教育资源，让音乐学习变得更加便捷和有趣。
        </p>
        
        <h2 className={styles.sectionTitle}>我们的优势</h2>
        <div className={styles.advantages}>
          <div className={styles.advantage}>
            <Users className={styles.advantageIcon} />
            <h3 className={styles.advantageTitle}>专业师资</h3>
            <p className={styles.advantageDescription}>汇聚众多音乐领域的专业教师，保证教学质量。</p>
          </div>
          <div className={styles.advantage}>
            <Book className={styles.advantageIcon} />
            <h3 className={styles.advantageTitle}>个性化课程</h3>
            <p className={styles.advantageDescription}>根据学员水平和需求，提供定制化的学习方案。</p>
          </div>
          <div className={styles.advantage}>
            <Clock className={styles.advantageIcon} />
            <h3 className={styles.advantageTitle}>灵活学习</h3>
            <p className={styles.advantageDescription}>在线课程随时随地学习，打破时间和空间限制。</p>
          </div>
        </div>
      </div>
      
      <div className={styles.contactCard}>
        <h2 className={styles.sectionTitle}>联系我们</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>姓名</label>
            <input
              id="name"
              type="text"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>邮箱</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>留言</label>
            <textarea
              id="message"
              className={styles.textarea}
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
          >
            <Music className={styles.buttonIcon} />
            发送消息
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;

