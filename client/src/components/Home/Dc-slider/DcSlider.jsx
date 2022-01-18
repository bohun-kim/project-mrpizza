import React from "react";
import styles from "./DcSlider.module.css";
import { dcSlideList } from "../../../const";

function DcSlider() {
  return (
    <div>
      <div className={styles.dcSliderItem}>
        <ul>
          {dcSlideList.map(item => {
            return (
              <li>
                <a href="discount">
                  <span>{item.discountName}</span>
                  <br />
                  <strong>{item.discount}</strong>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default DcSlider;
