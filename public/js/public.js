document.body.style.height = window.innerHeight + "px";

/*动态改变根元素字体大小*/
function recalc() {
	
	var clientWidth = document.documentElement.clientWidth;
	if(!clientWidth) return;
	document.documentElement.style.fontSize = 40 * (clientWidth / 750) + 'px';
								// 字体大小   = 1个rem单位表示多少个像素（设备的宽度   /设计宽度）
}

function initRecalc() {
	var clientWidth = document.documentElement.clientWidth;
	recalc();
	var resizeEvt = 'osrientationchange' in window ? 'orientationchange' : 'resize';
	if(!document.addEventListener) return;
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded', recalc, false);
	if(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize) {
		var size = window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.split('p')[0];
　　　　　　   //这里再取出当前html的font-size，和你想附的值进行比较，
		//这里为什么不直接用size< 原因是正常机型的size也不一定等于你想附的值，尝试了很多机型，除了问题机型外，一般差距很小，另一半完全相等;      
　            //为什么不直接*1.25 也不解释了 最终比例不一定是1.25                
		if(size*1.2 < 40 * (clientWidth / 750)) {
　　　　　　　　　　//如果当前html的font-size 的1.2倍仍然小于 之前想设置的值，就说明是问题机型，给之前想附的值乘1.25倍，这样他会被系统再次除1.25得到的才是我们想附的值
		   docEl.style.fontSize = 50 * (clientWidth / 750) + 'px';
		}
	  }
}
initRecalc();	
// var docEl = doc.documentElement,
//     setFontSize = function() {
//        var clientWidth = document.documentElement.clientWidth,
//            timer;
//            if(!clientWidth) return;
// 　　　　　　 //原本对于html的字号设置 我这里用的是750的标准 ，640的也是同理
//            docEl.style.fontSize = 40 * (clientWidth / 750) + 'px';

// 　　　　　　
//            if(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize) {
//               var size = window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.split('p')[0];
//  　　　　　　   //这里再取出当前html的font-size，和你想附的值进行比较，
//               //这里为什么不直接用size< 原因是正常机型的size也不一定等于你想附的值，尝试了很多机型，除了问题机型外，一般差距很小，另一半完全相等;      
// 　            //为什么不直接*1.25 也不解释了 最终比例不一定是1.25                
//               if(size*1.2 < 100 * (clientWidth / 750)) {
// 　　　　　　　　　　//如果当前html的font-size 的1.2倍仍然小于 之前想设置的值，就说明是问题机型，给之前想附的值乘1.25倍，这样他会被系统再次除1.25得到的才是我们想附的值
//                  docEl.style.fontSize = 125 * (clientWidth / 750) + 'px';
//               }
//             }
//        };
// 复制代码