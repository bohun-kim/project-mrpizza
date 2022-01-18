import React from "react";
import styles from "./Salad.module.css";
import { btnList } from "../../../const";
import { Route, Switch, NavLink } from "react-router-dom";

function Salad() {
  return (
    <div className={styles.categoryWrap}>
      <div>
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
    </div>
  );
}

export default Salad;
