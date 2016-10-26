$(function(){
	$(".first").hover(function(){
		$("#goodsMenu").css("display","block");
	},function(){
		$("#goodsMenu").css("display","none");
	});
	
	
	
//	$.get("../js/detail.json",function(data){
//		var html = "";
//		$.each(data, function(i,o) {
//			html += "<li>"
//					+"<a href=\"javascript:;\">"
//					+"<img  src=\""+o.smallImg+"\" width=\"64\" height=\"64\" >"
//					+"</a>"
//					+"</li>";
//			$("#share_imgs").html(html);
//			$("#share_imgs").children().eq(0).children().attr("class","focus");
//		});
//		$("#share_imgs>li").click(function(){
//			var $num = $(this).index();
//			$("#share_imgs>li").children().removeClass("focus");
//			$(this).children().addClass("focus");
//			$(this).parent().prev().prev().children().attr("src",data[$num].bigImg);
//			$(this).parent().prev().children().eq(0).attr("src",data[$num].middImg);
//		});
//		$(function(){
//			$("<img src=\""+data[0].middImg+"\" width=\"380\" height=\"380\" />").prependTo(".mall_big_img");
//			$("<span class=\"mall_img_filter\" style=\"width: 190px; height: 190px; display: none; left: 0px; top: 0px;\"></span>").appendTo(".mall_big_img");
//			$("<img style='position: absolute; left: 0px; top: 0px;' src='"+data[0].bigImg+"' width='760px' height='760px'>").prependTo(".mall_big_view");
//			$(".mall_big_img").hover(function(){
//				$(".mall_big_view").show();
//				$(".mall_img_filter").show();
//				$(".mall_big_img").mousemove(function(e){
//					var x = Math.max(Math.min(e.pageX - $(".mall_big_img").offset().left - $(".mall_img_filter").width() / 2,380 - $(".mall_img_filter").width()),0);
//					var y = Math.max(Math.min(e.pageY - $(".mall_big_img").offset().top - $(".mall_img_filter").height() / 2,380 - $(".mall_img_filter").height()),0);
//					$(".mall_img_filter").css({
//						left:x,
//						top:y
//					});
//					$(".mall_big_view>img").css({
//						left:-x*2,
//						top:-y*2
//					});
//				});
//			},function(){
//				$(".mall_big_view").hide();
//				$(".mall_img_filter").hide();
//			});
//		});
//		
//	});
	

	
});
