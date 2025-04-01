
import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>커리어 요약본</span>
        <div className={styles.menuIcons}>
          <img src="/icon/언어변경.png" className={styles.iconImg} alt="언어 변경" />
          <img src="/icon/마이페이지.png" className={styles.iconImg} alt="마이페이지" />
          <img src="/icon/메뉴선택.png" className={styles.iconImg} alt="메뉴" />
        </div>
      </div>

      <div className={styles.loginSection}>
        <div className={styles.loginBox}>
          <h2>로그인</h2>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button className={`${styles.button} ${styles.primary}`}>로그인</button>
          <button className={`${styles.button} ${styles.secondary}`}>회원 가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
