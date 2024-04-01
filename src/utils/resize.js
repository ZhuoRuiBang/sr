
// 根据页面宽度，计算出字体大小用于做自适应
export const setSize = () => {
  const fontsize = 50;
  let width = window.innerWidth
  let height = window.innerHeight
  console.log(window.outerHeight, height);
  if (width > 1280 && width !== window.outerWidth) {
    document.documentElement.style.fontSize = `${width / 1280 * fontsize}px`
  } else if (height > 720 && width === window.outerWidth) {
    document.documentElement.style.fontSize = `${height / 720 * fontsize}px`
  } else {
    document.documentElement.style.fontSize = `${fontsize}px`
  }
}
// 监听页面变化
export const ReSize = () => {
  window.addEventListener('resize', (e) => {
    // console.log(window.innerHeight);
    setSize()
  })
}
