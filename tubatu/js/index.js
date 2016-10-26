$(function(){
	$.get("../js/lunbo.json",function(data){
		var html = "";
		$.each(data, function(i,o){
			html += "<div class=\"lunBo_item\">"
					+"	<a href=\"javascript:;\"><img src=\""+o.imgSrc1+"\" /></a>"
					+"</div>"
					+"<div class=\"lunBo_item\">"
					+"	<a href=\"javascript:;\"><img src=\""+o.imgSrc2+"\" /></a>"
					+"</div>"
					+"<div class=\"lunBo_item\">"
					+"	<a href=\"javascript:;\"><img src=\""+o.imgSrc3+"\" /></a>"
					+"</div>"
					+"<div class=\"lunBo_item\">"
					+"	<a href=\"javascript:;\"><img src=\""+o.imgSrc4+"\" /></a>"
					+"</div>"
					+"<div class=\"lunBo_item\">"
					+"	<a href=\"javascript:;\"><img src=\""+o.imgSrc5+"\" /></a>"
					+"</div>";
		});
		$("#lunBo_back .lunBo").html(html);
		$("#listItem ul").click(function(e){
			if($(e.target).is("a")){
				$target = $(e.target);
				var $num = $target.html();
				var $lunbo = $target.parent().parent().parent().prev();
				var left = -($num-1)*1263;
				$lunbo.animate({
					left:left
				},600);
				$target.parent().parent().children().removeClass("on");
				$target.parent().parent().children().eq($num-1).addClass("on");
			}
		});
		function start(){
			var $count = 0;
			var $lunbo = $("#lunBo_back .lunBo");
			var termId = setInterval(function(){
				$count++;
				$lunbo.next().children().children().removeClass("on");
				$lunbo.next().children().children().eq($count==4?0:$count).addClass("on");
				if($count==4){
					$lunbo.animate({
						left:-1263*$count
					},600,function(){
						$lunbo.css("left",0);
						$count=0;
					});	
				}else{
					$lunbo.animate({
						left:-1263*$count
					},600);
				}
			},6000);
		}
		start();
	});
	
	
	$.get("../js/lunbo1.json",function(data){
		var html = "";
		$.each(data, function(i,o){
			html += "<li class=\"on\" style=\"opacity: 1; display: "+o.status+";\">"
					+"<a href=\"javascript:;\" target=\"_blank\" data-ptag=\"1_23_1_650\" class=\"clickstream_tag\">"
					+"<img src=\""+o.imgSrc+"\" data-original=\"\" width=\"479\" height=\"395\" class=\"lazy\" style=\"display: inline;\">"					+"</a>"
					+"</li>";
		});
		$(".floorA:eq(0) .banner_slider").html(html);
		(function(){
			var $n = 0;
			$(".floorA:eq(0) .bRight").click(function(){
				var $target = $(this);
				$li = $target.next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n++;
				if($n==4){
					$n = 0;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			$(".floorA:eq(0) .bLeft").click(function(){
				var $target = $(this);
				$li = $target.next().next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n--;
				if($n<0){
					$n = 3;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			var term;
			function start(){
				term = setInterval(function(){
					$(".floorA:eq(0) .bRight").click();
				},3000);
			}
			start();
			$(".floorA:eq(0) .sec2").mouseenter(function(){
				clearInterval(term);
			});
			$(".floorA:eq(0) .sec2").mouseleave(function(){
				start();
			});
			
			$(".floorA:eq(0) .sec2 .banner_indexing").click(function(e){
				if($(e.target).is("a")){
					$n = $(e.target).parent().index();
					if($(e.target).parent().attr("class")!="on"){
						$(".floorA:eq(0) .banner_slider>li").hide();
						$(".floorA:eq(0) .banner_slider>li").eq($n).fadeIn();
					}
					$(e.target).parent().parent().children().removeClass("on");
					$(e.target).parent().addClass("on");
				}
			});
		})();
	});
	$.get("../js/lunbo1.json",function(data){
		var html = "";
		$.each(data, function(i,o){
			html += "<li class=\"on\" style=\"opacity: 1; display: "+o.status+";\">"
					+"<a href=\"javascript:;\" target=\"_blank\" data-ptag=\"1_23_1_650\" class=\"clickstream_tag\">"
					+"<img src=\""+o.imgSrc+"\" data-original=\"\" width=\"479\" height=\"395\" class=\"lazy\" style=\"display: inline;\">"					+"</a>"
					+"</li>";
		});
		$(".floorA:eq(1) .banner_slider").html(html);
		(function(){
			var $n = 0;
			$(".floorA:eq(1) .bRight").click(function(){
				var $target = $(this);
				$li = $target.next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n++;
				if($n==4){
					$n = 0;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			$(".floorA:eq(1) .bLeft").click(function(){
				var $target = $(this);
				$li = $target.next().next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n--;
				if($n<0){
					$n = 3;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			var term;
			function start(){
				term = setInterval(function(){
					$(".floorA:eq(1) .bRight").click();
				},3000);
			}
			start();
			$(".floorA:eq(1) .sec2").mouseenter(function(){
				clearInterval(term);
			});
			$(".floorA:eq(1) .sec2").mouseleave(function(){
				start();
			});
			
			$(".floorA:eq(1) .sec2 .banner_indexing").click(function(e){
				if($(e.target).is("a")){
					$n = $(e.target).parent().index();
					if($(e.target).parent().attr("class")!="on"){
						$(".floorA:eq(1) .banner_slider>li").hide();
						$(".floorA:eq(1) .banner_slider>li").eq($n).fadeIn();
					}
					$(e.target).parent().parent().children().removeClass("on");
					$(e.target).parent().addClass("on");
				}
			});
		})();
	});

	$.get("../js/lunbo1.json",function(data){
		var html = "";
		$.each(data, function(i,o){
			html += "<li class=\"on\" style=\"opacity: 1; display: "+o.status+";\">"
					+"<a href=\"javascript:;\" target=\"_blank\" data-ptag=\"1_23_1_650\" class=\"clickstream_tag\">"
					+"<img src=\""+o.imgSrc+"\" data-original=\"\" width=\"479\" height=\"395\" class=\"lazy\" style=\"display: inline;\">"					+"</a>"
					+"</li>";
		});
		$(".floorA:eq(2) .banner_slider").html(html);
		(function(){
			var $n = 0;
			$(".floorA:eq(2) .bRight").click(function(){
				var $target = $(this);
				$li = $target.next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n++;
				if($n==4){
					$n = 0;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			$(".floorA:eq(2) .bLeft").click(function(){
				var $target = $(this);
				$li = $target.next().next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n--;
				if($n<0){
					$n = 3;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			var term;
			function start(){
				term = setInterval(function(){
					$(".floorA:eq(2) .bRight").click();
				},3000);
			}
			start();
			$(".floorA:eq(2) .sec2").mouseenter(function(){
				clearInterval(term);
			});
			$(".floorA:eq(2) .sec2").mouseleave(function(){
				start();
			});
			
			$(".floorA:eq(2) .sec2 .banner_indexing").click(function(e){
				if($(e.target).is("a")){
					$n = $(e.target).parent().index();
					if($(e.target).parent().attr("class")!="on"){
						$(".floorA:eq(2) .banner_slider>li").hide();
						$(".floorA:eq(2) .banner_slider>li").eq($n).fadeIn();
					}
					$(e.target).parent().parent().children().removeClass("on");
					$(e.target).parent().addClass("on");
				}
			});
		})();
	});

	$.get("../js/lunbo1.json",function(data){
		var html = "";
		$.each(data, function(i,o){
			html += "<li class=\"on\" style=\"opacity: 1; display: "+o.status+";\">"
					+"<a href=\"javascript:;\" target=\"_blank\" data-ptag=\"1_23_1_650\" class=\"clickstream_tag\">"
					+"<img src=\""+o.imgSrc+"\" data-original=\"\" width=\"479\" height=\"395\" class=\"lazy\" style=\"display: inline;\">"					+"</a>"
					+"</li>";
		});
		$(".floorA:eq(3) .banner_slider").html(html);
		(function(){
			var $n = 0;
			$(".floorA:eq(3) .bRight").click(function(){
				var $target = $(this);
				$li = $target.next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n++;
				if($n==4){
					$n = 0;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			$(".floorA:eq(3) .bLeft").click(function(){
				var $target = $(this);
				$li = $target.next().next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n--;
				if($n<0){
					$n = 3;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			var term;
			function start(){
				term = setInterval(function(){
					$(".floorA:eq(3) .bRight").click();
				},3000);
			}
			start();
			$(".floorA:eq(3) .sec2").mouseenter(function(){
				clearInterval(term);
			});
			$(".floorA:eq(3) .sec2").mouseleave(function(){
				start();
			});
			
			$(".floorA:eq(3) .sec2 .banner_indexing").click(function(e){
				if($(e.target).is("a")){
					$n = $(e.target).parent().index();
					if($(e.target).parent().attr("class")!="on"){
						$(".floorA:eq(3) .banner_slider>li").hide();
						$(".floorA:eq(3) .banner_slider>li").eq($n).fadeIn();
					}
					$(e.target).parent().parent().children().removeClass("on");
					$(e.target).parent().addClass("on");
				}
			});
		})();
	});

	$.get("../js/lunbo1.json",function(data){
		var html = "";
		$.each(data, function(i,o){
			html += "<li class=\"on\" style=\"opacity: 1; display: "+o.status+";\">"
					+"<a href=\"javascript:;\" target=\"_blank\" data-ptag=\"1_23_1_650\" class=\"clickstream_tag\">"
					+"<img src=\""+o.imgSrc+"\" data-original=\"\" width=\"479\" height=\"395\" class=\"lazy\" style=\"display: inline;\">"					+"</a>"
					+"</li>";
		});
		$(".floorA:eq(4) .banner_slider").html(html);
		(function(){
			var $n = 0;
			$(".floorA:eq(4) .bRight").click(function(){
				var $target = $(this);
				$li = $target.next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n++;
				if($n==4){
					$n = 0;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			$(".floorA:eq(4) .bLeft").click(function(){
				var $target = $(this);
				$li = $target.next().next().children();
				$li.eq($n).hide();
				$target.parent().next().children().children().eq($n).removeClass("on");
				$n--;
				if($n<0){
					$n = 3;
				}
				$li.eq($n).fadeIn(400);
				$target.parent().next().children().children().eq($n).addClass("on");
			});
			var term;
			function start(){
				term = setInterval(function(){
					$(".floorA:eq(4) .bRight").click();
				},3000);
			}
			start();
			$(".floorA:eq(4) .sec2").mouseenter(function(){
				clearInterval(term);
			});
			$(".floorA:eq(4) .sec2").mouseleave(function(){
				start();
			});
			
			$(".floorA:eq(4) .sec2 .banner_indexing").click(function(e){
				if($(e.target).is("a")){
					$n = $(e.target).parent().index();
					if($(e.target).parent().attr("class")!="on"){
						$(".floorA:eq(4) .banner_slider>li").hide();
						$(".floorA:eq(4) .banner_slider>li").eq($n).fadeIn();
					}
					$(e.target).parent().parent().children().removeClass("on");
					$(e.target).parent().addClass("on");
				}
			});
		})();
	});

	(function(){
		
	})();
});
