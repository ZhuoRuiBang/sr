import React, { useEffect, useState } from "react";
import "./index.scss";
import { ReSize, setSize } from "@/utils/resize";
import classnames from "classnames";

export default function Index() {
  useEffect(() => {
    setSize();
    ReSize();
  }, []);
  const navList = ["首页", "新闻", "角色", "世界"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);
  //切换聚焦
  const clickActive = (index) => {
    setActiveIndex(index);
  };
  //开光背景音乐
  const switchPlay = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="nav">
      <div className="logo-wrapper">
        <img
          className="logo"
          src={
            "https://webstatic.mihoyo.com/upload/event/2022/07/29/c31dd1d732913e4ab5f3d4f03346a706_9097205533659112586.png"
          }
        />
      </div>
      <div className="nav_list">
        {navList.map((item, index) => {
          return (
            <li
              key={item}
              className={classnames("nav_item", {
                active: index === activeIndex,
              })}
              onClick={() => clickActive(index)}
            >
              {item}
            </li>
          );
        })}
        <li className="nav_item">社区</li>
        <li className="nav_item">充值中心</li>
      </div>
      <div className="pc-right-wrap">
        <div className="care-text">成长关爱系统</div>
        <div className="bgm">
          <div className="me-audio" onClick={() => switchPlay()}>
            <img
              src={require("@/assets/img/play-open.png")}
              className="play_icon"
              alt=""
            />
            <img
              src={require("@/assets/img/play-off.png")}
              className={"play_icon"}
              style={{ display: count % 2 === 1 ? "none" : "" }}
              alt=""
            />
          </div>
        </div>
        <div className="user-info-wrap">
          <div className="no-logoin">
            <div className="text">登 录</div>
            <img
              src={require("@/assets/img/user_icon.png")}
              className="logo-avator-ico"
              alt=""
            />
          </div>
        </div>
        <div className="btn-order">
          <div></div>
        </div>
      </div>
    </div>
  );
}
