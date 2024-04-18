import "./App.scss";
import { useEffect, useRef } from "react";
import Slide1 from "@/component/Slide1";
import Slide2 from "@/component/Slide2";
import Mask from "@/component/Mask";
import Tip from "@/component/Tip";
import { sky } from "@/utils/star-sky";
import { useSelector } from "react-redux";

function App() {
  const { isShow } = useSelector((state) => state.mask);
  console.log(isShow);
  const swiperElRef = useRef(null);
  useEffect(() => {
    sky();
    swiperElRef.current.addEventListener("slidechange", (e) => {
      const [Swiper] = e.detail;
      //
    });
  }, []);
  return (
    <div className="home">
      <swiper-container
        ref={swiperElRef}
        mousewheel={true}
        direction="vertical"
        effect="fade"
        fade-effect-cross-fade={true}
      >
        <swiper-slide>
          <Slide1 />
        </swiper-slide>
        <swiper-slide>
          <Slide2 />
        </swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
      </swiper-container>
      <Tip />
      <canvas id="canvas"></canvas>
      {isShow && <Mask />}
    </div>
  );
}

export default App;
