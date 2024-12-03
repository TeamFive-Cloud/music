import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../src/store/store';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>个人中心</h1>
      
      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}></div>
          <div>
            <h2 className={styles.username}>用户名</h2>
            <p className={styles.email}>user@example.com</p>
          </div>
        </div>
        
        <div className={styles.coursesSection}>
          <h3 className={styles.sectionTitle}>我的课程</h3>
          <div className={styles.courseList}>
            {/* 课程列表占位 */}
            <div className={styles.coursePlaceholder}>
              <h4 className={styles.courseTitle}>暂无课程</h4>
              <p className={styles.courseDescription}>开始浏览并订阅课程吧！</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.settingsCard}>
        <h3 className={styles.sectionTitle}>账户设置</h3>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>修改密码</label>
            <input
              type="password"
              placeholder="当前密码"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="新密码"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="确认新密码"
              className={styles.input}
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
          >
            更新密码
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;