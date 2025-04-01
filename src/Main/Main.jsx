import React from 'react';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div>
            {/* 1단계: 이력서 작성 */}
            <section className={styles.screen}>
                <header className={styles.header}>
                    <div className={styles.logo}>∑ 커리어 요약본</div>
                    <div className={styles.menuIcons}>
                        <img src="/icon/언어변경.png" className={styles.iconImg} alt="언어 변경" />
                        <img src="/icon/마이페이지.png" className={styles.iconImg} alt="마이페이지" />
                        <img src="/icon/메뉴선택.png" className={styles.iconImg} alt="메뉴" />
                    </div>
                </header>

                <div className={styles.mainContent}>
                    <h1>이력서 초기 작성 도우미를 통해<br />작성에 도움을 받으세요</h1>
                    <p className={styles.subText}>~이력서 작성해보세요~</p>
                    <div className={styles.buttons}>
                        <button className={styles.btn}>이력서 작성하기</button>
                    </div>
                </div>
            </section>

            {/* 2단계: 이력서 비교 */}
            <section className={`${styles.screen} ${styles.resumeComparison}`}>
                <h2>이력서 비교</h2>
                <div className={styles.resumeImages}>
                    <img src="/icon/예시이력서1.png" className={styles.resumeImg} alt="이력서1" />
                    <img src="/icon/예시이력서2.png" className={styles.resumeImg} alt="이력서2" />

                </div>
            </section>

            {/* 3단계: 리뷰 */}
            <section className={`${styles.screen} ${styles.reviewSection}`}>
                <h2>리뷰</h2>
                <div className={styles.reviews}>
                    {[1, 2, 3].map((i) => (
                        <div className={styles.reviewCard} key={i}>
                            <img src="/icon/사람1.jpg" alt="프로필" className={styles.profileImg} />
                            <p className={styles.nickname}>이준환 님</p>
                            <p className={styles.stars}>★★★★★</p>
                            <p className={styles.reviewText}>진짜 정말 너무 이력서 초기 작성하는 데 도움이 너무나도 되었어요. 최고다 최고!</p>
                        </div>
                    ))}
                </div>

                <footer className={styles.footer}>
                    <p>13916 경기도 안양시 동안구 임곡로 29 대림대학교 | 대표전화 : 031-467-4700</p>
                    <p>Copyright 학사뉴 ALL RIGHTS RESERVED</p>
                </footer>
            </section>
        </div>
    );
};

export default Main;
