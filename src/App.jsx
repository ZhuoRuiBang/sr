import "./App.scss";
import { useEffect, useRef } from "react";
import Slide1 from "@/component/Slide1";
import Mask from "@/component/Mask";
import Tip from "@/component/Tip";
import { useSelector } from "react-redux";

function App() {
  const { isShow } = useSelector((state) => state.mask);
  console.log(isShow);
  const swiperElRef = useRef(null);
  useEffect(() => {
    swiperElRef.current.addEventListener("slidechange", (e) => {
      const [Swiper] = e.detail;
      console.log(Swiper.activeIndex);
    });
  }, []);
  return (
    <div className="home">
      <swiper-container
        ref={swiperElRef}
        mousewheel={true}
        direction="vertical"
      >
        <swiper-slide>
          <Slide1 />
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
      </swiper-container>
      <Tip />
      {isShow && <Mask />}
    </div>
  );
}

export default App;
