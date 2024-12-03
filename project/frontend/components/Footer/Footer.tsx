import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>关于我们</h3>
            <p className={styles.text}>
              专业的音乐培训平台，致力于为音乐爱好者提供优质的学习资源。
            </p>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>联系方式</h3>
            <ul className={`${styles.contactList} ${styles.text}`}>
              <li className={styles.contactItem}>电话：123-456-7890</li>
              <li className={styles.contactItem}>邮箱：contact@music-training.com</li>
              <li className={styles.contactItem}>地址：音乐大厦123号</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>关注我们</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                微信
              </a>
              <a href="#" className={styles.socialLink}>
                微博
              </a>
              <a href="#" className={styles.socialLink}>
                抖音
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>&copy; 2024 音乐培训平台. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;