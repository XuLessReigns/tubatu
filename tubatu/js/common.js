$(function(){
	(function(){
		var $num;
		$("#goodsMenu>li:not(:last)").mouseenter(function(){
			$(".ps_bg_f7f7f7").css("display","none");
			$num = $(this).index();
			console.log($num);
			$(".ps_bg_f7f7f7").eq($num).css("display","block");
		});
		$(".first").mouseleave(function(){
			$(".ps_bg_f7f7f7").eq($num).css("display","none");
		});
	})();
	
	$(window).scroll(function(){
		if($(window).scrollTop() > $(window).height()){
			$(".return_top dt").css("display","block");
		}
		else{
			$(".return_top dt").css("display","none");
		}
	});
	$(".return_top>a").click(function(){
		console.log("ok")
		$("html,body").animate({
			scrollTop:0
		},600);
	});
	$(".cart_tip1").hover(function(){
		$(".cart_tip1 .cart_tip").stop().animate({left:-98},400);
	},function(){
		$(".cart_tip1 .cart_tip").stop().animate({left:0},400);
	});
	$(".cart_tip2").hover(function(){
		$(".cart_tip2 .cart_tip").stop().animate({left:-98},400);
	},function(){
		$(".cart_tip2 .cart_tip").stop().animate({left:0},400);
	});
	$(".cart_tip3").hover(function(){
		$(".kefu .ewmImg").stop().animate({left:-121},400);
	},function(){
		$(".kefu .ewmImg").stop().animate({left:0},400);
	});
	$(".cart_tip4").hover(function(){
		$(".cart_tip4 .cart_tip").stop().animate({left:-98},400);
	},function(){
		$(".cart_tip4 .cart_tip").stop().animate({left:0},400);
	});
	(function(){
		var flag = true;
		$(".rightSide_middle .shopcart").click(function(){
			
			if(flag){
				flag = false;
				$("#rightSide").animate({
					right:300
				},400);
				$(".shopping_list").animate({
					width:300
				},400);
			}else{
				flag = true;
				$("#rightSide").animate({
					right:0
				},400);
				$(".shopping_list").animate({
					width:0
				},400);
			}
			
		});
	})();
	
	
	(function(){
		var $flag = true;
		var $term;
		
		var getShopcart = function(){
		var $shopcart = $.cookie("shopcart");
			if($shopcart!=undefined){
				var json = strOper.get($shopcart);
				var html = "";
				$.each(json, function(i,o) {
					html += "	<li pro_id=\""+o.id+"\">"
							+"		<dl class=\"clear\">"
							+"			<dt>"
					 		+"				<a href=\"javascript:;\"><img width=\"55\" height=\"55\" src=\""+o.img+"\" /></a>"
							+"			</dt>"
							+"			<dd>"
							+"				<a href=\"javascript:;\" class=\"sp_intro\">"
							+"					<p>"+o.pName+"</p>"
							+"				</a>"
							+"			</dd>"
							+"			<dd class=\"shopping_price\">"+o.price+"</dd>"
							+"			<dd class=\"shoping_count\">x&nbsp;"+o.count+"</dd>"
							+"			<dd class=\"del_ico\"></dd>"
							+"		</dl>"
							+"	</li>";
				});
				$(".shopping_list_ul").html(html);
				
			}
		}
		getShopcart();
		$(".add_cart_btn").click(function(){
			var $totalnum = parseInt($(".count").html());
			$totalnum++;
			$(".count").html($totalnum);
			$(".totalnum").html($totalnum);
			//ID#图片#产品名#价格#数量
			var id = $("#sku_id").html();
			var img = $("#share_imgs>li>a>img").attr("src");
			var pName = $("#p_name").children().html();
			var price = $("#show_goods_price .big_em span").html();
			var count = $(".tb_stock>input").val()
			var str = id + "#" + img + "#" + pName + "#" + price + "#" + count;
			var $shopcart = $.cookie("shopcart");
			if(!$shopcart){
                $.cookie("shopcart",str,{
                	expires:7
                });
			}else{
				var result = strOper.add($shopcart,str);
				$.cookie("shopcart",result);
			}
			getShopcart();
			

			clearTimeout($term);
			if($flag){
				$flag = false;
				$(".rightSide_middle .shopcart").click();
			}
			$term = setTimeout(function(){
				$flag = true;
				$(".rightSide_middle .shopcart").click();
			},4000);
		});	
		
	})();
	
	
	(function(){
		var $shopcart = $.cookie("shopcart");
		var $totalnum = 0;
		var $totalprice = 0;
		if($shopcart!=undefined){
			var arr = strOper.get($shopcart);
			$.each(arr, function(i,o) {
				$totalnum += parseInt(o.count);
				$totalprice += parseInt(o.count)*parseInt(o.price);
			});
			$(".count").html($totalnum);
			$(".totalnum").html($totalnum);
			$(".totalprice").html($totalprice);
		}else{
			$(".count").html("0");
		}
		if($shopcart){
			$(".cart_empty_ico,.cart_empty_text,.empty_status_btn").hide();
			$(".jiesuan,.settle_accounts").show();
		}else{
			$(".cart_empty_ico,.cart_empty_text,.empty_status_btn").show();
			$(".jiesuan,.settle_accounts").hide();
		}
		
	})();
	
	$(".del_ico").click(function(){
		var id = $(this).parent().parent().attr("pro_id");
		var $shopcart = $.cookie("shopcart");
		var result = strOper.del($shopcart,id);
		$.cookie("shopcart",result);
		var $li = $(this).parent().parent().index();
		console.log($li)
		$(".shopping_list_ul>li:eq("+$li+")").remove();
		
		(function(){
			var $shopcart = $.cookie("shopcart");
			var $totalnum = 0;
			var $totalprice = 0;
			if($shopcart!=undefined){
				var arr = strOper.get($shopcart);
				$.each(arr, function(i,o) {
					$totalnum += parseInt(o.count);
					$totalprice += parseInt(o.count)*parseInt(o.price);
				});
				$(".count").html($totalnum);
				$(".totalnum").html($totalnum);
				$(".totalprice").html($totalprice);
			}else{
				$(".count").html("0");
			}
			if($shopcart){
				$(".cart_empty_ico,.cart_empty_text,.empty_status_btn").hide();
				$(".jiesuan,.settle_accounts").show();
			}else{
				$(".cart_empty_ico,.cart_empty_text,.empty_status_btn").show();
				$(".jiesuan,.settle_accounts").hide();
			}
			
		})();
	});
	
	
	
});
