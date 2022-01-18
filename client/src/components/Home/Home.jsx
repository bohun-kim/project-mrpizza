import React from "react";
import styles from "./Home.module.css";
import MainSllider from "./Main-slider/MainSllider";
import SwiperSlider from "./Swiper-slider/Swiperslider";
import LocationSlider from "./Locationslider/LocationSlider";
import DcSlider from "./Dc-slider/DcSlider";

function Home() {
  return (
    <>
      <section className={styles.mainSlideWrap}>
        <MainSllider className={styles.slider} />
      </section>

      <section className={styles.event}>
        <div className={styles.swiperContainer}>
          <SwiperSlider />
        </div>
        <div className={styles.location}>
          <LocationSlider />
        </div>
      </section>

      <section className={styles.dcSlide}>
        <div className={styles.innerRenew}>
          <h3>
            <span>특별한 할인혜택</span>
          </h3>
          <DcSlider />
        </div>
      </section>

      <section className={styles.notice}>
        <div className={styles.noticeGroup}>
          <div className={styles.news}>
            <h3>
              <span>NOTICE&NEWS</span>
              <button>더보기</button>
            </h3>

            <div className={styles.newsContainer}>
              <ul className={styles.newsWrapper}>
                <li className={styles.newsSlide}>
                  <a href="/alarm/notice">
                    <strong>[공지] 1월 피자뷔페 운영매장 안내</strong>
                    <span className={styles.data}>
                      2022.01.06<i></i>
                    </span>
                  </a>
                </li>
                <li className={styles.newsSlide}>
                  <a href="/alarm/notice">
                    <strong>[공지] 1월 오감만족 피자교실 진행매장 안내</strong>
                    <span className={styles.data}>
                      2022.01.06
                      <i></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.founded}>
            <h3>
              <span>창업문의</span>
            </h3>
            <div className={styles.recruitment}>
              <p>미스터피자 가족점 점주님을 모집합니다.</p>
              <strong>1670-8253</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
