# 50days50projects
HTML+CSS+JS practice！


## class1~10

html相关
```html

<small></small> 旁注，小字体
```

js相关

```js
const xxxx  = document.querySelector(".xxxx");
xxxx.classList.toggle("active");
xxxx.classList.add("active");
xxxx.classList.remove("active");

//获取元素距离页面顶部的距离
xxxx.box.getBoundingClientRect().top()

//audio
document.getElementById(sound).play()    // 播放音频
song.pause()  //暂停
song.currentTime = 0  //设置时间起点
```

css相关

```css
透明度
opacity: 0;
高斯模糊
filter: blur(0px);
背景颜色线性过渡
background-image: linear-gradient(90deg,#7d5fff,#322232);
横向移动
transform: translateX(200px);
旋转
transform: rotate(-20deg);
设置旋转端点
transform-origin: top left;
设置动画过渡方式
transition: transform 0.5s ease-in;
指定flex变化时的动画效果
transition: flex 0.7s ease-in;
设置动画缓动函数
transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
鼠标悬浮手势
cursor: pointer;
```


css伪类
```css
//处于激活状态时常用好看的处理方式
.btn:active{
    box-shadow: 2px 2px 5px #fc894d;给个阴影
    transform: scale(0.98);缩放一下

}
//处于选中时去除轮廓线
.btn:focus{
    outline: none;
}
```

布局相关
```css
流式布局
display:flex
flex-direction:row/column  行方向/列方向
align-items:center  垂直居中
justify-content:center  水平居中

display:inline-flex
```