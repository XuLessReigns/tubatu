$(function(){
	
	(function(){
		var $shopcart = $.cookie("shopcart");
		if($shopcart){
			var arr = strOper.get($shopcart);
			var html = "";
			$.each(arr, function(i,o) {
				html +="<tr class=\"sp_msgtd on\" skuid=\""+o.id+"\">" +
							"<td align=\"left\" width=\"390\" class=\"first_spmsg pr_td\">" +
								"<div class=\"data\" style=\"display: none;\">" +
									"<input type=\"hidden\" name=\"cart[1]['skuid']\" class=\"num col_l\" value=\"1\" />" +
									"<span name=\"cities\"></span>" +
								"</div>" +
								"<div class=\"pr clear\">" +
									"<span class=\"item_line item_line_half\" name=\"line\"></span>" +
									"<input class=\"tbd_checkbox col_l checkGood\" name=\"chk_options\" type=\"checkbox\" />" +
									"<div class=\"clear\">" +
										"<a href=\"javascript:;\" target=\"_blank\" class=\"col_l\">" +
											"<img src=\""+o.img+"\" width=\"55\" height=\"55\" />" +
										"</a>" +
										"<div class=\"col_l\" style=\"width: 206px;\">" +
											"<a href=\"javascript:;\" target=\"_blank\" class=\"sp_text_intro\">"+o.pName+"</a>" +
											"<div class=\"sp_size\">" +
												"<span>适用气源：天然气</span>" +
												"<span>颜色分类：黑色</span>" +
											"</div>" +
										"</div>" +
										
									"</div>" +
								"</div>" +
							"</td>" +
							"<td align=\"center\" width=\"120\">" +
								"<span class=\"unitPrice\">"+o.price+"</span>" +
							"</td>" +
							"<td align=\"center\" width=\"160\">" +
								"<div class=\"ctr_qty clear\">" +
									"<a href=\"javascript:;\" class=\"sub col_l\" id=\"shiftnum\">-</a>" +
									"<input type=\"text\" id=\"textnum\" name=\"num\" class=\"num1 col_l\" value=\""+o.count+"\" onfocus=\"this.blur()\"/>" +
									"<a href=\"javascript:;\" class=\"plus col_l\" id=\"addnum\">+</a>" +
								"</div>" +
								"<div class=\"clear num_tips\" style=\"display: none;\"></div>" +
							"</td>" +
							"<td class=\"hlight\" width=\"221\" align=\"center\">" +
								"<span class=\"subtotal\">"+o.count*o.price+"</span>" +
							"</td>" +
							"<td align=\"center\">" +
								"<em class=\"cart_ico_operate delgoodtail\"></em>" +
							"</td>" +
						"</tr>";
				$("table[name=oneself] tbody").html(html);	
			});
		}
	})();
	
	(function(){
		var $shopcart = $.cookie("shopcart");
		var $totalnum = 0;
		var $totalprice = 0;
		if($shopcart){
			$(".cart_empty_box").hide();
			$(".progress_bills,.cart_details_list,.account_total").show();
			var arr = strOper.get($shopcart);
			$.each(arr, function(i,o) {
				$totalnum += parseInt(o.count);
				$totalprice += parseInt(o.count)*parseInt(o.price);
			});
			$("#totalNum").html($totalnum);
			$("span[name=totalgoods]").html($totalnum);
			$("#totalPrice").html($totalprice);
			$(".all_price").html($totalprice);
		}else{
			$(".cart_empty_box").show();
			$(".progress_bills,.cart_details_list,.account_total").hide();
		}
		$(".all_checked").prop("checked","checked");
		if($(".all_checked").prop("checked")){
			$(".checkGood").prop("checked","checked");
		}
//		else{
//			$(".tbd_checkbox").removeAttr("checked");
//		}
	})();
	
	
	$("a[id=shiftnum]").click(function(){
		var $num = $(this).next().val();
		$num--;
		if($num<1){
			$num = 1;
		}
		$(this).next().val($num);
		var xiaoji = $num*parseInt($(this).parent().parent().prev().children().html());
		$(this).parent().parent().next().html(xiaoji);
		change($(this),$num);
	});
	$("a[id=addnum]").click(function(){
		var $num = $(this).prev().val();
		$num++;
		$(this).prev().val($num);
		var xiaoji = $num*parseInt($(this).parent().parent().prev().children().html());
		$(this).parent().parent().next().html(xiaoji);
//		var id = $(this).parent().parent().parent().attr("skuid");
//		var str = $.cookie("shopcart");
//		var arr = str.split("|");
//		for(var i = 0;i<arr.length;i++){
//			var arr1 = arr[i].split("#");
//			if(id==arr1[0]){
//				arr1[arr1.length-1] = $num;
//				arr[i] = arr1.join("#");
//				break;
//			}
//		}
//		var str1 = arr.join("|");
//		$.cookie("shopcart",str1);
		change($(this),$num);
	});
	function change(dom,$num){
		var id = dom.parent().parent().parent().attr("skuid");
		var str = $.cookie("shopcart");
		var arr = str.split("|");
		for(var i = 0;i<arr.length;i++){
			var arr1 = arr[i].split("#");
			if(id==arr1[0]){
				arr1[arr1.length-1] = $num;
				arr[i] = arr1.join("#");
				break;
			}
		}
		var str1 = arr.join("|");
		$.cookie("shopcart",str1);
		changenum();
	}
	
	$(".delgoodtail").click(function(){
		var id = $(this).parent().parent().attr("skuid");
		var str = $.cookie("shopcart");
		var str = strOper.del(str,id);
		$.cookie("shopcart",str);
		$tr = $(this).parent().parent().index();
		$(".sp_msgtd:eq("+$tr+")").remove();
		changenum();
	});
	function changenum(){
		var $totalnum = 0;
		var $totalprice = 0;
		var $shopcart = $.cookie("shopcart");
		var arr = strOper.get($shopcart);
		$.each(arr, function(i,o) {
			$totalnum += parseInt(o.count);
			$totalprice += parseInt(o.count)*parseInt(o.price);
		});
		$("#totalNum").html($totalnum);
		$("span[name=totalgoods]").html($totalnum);
		$("#totalPrice").html($totalprice);
		$(".all_price").html($totalprice);
	}
	
	$(".all_checked").click(function(){
		if($(this).prop("checked")){
			$(".checkGood").prop("checked","checked");
			changenum();
		}else{
			$(".checkGood").prop("checked","");
			$("#totalNum").html("0");
			$("#totalPrice").html("0");
			$(".all_price").html("0");
		}
	});
	$(".tbd_checkbox").click(function(){
		var $flag = true;
		var arr = [];
		$.each($(".tbd_checkbox"),function(i,o){
			if(!$(o).prop("checked")){
				$flag = false;
			}
		});
		console.log($flag)
		var id = $(this).parent().parent().parent().attr("skuid");
		if($flag){
			$(".all_checked").prop("checked","checked");
			changenum();
		}else{
			$(".all_checked").prop("checked","");
			$.each($(".tbd_checkbox"),function(i,o){
				if($(o).prop("checked")){
					arr.push($(o).parent().parent().parent().attr("skuid"));
				}
			});
			changeCheckNum(arr);
		}	
	});
		
	function changeCheckNum(data){
		var $totalnum = 0;
		var $totalprice = 0;
		var $shopcart = $.cookie("shopcart");
		var arr = strOper.get($shopcart);
		$.each(data, function(i,o){
			var id = o;
			$.each(arr, function(i,o) {
				if(o.id==id){
					console.log(o.id);
					$totalnum += parseInt(o.count);
					$totalprice += parseInt(o.count)*parseInt(o.price);
				}
			});
		});
		$("#totalNum").html($totalnum);
		$("#totalPrice").html($totalprice);
		$(".all_price").html($totalprice);
	}
	
	(function(){
		var num = 1;
		var flag = true;
		$("#leftArrow").click(function(){
			if(flag){
				flag = false;
				num--;
				if(num<0){
					$("#leftArrow").next().next().css("left","-1920px");
					num = 1;
					$(this).next().next().animate({left:-num*960},400);
					flag = true;
				}
				else{
					$(this).next().next().animate({left:-num*960},400,function(){
						if(num==0){
							$("#leftArrow").next().next().css("left","-1920px");
							num = 2;
						}
						flag = true;
					});
				}
				
			}
		});
		$("#rightArrow").click(function(){
			if(flag){
				flag = false;
				num++;
				if(num>2){
					num = 1;
					$(this).next().animate({left:-960*num},400);
					flag = true;
				}
				$(this).next().animate({left:-960*num},400,function(){
					if(num==2){
						$("#rightArrow").next().css("left","0px");
						num = 0;
					}
					flag = true;
				});
			}
		});
	})();
	
});
