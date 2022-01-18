import React, { useState } from "react";
import styles from "./Menu.module.css";
import { pizzaList, simplePizzaList } from "../../const";
import { btnList } from "../../const";
import { NavLink } from "react-router-dom";
import Modal from "./Modal/Modal";

function Menu() {
  const [isToggle, setIsToggle] = useState(false);
  const [hover, setHover] = useState({});

  const onToggle = e => {
    e.preventDefault();
    setIsToggle(!isToggle);
  };

  const onHover = id => {
    setHover(pre => ({
      ...pre,
      [id]: !pre[id],
    }));
  };

  console.log(hover);
  console.log(hover[1]);
  return (
    <div className={styles.categoryWrap}>
      {/* header */}
      <div className={styles.category}>
        <ul className={styles.menuCategory}>
          {btnList.map(item => {
            return (
              <>
                <li key={item.id}>
                  <NavLink
                    exact
                    className={styles.link}
                    to={item.link}
                    activeClassName={styles.selected}
                    title={item.btnName}
                  >
                    {item.btnName}
                  </NavLink>
                </li>
              </>
            );
          })}
        </ul>
      </div>

      {/*  container */}
      <div className={styles.container}>
        <section className={styles.contents}>
          <ul className={styles.menuList}>
            {pizzaList.map(list => (
              <>
                <li key={list.id} className={styles.pizzaItem}>
                  <div onMouseUp={() => onHover(list.id)}>
                    <img
                      className={styles.itemImg}
                      src={list.path}
                      alt="제품 이미지"
                    />
                    <strong>{list.pizzaName}</strong>
                  </div>
                  <div className={styles.priceContainer}>
                    <div className={styles.menuRdo}>
                      <label id="price_r_0">
                        <input
                          type="radio"
                          defaultValue={list.priceR}
                          className={styles.radio}
                          id="price_r_0"
                          name="price_r_0"
                          data-size="R"
                        />

                        <span className={styles.priceR}>
                          <p>R</p>
                          <span className="sr-only">사이즈</span>
                          <p>{list.priceR}</p>
                          <span className="sr-only">원</span>
                        </span>
                      </label>
                    </div>

                    <div className={styles.menuLdo}>
                      <label id="price_r_0">
                        <input
                          type="radio"
                          value={list.priceL}
                          className={styles.radio}
                          id="price_r_0"
                          name="price_r_0"
                          data-size="R"
                        />

                        <span className={styles.priceL}>
                          <p>L</p>
                          <span className="sr-only">사이즈</span>
                          <p>{list.priceL}</p>
                          <span className="sr-only">원</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  {hover[list.id] ? (
                    <div className={styles.hiddenInfo}>
                      <div className={styles.btnDiv}>
                        <button
                          onClick={onToggle}
                          className={styles.search}
                        ></button>
                        <button className={styles.cart}></button>
                        <button className={styles.order}></button>
                      </div>

                      <p>{list.desc}</p>
                    </div>
                  ) : null}

                  <div className={styles.modal}></div>
                  {isToggle ? <Modal isToggle={setIsToggle} list={list} /> : ""}
                </li>
              </>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Menu;
