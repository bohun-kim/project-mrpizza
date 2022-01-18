import React, { useState } from "react";
import styles from "./Modal.module.css";

function Modal({ list, isToggle }) {
  const offModal = e => {
    e.preventDefault();
    isToggle(!isToggle);
  };

  //   const addAlert = e => {
  //     e.preventDefault();
  //     alert("주문되었습니다.");
  //     isToggle(!isToggle);
  //   };

  console.log(list);

  return (
    <>
      <div className={styles.modal}></div>
      <div className={styles.modalContent}>
        <div className={styles.popTop}>
          <h1>치즈블라썸스테이크</h1>
          <p>와인숙성 스테이크와 6가지 치즈의 해피엔딩</p>
        </div>

        <div className={styles.popContainer}>
          <div className={styles.popContent}>
            <div className={styles.productIgm}>
              <img src="/assets/images/pizza/pizza-01.jpeg" alt="제품이미지" />
            </div>
          </div>

          <div className={styles.popOpt}>
            <ul>
              <li className={styles.qty}>
                <strong>
                  <label>수량</label>
                </strong>
                <input type="text" defaultValue={1} />
                <button className={styles.plus}></button>
                <button className={styles.minus}></button>
              </li>

              <li className={styles.price}>
                <strong>
                  <label>가격</label>
                </strong>

                <div className={styles.priceContainer}>
                  <div className={styles.menuRdo}>
                    <label id="price_r_0">
                      <input
                        type="radio"
                        className={styles.radio}
                        id="price_r_0"
                        name="price_r_0"
                        data-size="R"
                      />

                      <span className={styles.priceR}>
                        <p>R</p>
                        <span className="sr-only">사이즈</span>
                        <p>22900</p>
                        <span className="sr-only">원</span>
                      </span>
                    </label>
                  </div>

                  <div className={styles.menuLdo}>
                    <label id="price_r_0">
                      <input
                        type="radio"
                        className={styles.radio}
                        id="price_r_0"
                        name="price_r_0"
                        data-size="R"
                      />

                      <span className={styles.priceL}>
                        <p>L</p>
                        <span className="sr-only">사이즈</span>
                        <p>27900</p>
                        <span className="sr-only">원</span>
                      </span>
                    </label>
                  </div>
                </div>
              </li>

              <li className={styles.size}>
                <strong>조각정보</strong>

                <div>
                  <p className={styles.rSize}>
                    <img
                      className={styles.sizeImg}
                      src="https://cdn.mrpizza.co.kr/2014_resources/images/product/sizeR.gif"
                      alt="R사이즈"
                    />
                    <span>
                      레귤러 <br />
                      (2-3인용)
                    </span>
                  </p>

                  <p className={styles.lSize}>
                    <img
                      className={styles.sizeImg}
                      src="	https://cdn.mrpizza.co.kr/2014_resources/images/product/sizeL.gif"
                      alt="L사이즈"
                    />
                    <span>
                      라지 <br />
                      (3-4인용)
                    </span>
                  </p>
                </div>
              </li>

              <li className={styles.orderPrice}>
                <p>
                  <strong>주문금액</strong>
                  <strong>27900</strong>
                </p>
              </li>
            </ul>

            <div className={styles.btn}>
              <button>상세보기</button>
              <button>장바구니</button>
              <button>바로주문</button>
            </div>
          </div>
        </div>

        <a href="#" className={styles.popClose} onClick={offModal}></a>
      </div>
    </>
  );
}

export default Modal;
