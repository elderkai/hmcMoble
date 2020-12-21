
// window.onscroll = function () {

// }
// function debounce(fn, wait) {    
//     var timeout = null;    
//     return function() {        
//         if(timeout !== null)   clearTimeout(timeout);        
//         timeout = setTimeout(fn, wait);    
//     }
// }
// // 处理函数
// function handle() {    
//     var sTop=document.body.scrollTop+document.documentElement.scrollTop;
//     let topHeight = document.getElementsByClassName("getHeight")[0].offsetHeight;
//     let menu =  document.getElementsByClassName("van-tabs__wrap");
//     if(sTop>topHeight){
//     document.getElementsByClassName("van-tabs__wrap")[0].style.top=sTop-topHeight+"px";
//     }
//     else{
//     document.getElementsByClassName("van-tabs__wrap")[0].style.top=0;
//     }
// }
// 滚动事件
// window.addEventListener('scroll', debounce(handle, 100));