/*
 * 楼层导航 / gfloor.js v1.2(2015-02-16)
 *
 * By Goney W. @ http://www.uwyg.com
 *
 */
function gFloor(div, li, num, hide, ul) {
	$(window).scroll(function() {
		var curTop = $(window).scrollTop() + 200,
			aFloor = $(div + "1").offset().top,
			aFloorN = $(div + num).offset().top,
			aFloorNh = $(div + num).height(),
			aFloorNb = aFloorN + aFloorNh;
		if (curTop > aFloor && curTop < aFloorNb) {
			if (hide) $(ul).fadeIn()
		} else {
			$(li + "1").removeClass("cur").siblings().removeClass("cur");
			if (hide) $(ul).fadeOut()
		}
		for (var i = 1; i <= num; i++) {
			var curFloor = $(div + i).offset().top,
				curFloorH = $(div + i).height(),
				curFloorB = curFloor + curFloorH;
			if (curTop > curFloor && curTop < curFloorB) {
				$(li + i).addClass("cur").siblings().removeClass("cur")
			}
		}
	});
	for (var i = 1; i <= num; i++) {
		(function(g) {
			$(li + i).get(0).onclick = function() {
				var goFloor = $(div + g).offset().top;
				$("html,body").animate({
					scrollTop: goFloor
				}, "fast")
			}
		})(i)
	}
}
// e.g: gFloor(".gfloor-", ".gfloor-li-", 5, 1, ".gfloor-nav");
