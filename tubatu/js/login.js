$(function(){
	$(".login_tab").click(function(e){
		if($(e.target).is("a")){
			var $num = $(e.target).parent().index()
			$(e.target).parent().parent().children().removeClass("on");
			$(e.target).parent().addClass("on");
			if($num==0){
				$(".login_wrap").eq(0).show();
				$(".login_wrap").eq(1).hide();
			}else{
				$(".login_wrap").eq(0).hide();
				$(".login_wrap").eq(1).show();
			}	
		}
	});
	$(".wx_link").hover(function(){
		$(this).parent().prev().prev().hide();
		$(this).parent().prev().show();
	},function(){
		$(this).parent().prev().prev().show();
		$(this).parent().prev().hide();
	});
	$("#userName").focus(function(){
		$(this).css("border-color","rgb(159, 213, 185)")
	});
	$("#userName").blur(function(){
		$(this).css("border-color","rgb(221, 221, 221)")
	});
	$("#psw").focus(function(){
		$(this).css("border-color","rgb(159, 213, 185)")
	});
	$("#psw").blur(function(){
		$(this).css("border-color","rgb(221, 221, 221)")
	});
	
	$(".btn_login").click(function(){
		var userName = $("#userName").val();
		var passWord = $("#psw").val();
		if(userName.length==0){
			$("#userName").attr("class","error");
			$("#userName").next().show();
		}else{
			$("#userName").next().hide();
			if(passWord.length==0){
				$("#psw").attr("class","error");
				$("#psw").next().show();
			}else{
				$("#psw").next().hide();
				
				
				$.ajax({
					type:"post",
					url:"http://10.9.158.170:8080/API/user/login.aspx",
					async:true,
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
		}
		
	});

});
