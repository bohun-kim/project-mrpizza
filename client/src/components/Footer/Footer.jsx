import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.lineArea}>
        <div className={styles.lineAreaGroup}>
          <ul className={styles.linkList}>
            <li>
              <a href="login/rule">개인정보취급방침</a>
            </li>
            <li>
              <a href="login/rule">이용약관</a>
            </li>
            <li>
              <a href="/brand/franchise">가족점모집</a>
            </li>
            <li>
              <a href="/cscenter/cscenter_main">고객만족센터</a>
            </li>
            <li>
              <a href="#popGroupOrder">단체주문</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerInfo}>
        <div className={styles.buisnessInfo}>
          <div className={styles.infoWrap}>
            <div>
              <p>
                서울시 서초구 효령로 132 대표이사:이종영 개인정보
                관리책임자:김정한 통신판매업:2009-서울서초-1700 사업자등록번호
                214-81-93179
              </p>

              <p className={styles.copy}>
                Copyright © MP DAESAN. All rights reserved.
              </p>
            </div>

            <ul className={styles.snsList}>
              <li className={styles.facebook}>
                <a href="https://www.facebook.com/mrpizzalove">
                  <span>미스터피자 페이스북</span>
                </a>
              </li>
              <li className={styles.kakao}>
                <a href="https://story.kakao.com/ch/mrpizza">
                  <span>미스터피자 카카오스토리</span>
                </a>
              </li>
              <li className={styles.instagram}>
                <a href="https://instagram.com/mrpizzalove">
                  <span>미스터피자 인스타그램</span>
                </a>
              </li>
              <li className={styles.blog}>
                <a href="https://blog.naver.com/mrpizzalove">
                  <span>미스터피자 블로그</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.awardWrap}>
          <ul>
            <li>
              <img
                src="//cdn.mrpizza.co.kr/2014_resources/images/common/img_award_01.jpg"
                alt=""
              />
              <span>
                대한민국 대표 <br />
                고객만족도 조사 <br />
                7회 수상 <br />
                (2007·2009-2014)
              </span>
            </li>
            <li>
              <img
                src="//cdn.mrpizza.co.kr/2014_resources/images/common/img_award_02.jpg"
                alt=""
              />
              <span>
                좋은기업 대상 <br />
                9회 연속수상
              </span>
            </li>
            <li>
              <img
                src="//cdn.mrpizza.co.kr/2014_resources/images/common/img_award_03.jpg"
                alt=""
              />
              <span>
                브랜드스타 <br />
                12회 연속수상
              </span>
            </li>
            <li>
              <img
                src="//cdn.mrpizza.co.kr/2014_resources/images/common/img_award_04_210119.jpg"
                alt=""
              />
              <span>
                2021년 <br />
                세계일류상품 <br />
                차세대부분수상
              </span>
            </li>
            <li>
              <img
                src="//cdn.mrpizza.co.kr/2014_resources/images/common/img_award_05.jpg"
                alt=""
              />
              <span>
                세계 피자대회 <br />
                2019년 2관왕
              </span>
            </li>
          </ul>

          <p className={styles.num}>
            전화주문
            <strong>1577-0077</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
