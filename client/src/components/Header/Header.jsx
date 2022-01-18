import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { listData } from "../../const";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.innerRenew}>
        <div className={styles.gnbWrap}>
          <h1 className={styles.logo}>
            <Link className={styles.btn} to="/" title="메인홈">
              로고
            </Link>
          </h1>

          <nav className={styles.gnb}>
            <ul>
              {listData.map(category => {
                return (
                  <li key={category.id} className={styles.list}>
                    <a href={category.link}>
                      <i>
                        <img src={category.path} alt="" />
                      </i>
                      <span>{category.listName}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.btnArea}>
            <a className={styles.btnCart} href="#">
              <strong className={styles.topCartNum}>0</strong>
              <span className="sr-only">장바구니</span>
            </a>

            <button className={styles.btnGnb} type="button">
              <img src="/assets/images/menu-icon.svg" alt="" />
              <span className="sr-only">gnb열기</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
