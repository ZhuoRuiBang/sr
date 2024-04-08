import React from "react";
import "./index.scss";

// 遮挡层 内容通过子组件定义
export default function Index() {
  const style = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "fixed",
    zIndex: "99",
  };
  return (
    <div className="mask" style={style}>
      <div className="age-tip" style={{ display: "none" }}>
        <div className="main-container">
          <div className="tip-title">《崩坏:星穹铁道》适龄提示</div>
          <div className="tip-content">
            <p>
              1、本游戏是一款3D角色扮演类回合制游戏，适用于年满12周岁及以上的用户，建议未成年人在家长监护下使用游戏产品。
            </p>
            <p style={{ whiteSpace: "pre-wrap", minHeight: "1.5em" }}></p>
            <p>
              2、本游戏基于架空背景展开主线、支线剧情，通过对话、交互推进剧情，游戏内还可以自由探索场景地图。游戏中有需要使用游戏角色进行的人机对战，玩法基于一定难度的思考判断，鼓励玩家随机应变、制定策略来取得对战胜利。游戏中有少量基于文字的陌生人社交系统，该社交系统遵循相关法律法规进行管理。{" "}
            </p>
            <p style={{ whiteSpace: "pre-wrap", minHeight: "1.5em" }}></p>
            <p>
              3、本游戏中有用户实名认证系统，认证为未成年的用户将受到以下游戏限制：
              未满8周岁的用户不能充值；8周岁以上未满16周岁的未成年用户，单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币；16周岁以上的未成年用户，单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。
              游戏仅会在周五、周六、周日和法定节假日的20时至21时，向未成年人提供1小时游戏服务。
            </p>
            <p style={{ whiteSpace: "pre-wrap", minHeight: "1.5em" }}></p>
            <p>
              4、游戏玩法鼓励玩家积极思考，制定和应用策略来取得对战的胜利。同时，在游戏中呈现了精美细腻的画面效果，能够为玩家提供优质的视觉体验。
            </p>
          </div>
        </div>
      </div>
      <div className="video-container" style={{ display: "none" }}>
        <video
          src="https://fastcdn.mihoyo.com/content-v2/hkrpg/101956/aedf07e020fc7c11acb25de645415ce3_4301370870677019677.mp4"
          autoPlay
          controls
          muted={true}
        ></video>
      </div>
    </div>
  );
}
