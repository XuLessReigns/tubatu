
$(function(){
	var $isTrue = true;
	$(".reg_tab ul li").click(function(){
		$(".reg_tab ul li").removeClass("on");
		$(this).addClass("on");
	});
	$("input").focus(function(e){
		if($(e.target).attr("id")=="emailAndPhone"){
			$(e.target).addClass("focus");
			$(e.target).next().hide();
		}
		if($(e.target).attr("id")=="userName"){
			$(e.target).addClass("focus");
			$(e.target).next().hide();
		}
		if($(e.target).attr("id")=="useNum"){
			$(e.target).addClass("focus");
			$(e.target).next().hide();
		}
		if($(e.target).attr("id")=="autoCode"){
			$(e.target).addClass("focus");
			$(e.target).next().next().hide();
		}
	});
	$("input").blur(function(e){
		if($(e.target).attr("id")=="emailAndPhone"){
			var v = $(this).val();
			if(v.length==0){
				$(e.target).attr("class","error");
				$(e.target).next().show();
				$isTrue = false;
			}else{
				if(regExpManger.mobileReg.test(v)){
					$(e.target).removeAttr("class");
					$(e.target).next().hide();
					
				}else{
					$(e.target).attr("class","error");
					$(e.target).next().show().html("<em class=\"\"></em>手机号格式不对");
					$isTrue = false;
				}
			}	
		}
		if($(e.target).attr("id")=="userName"){
			var v = $(this).val();
			if(v.length==0){
				$(e.target).attr("class","error");
				$(e.target).next().show();
				$isTrue = false;
			}else{
				if(regExpManger.userNameReg.test(v)){
					$(e.target).removeAttr("class");
					$(e.target).next().hide();
				}else{
					$(e.target).attr("class","error");
					$(e.target).next().show();
					$isTrue = false;
				}
			}	
		}
		if($(e.target).attr("id")=="useNum"){
			var v = $(this).val();
			if(v.length==0){
				$(e.target).attr("class","error");
				$(e.target).next().show();
				$isTrue = false;
			}else{
				if(regExpManger.pwdReg.test(v)){
					$(e.target).removeAttr("class");
					$(e.target).next().hide();
				}else{
					$(e.target).attr("class","error");
					$(e.target).next().show();
					$isTrue = false;
				}
			}	
		}
		if($(e.target).attr("id")=="autoCode"){
			var v = $(this).val();
			var v1 = $(this).next().val();
			if(v==v1){
				$(e.target).removeAttr("class");
				$(e.target).addClass("autoCode");
				$(e.target).next().next().hide();
			}else{
				$(e.target).attr("class","error autoCode");
				$(e.target).next().next().show();
				$isTrue = false;
			}	
			
		}	
		
	});

	
	$("#hyzm").click(function(){
		var arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var str = "";
		for(var i = 0;i<4;i++){
			var index = parseInt(arr.length*Math.random());
			str+=arr[index];
		}
		$(this).val(str);
	});
	$(".btn_login").click(function(){
		if($("#as_service").prop("checked")){//选中的情况下
			$("#as_service").parent().next().hide();
			$isTrue = true;
			if($("#emailAndPhone").blur()&&$("#userName").blur()&&$("#useNum").blur()&&$("#autoCode").blur()){//利用&&的短路实现追踪
				if($isTrue){
					var userName = $("#userName").val();
					var passWord = $("#useNum").val();
					$.ajax({
						type:"GET",
						url:"http://10.9.158.170:8080/API/user/check.aspx",
						data:{username:userName},
						dataType:"jsonp",
						success:function(data){
							console.log(data);
							if(data.result=="no"){
								$("#userName").attr("class","error");
								$("#userName").next().show().html("该用户名已注册！");
							}else{
								$.ajax({
									type:"GET",
									url:"http://10.9.158.170:8080/API/user/add.aspx",
									data:{username:userName,password:passWord},
									dataType:"jsonp",
									success:function(data){
										console.log(data);
									},
									timeout:3000,
									error:function(obj,status,error){
				                        console.log(arguments);
				                    }
								});
							}
						},
						timeout:3000,
						error:function(obj,status,error){
	                        console.log(arguments);
	                    }
					});
					
				}
			}
		}else{//未选中	
			$("#as_service").parent().next().show();
		}
	});
	
});
