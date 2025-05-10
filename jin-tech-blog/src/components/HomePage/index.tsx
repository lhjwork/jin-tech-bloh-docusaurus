import React from "react";
import clsx from "clsx";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <section className={clsx(styles.introSection)}>
      <div className={clsx("container", styles.container)}>
        <h1 className={styles.title}>안녕하세요! 👋</h1>
        <p className={styles.subtitle}>
          저는 <strong>프런트엔드 개발자</strong>입니다. 사용자 경험을 개선하고, 효율적인 웹 애플리케이션을 만드는 데
          열정을 가지고 있습니다.
        </p>

        <div className={styles.skills}>
          <h2>기술 스택</h2>
          <ul>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>React, Redux, Next.js</li>
            <li>HTML5, CSS3, Tailwind CSS</li>
            <li>Node.js, Express</li>
            <li>Git, GitHub, CI/CD</li>
          </ul>
        </div>

        <div className={styles.projects}>
          <h2>프로젝트</h2>
          <ul>
            <li>
              <a href="https://github.com/lhjwork/project1" target="_blank" rel="noopener noreferrer">
                프로젝트 1: 포트폴리오 웹사이트
              </a>
            </li>
            <li>
              <a href="https://github.com/lhjwork/project2" target="_blank" rel="noopener noreferrer">
                프로젝트 2: 블로그 플랫폼
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2>연락처</h2>
          <p>
            GitHub: <a href="https://github.com/lhjwork">lhjwork</a>
          </p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/hanjinlee">hanjinlee</a>
          </p>
          <p>
            Email: <a href="mailto:hanjin@example.com">hanjin@example.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
