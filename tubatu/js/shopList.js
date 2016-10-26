$(function(){
//	$.ajax({
//		"type":"GET",
//		"url":"../js/shopList.json",
//		
//	});
	$.get("../js/shopList.json",function(data){
		var html = "";
		$.each(data, function(i,o) {
			html += "<li class=\"\">" +
							"<a href=\"detail.html?"+o.pid+"\" class=\"pic\" target=\"_blank\">" +
								"<img data-original=\""+o.imgSrc+"\" class=\"lazy\" width=\"210\" height=\"210\" style=\"display: inline-block;\" />" +
							"</a>" +
							"<div class=\"cur_pric\">" +
								"<p class=\"cur_msg\">" +
									"<a href=\"javascript:;\" target=\"_blank\">" +
										o.pName +
									"</a>" +
								"</p>" +
								"<p class=\"f_c_e81a62 cur_msg\">"+o.desc+"　</p>" +
								"<p class=\"pri_msg\">" +
									"￥<span class=\"f_arial\">"+o.price+"</span><del>$"+o.yprice+"</del>" +
								"</p>" +
								"<p class=\"pri_total\">" +
									"已出售<span>"+o.count+"</span>件" +
								"</p>" +
							"</div>" +
						"</li>";
		});
		$("#goodsList").html(html);	
		$(".lazy").lazyload({
                 effect : "fadeIn", 
                 threshold : 20,	
                 placeholder : "../images/grey1.gif",
//               event:"mousemove"
            });
	});
	
});

