# project-mrpizza

<img width="1440" alt="스크린샷 2021-09-29 오전 9 26 51" src="https://images.velog.io/images/bohun-kim/post/27b4ab5a-f5d1-47c9-a481-04d38d56f272/Jan-18-2022%2022-32-38.gif">

<img width="1440" alt="스크린샷 2021-09-29 오전 9 26 51" src="https://images.velog.io/images/bohun-kim/post/4fdde00d-d23e-4cda-899d-fcfc0687f9e4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-18%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.10.15.png">

# 목표

- 웹 사이트 기능 구현 (슬라이더 , 장바구니)

# 사용 기술

- HTML , CSS(PostCSS) , React.js
- React Slick

# 주요 기능

## 1 . 슬라이더 구현

<img width="1440" alt="스크린샷 2021-09-29 오전 9 26 51" src="https://images.velog.io/images/bohun-kim/post/cd1d1d8d-b818-4567-8a54-e15969bc0ddd/Jan-18-2022%2011-01-54.gif">

리액트에서 라이브러리를 사용을 원했기 때문에 인터넷 검색 중 react slick 이라는 슬라이더 라이브러리를 이용하여 구현하였습니다. <br/>

아래 코드 settings 안에서 슬라이더의 원하는 형태를 선택할 수 있습니다.

```js
import React from "react";
import styles from "./MainSllider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSllider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className={styles.slider1}>
      <Slider className={styles.btn} {...settings}>
        <div>
          <img className="img" src="/assets/images/main-slider1.jpeg" alt="" />
        </div>
        <div>
          <img src="/assets/images/main-slider1.jpeg" alt="" />
        </div>
        <div>
          <img src="/assets/images/main-slider1.jpeg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default MainSllider;
```

## 2. 상품 진열과 팝업

<img width="1440" alt="스크린샷 2021-09-29 오전 9 26 51" src="https://images.velog.io/images/bohun-kim/post/4d912268-3006-4265-a994-96410c758460/Jan-18-2022%2011-17-36.gif">

먼저 상품들을 const.js라는 곳에 배열 형태로 모아놓고 map 함수를 이용하여 배열 안의 갯수 만큼 나올 수 있도록 했습니다.

```js
// const.js
export const pizzaList = [
  {
    id: 1,
    path: "/assets/images/pizza/pizza-01.jpeg",
    type: "pizza",
    pizzaName: "멕시칸 하바네로 피자 세트",
    priceR: 22900,
    priceL: 27900,
    desc: "멕시칸 하바네로 피자+코울슬로+하바네로마요소스",
  },
  {
    id: 2,
    path: "/assets/images/pizza/pizza-02.jpeg",
    type: "pizza",
    pizzaName: "햄벅한새우",
    priceR: 27900,
    priceL: 35900,
    desc: "치즈 햄버거와 마요 콘새우의 행복한 맛남",
  },
  .
  .
  .
  {
    id: 18,
    path: "/assets/images//salad/salad-06.jpeg",
    type: "salad",
    pizzaName: "허니머스타드 소스",
    priceR: 100,
    priceL: 1000,
  },

  // Menu.jsx
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
                </li>
              </>
            ))}
          </ul>
        </section>
      </div>
```

map 함수 이용시 상품을 클릭했을 때 효과를 모두 적용되기 때문에 개별로 기능을 작동시키게 하기 위해서 map 함수를 사용한 const.js 데이터 안의 id 를 매개변수로 전달하여 해당하는 id를 가지고 있는 상품을 클릭했을 때 그 상품만 true 이고 나머지를 false로 만들어 개별적으로 작동하게 했습니다.

```js
const [hover, setHover] = useState({});

const onHover = id => {
  setHover(pre => ({
    ...pre,
    [id]: !pre[id],
  }));
};

return (
  <>
    {
      <div onMouseUp={() => onHover(list.id)}>
        <img className={styles.itemImg} src={list.path} alt="제품 이미지" />
        <strong>{list.pizzaName}</strong>
      </div>
    }
  </>
);
```
