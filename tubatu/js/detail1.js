$(function(){
	(function(){
		var str = window.location.href;
		str = str.split("?")[1];
		$.get("../js/detail1.json",function(data){
			var html = "";
			var str1 = "";
			var str2 = "";
			var str3 = "";
			var str4 = "";
			
			$.each(data, function(i,o){
				if(o.pid==str){
					html = "<div class=\"mall_nav_div\">" +
				"<div class=\"znd\">" +
					"<ul>" +
						"<li class=\"\">" +
							"<a href=\"index.html\">" +
								"<span>家居商城</span><em></em>" +
							"</a>" +
						"</li>" +
						"<li class=\"on\">" +
							"<span>"+o.pName+"</span><em></em>" +
						"</li>" +
					"</ul>" +
				"</div>" +
			"</div>" +

			"<!--container start-->" +
			"<div class=\"container_box\">" +
				"<input type=\"hidden\" value=\"23715\" id=\"shop_temai_item_id\" is_seo=\"1\">" +
				"<input type=\"hidden\" value=\"\" id=\"freeExpressFull\">" +
				"<input type=\"hidden\" value=\"0\" id=\"weight\">" +
				"<input type=\"hidden\" value=\"0\" id=\"volume\">" +
				"<input type=\"hidden\" value=\"\" id=\"shop_md_addr\">" +
				"<input type=\"hidden\" value=\"5956730\" id=\"mdAddrId\">" +
				"<input type=\"hidden\" value=\"浙江帅康营销有限公司\" id=\"shop_name\">" +
				"<input type=\"hidden\" value=\"0\" id=\"shop_yulan\">" +
				"<input type=\"hidden\" value=\"Sacon/帅康\" id=\"p_brand\">" +
				"<div class=\"wrapper_1180\">" +
					"<div class=\"mall_sec1 clear\">" +
						"<div class=\"col_l\">" +
							"<div class=\"mall_big_view\" style=\"display: none;\">" +
								//"<!--<img style=\"position: absolute; left: 0px; top: 0px;\" src=\"../images/022e4ef41cba5fe540a9a8a6d75738a8.jpg\" width=\"760px\" height=\"760px\">-->" +
							"</div>" +
							"<span class=\"mall_big_img\">" +
						       // "<!--<img src=\"../images/022e4ef41cba5fe540a9a8a6d75738a8_188x188M.jpg\" width=\"380\" height=\"380\" alt=\"Sacon/帅康 帅康CXW-220-TE6961+35K烟灶套餐（赠刀具组合）\">-->" +
						        "<em class=\"icn_boost\"></em>" +
						       // "<!--<span class=\"mall_img_filter\" style=\"width: 190px; height: 190px; display: none; left: 0px; top: 0px;\"></span>-->" +
							"</span>" +
							"<ul class=\"carousel_diagram clear\" id=\"share_imgs\">" +
							"</ul>" +
							"<!-- 新增商品编号和分享 4.25 Start -->" +
							"<div class=\"my_share\">" +
								"商品编号：<span class=\"my_number\" id=\"sku_id\">"+o.pid+"</span>" +
							"</div>" +
							"<!-- 新增商品编号和分享 4.25 End -->" +
						"</div>" +
						"<!--详情 start-->" +
						"<div class=\"col_c\">" +
							"<h1 id=\"p_name\">" +
		                		"<a href=\"javascript:;\" target=\"_blank\">"+o.pName+"</a>" +
							"</h1>" +
							"<h2>" + o.desc +
							"</h2>" +
							"<div class=\"bg_price_img mt15\">" +
								"<div class=\"price_list \" id=\"show_goods_price\">" +
									"<span class=\"time_out\"></span><b class=\"b1\" id=\"priceType\">土巴兔价</b><em class=\"big_em\"><em class=\"special_price\">￥</em><span name=\"goods_real_price\">"+o.price+"</span></em><span class=\"discount_box\"><b class=\"dl\"></b><i class=\"discount\">8.8折</i></span><del>￥<span name=\"goods_price\">"+o.yprice+"</span></del></div>" +
								"<div class=\"tb_activity_box clear\">" +
									"<b class=\"b1\" style=\"display: none;\">促   销</b>" +
									"<div id=\"activity_content\" class=\"activity_fr\">" +
									"</div>" +
								"</div>" +
							"</div>" +
							"<div class=\"tb_skin\">" +
								"<div id=\"mall_detail_type\">" +
									"<dl class=\"mall_detail\"><dt>燃料种类</dt>" +
										"<dd>" +
											"<ul>" +
												"<li>" +
													"<a href=\"javascript:;\" id=\"7191691\" class=\"focus\"><span>天然气</span></a>" +
												"</li>" +
												"<li>" +
													"<a href=\"javascript:;\" id=\"20992863\" class=\"\"><span>液化气</span></a>" +
												"</li>" +
											"</ul>" +
										"</dd>" +
									"</dl>" +
									"<dl class=\"mall_detail\"><dt>颜色分类</dt>" +
										"<dd>" +
											"<ul>" +
												"<li>" +
													"<a href=\"javascript:;\" id=\"3229302\" class=\"focus\"><span>灰</span></a>" +
												"</li>" +
											"</ul>" +
										"</dd>" +
									"</dl>" +
								"</div>" +
								"<dl class=\"special \">" +
									"<dt>配送</dt>" +
									"<dd>" +
										"<em class=\"tb_txt\" id=\"deliveryAddr\" style=\"display: none;\"></em>" +
										"<ul class=\"tb_ul clear\">" +
											"<li>" +
												"<a href=\"javascript:;\" class=\"provice\">" +
													"<b id=\"mall_city_title\">广东 深圳 南山区</b>" +
													"<em class=\"mall_icn_arrow\"></em>" +
												"</a>" +
												"<em class=\"f_c_e81a62 ml10 tb_txt\" id=\"nonsupport_city\" style=\"display: none;\">该地区暂不支持配送</em>" +
												"<em class=\"ml10 tb_txt\" id=\"expressFee\" style=\"\"></em>" +
												"<ul id=\"mall_city_content\" class=\"provice_list clear\" style=\"height: 40px; display: none;\">" +
													"<li>" +
														"<a href=\"javascript:;\" id=\"province_title\" class=\"on\">广东<em class=\"mall_icn_arrow\"></em></a>" +
													"</li>" +
													"<li>" +
														"<a href=\"javascript:;\" id=\"city_title\" class=\"\">深圳<em class=\"mall_icn_arrow\"></em></a>" +
													"</li>" +
													"<li>" +
														"<a href=\"javascript:;\" id=\"town_title\" class=\"\">南山区<em class=\"mall_icn_arrow\"></em></a>" +
													"</li>" +
													"<li class=\"are_list\">" +
														"<ul class=\" clear\">" +
															"<li id=\"mall_city_box\">" +
																"<a href=\"javascript:;\">陕西</a>" +
																"<a href=\"javascript:;\">四川</a>" +
																"<a href=\"javascript:;\">天津</a>" +
																"<a href=\"javascript:;\">西藏</a>" +
																"<a href=\"javascript:;\">新疆</a>" +
																"<a href=\"javascript:;\">浙江</a>" +
																"<a href=\"javascript:;\">云南</a>" +
																"<a href=\"javascript:;\">湖北</a>" +
																"<a href=\"javascript:;\">江西</a>" +
																"<a href=\"javascript:;\">重庆</a>" +
																"<a href=\"javascript:;\">宁夏</a>" +
																"<a href=\"javascript:;\">青海</a>" +
																"<a href=\"javascript:;\">上海</a>" +
																"<a href=\"javascript:;\">广东</a>" +
																"<a href=\"javascript:;\">山西</a>" +
																"<a href=\"javascript:;\">山东</a>" +
																"<a href=\"javascript:;\">安徽</a>" +
																"<a href=\"javascript:;\">北京</a>" +
																"<a href=\"javascript:;\">福建</a>" +
																"<a href=\"javascript:;\">甘肃</a>" +
																"<a href=\"javascript:;\">广西</a>" +
																"<a href=\"javascript:;\">贵州</a>" +
																"<a href=\"javascript:;\">海南</a>" +
																"<a href=\"javascript:;\">河北</a>" +
																"<a href=\"javascript:;\">河南</a>" +
																"<a href=\"javascript:;\">黑龙江</a>" +
																"<a href=\"javascript:;\">湖南</a>" +
																"<a href=\"javascript:;\">吉林</a>" +
																"<a href=\"javascript:;\">江苏</a>" +
																"<a href=\"javascript:;\">辽宁</a>" +
																"<a href=\"javascript:;\">内蒙古</a>" +
																"<a href=\"javascript:;\">香港</a>" +
																"<a href=\"javascript:;\">台湾</a>" +
																"<a href=\"javascript:;\">澳门</a>" +
															"</li>" +
														"</ul>" +
													"</li>" +
												"</ul>" +
											"</li>" +
										"</ul>" +
									"</dd>" +
									"<dd id=\"send_date\" class=\"spc_t\" style=\"display: none;\"></dd>" +
								"</dl>" +
								"<dl class=\"number_dl\">" +
									"<dt>数量</dt>" +
									"<dd>" +
										"<span class=\"tb_stock\">" +
								        	"<a href=\"javascript:;\" class=\"reduce_num\">-</a>" +
								            "<input type=\"text\" value=\"1\" maxlength=\"8\" onfocus=\"this.blur()\">" +
								            "<a href=\"javascript:;\" class=\"plus_num\">+</a>" +
								        "</span>" +
										"<em id=\"stock_em\">[库存<span id=\"stock_num\">83</span>件]</em>" +
										"<em style=\"display: none;\" class=\"f_c_e81a62\" id=\"isrich_stock\">[库存为0]</em>" +
										"<em id=\"less_stock\" class=\"f_c_ec4444\" style=\"display: none;\">仅剩<b class=\"f_c_ec4444\">83</b>件,抓紧时间抢购哦!</em></dd>" +
								"</dl>" +
	
								"<!--运费服务  -->" +
								"<dl class=\"server_dl\" style=\"display: none;\">" +
									"<dt>服务</dt>" +
									"<dd class=\"tb_ul_box\" id=\"service_desc_dd\">" +
										"<ul class=\"clear tb_ul1\" id=\"service_desc\"></ul>" +
									"</dd>" +
								"</dl>" +
								"<!-- 新增加入购物车按钮 Start 4.25 -->" +
								"<div class=\"btn_shopping_box disable clear\">" +
	
									"<a class=\"buy_btn\" href=\"login.html\" title=\"点击此按钮，到下一步确认购买消息\" id=\"buy_now\">立即购买</a>" +
									"<a class=\"add_cart_btn\" href=\"javascript:void(0);\"><em></em>加入购物车</a>" +
									"<em class=\"saled_num\">已售出<b class=\"f_c_e81a62\" id=\"has_sale\">"+o.num+"</b>件</em>" +
								"</div>" +
								"<!-- 新增加入购物车按钮 End 4.25 -->" +
							"</div>" +
						"</div>" +
						"<!--秒杀end-->" +
						"<div class=\"col_r\">" +
	
							"<div class=\"tb_brand_box\">" +
								"<div class=\"tb_brand_sec2\">" +
									"<p class=\"p1\">本商品支持</p>" +
								"</div>" +
								"<div class=\"tb_brand_sec3\">" +
									"<dl>" +
										"<dt>" +
								            "<a target=\"_blank\" href=\"javascript:;\"><em class=\"icn_zheng\"></em></a>" +
								        "</dt>" +
										"<dd>" +
											"<a target=\"_blank\" href=\"javascript:;\">假一赔十</a>" +
										"</dd>" +
									"</dl>" +
									"<dl>" +
										"<dt>" +
								            "<a target=\"_blank\" href=\"javascript:;\"><em class=\"icn_song\"></em></a>" +
								        "</dt>" +
										"<dd>" +
											"<a target=\"_blank\" href=\"javascript:;\">定时发货</a>" +
										"</dd>" +
									"</dl>" +
									"<dl>" +
										"<dt>" +
								            "<a target=\"_blank\" href=\"javascript:;\"><em class=\"icn_piao\"></em></a>" +
								        "</dt>" +
										"<dd>" +
											"<a target=\"_blank\" href=\"javascript:;\">正规发票</a>" +
										"</dd>" +
									"</dl>" +
									"<dl>" +
										"<dt>" +
								            "<a target=\"_blank\" href=\"javascript:;\"><em class=\"icn_tui\"></em></a>" +
								        "</dt>" +
										"<dd>" +
											"<a target=\"_blank\" href=\"javascript:;\">退换无忧</a>" +
										"</dd>" +
									"</dl>" +
								"</div>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
				"<div class=\"fixed_div fixed_static\">" +
						"<div id=\"detailWarp\" class=\"mall_sec2 clear\">" +
							"<div id=\"detailNav\" class=\"fixed_bg_f7f7f7\" style=\"position: static; top: 0px;\">" +
								"<div class=\"sec2_tab_detial\">" +
									"<div class=\"shopping_right fr\" id=\"detailNav_attach\">" +
										"<div class=\"price_list\">" +
											"<em class=\"big_em\"><em class=\"special_price\">￥</em><span name=\"goods_real_price\">"+o.price+"</span></em>" +
											"<del>￥<span name=\"goods_price\">"+o.yprice+"</span></del>" +
										"</div>" +
										"<div class=\"btn_shopping_box\">" +
											"<a class=\"add_cart_btn\" href=\"javascript:void(0);\"><em></em>加入购物车</a>" +
										"</div>" +
									"</div>" +
									"<ul class=\"clear\">" +
										"<li class=\"focus\">" +
											"<a href=\"javascript:void(0)\">商品详情</a><em class=\"icn_tab_indicate\"></em></li>" +
										"<li>" +
											"<a href=\"javascript:void(0)\">规格参数</a>" +
										"</li>" +
										"<li id=\"threeDModelTab\" style=\"display: none;\">" +
											"<a href=\"javascript:void(0)\">3D模型</a>" +
										"</li>" +
										"<li>" +
											"<a href=\"javascript:void(0)\">服务保障</a>" +
										"</li>" +
										"<li id=\"goodsEvaluateTab\" style=\"display: none;\">" +
											"<a href=\"javascript:void(0)\">商品评价（<span class=\"f_c_e81a62\">0</span>）</a>" +
										"</li>" +
										"<li id=\"goodsConsultTab\" style=\"display: none;\">" +
											"<a href=\"javascript:void(0)\">购买咨询</a>" +
										"</li>" +
									"</ul>" +
								"</div>" +
							"</div>" +
							"<div class=\"wrapper_1180\">" +
								"<div class=\"col_l\">" +
									"<div id=\"detailContent\" class=\"tab_sec1\">" +
										"<div id=\"mallDetailContent\" class=\"sec2_tab_detail\">" +
											"<img src=\"../images/744c0fe7c791e3f94e920b8c74316f7b.jpg\" alt=\"\">" +
										"</div>" +
										"<div class=\"sec2_tab_content\" style=\" display: none;\">" +
											"<h4>主体规格参数</h4>" +
											"<dl>" +
												"<dd>品牌</dd>" +
												"<dt>Sacon/帅康</dt>" +
											"</dl>" +
											"<dl>" +
												"<dd>型号</dd>" +
												"<dt>CXW-220-TE6961+35K</dt>" +
											"</dl>" +
											"<dl>" +
												"<dd>同城服务</dd>" +
												"<dt>同城上门安装</dt>" +
											"</dl>" +
											"<dl>" +
												"<dd>售后服务</dd>" +
												"<dt>全国联保</dt>" +
											"</dl>" +
											"<dl>" +
												"<dd>智能类型</dd>" +
												"<dt>不支持智能</dt>" +
											"</dl>" +
											"<dl>" +
												"<dd>气灶结构</dd>" +
												"<dt>嵌入式</dt>" +
											"</dl>" +
											"<dl>" +
												"<dd>油烟机种类</dd>" +
												"<dt>欧式</dt>" +
											"</dl>" +
											"<dl>" +
												"<dd>烟机安装位置</dd>" +
												"<dt>顶吸式</dt>" +
											"</dl>" +
											"<dl>" +
												"<dd>烟灶消套装类别</dd>" +
												"<dt>烟灶组合</dt>" +
											"</dl>" +
											"<dl>" +
												"<dd>面板材质</dd>" +
												"<dt>不锈钢</dt>" +
											"</dl>" +
										"</div>" +
										"<div id=\"threeDModelContent\" class=\"list_container  clear\" style=\"display: none;\">" +
											"<div class=\"tab_3d_module\">" +
												"<a href=\"javascript:;\" class=\"btn_3d\">查看本商品3d效果</a>" +
											"</div>" +
											"<p class=\"tab_3d_txt\">3D家居建材商品体验是土巴兔专利产品。您可前后左右上下全方位查看商品构造细节，欢迎体验。" +
											"</p>" +
										"</div>" +
										"<div class=\"sec2_tab_content\" style=\"display: none;\">" +
											"<div id=\"serviceContent\" class=\"sec2_paramet_div\">配送安装<br> 1.帅康产品一般在下单付款后第二天发货（周六，周日，节假日不发货），一般默认快递为德邦、EMS、顺丰，配送范围为中国大陆地区（西藏除乌鲁木齐外不发货），将根据收货地址分配快递公司；" +
												"<br> 2.有电梯楼层提供送货入户服务，无电梯楼层送货至楼下；" +
												"<br>" +
												"<br> 产品质保" +
												"<br> 本产品全国联保，享受三包服务，烟机五年质保电机终身，燃气灶三年质保，热水器整机一年质保 内胆五年质保，消毒柜五年质保服务。<br>" +
												"<br> 售后服务" +
												"<br> 1、产品销售七日内，客户可选择无理由退换货；第八日至十五日内，客户可选择换货。套餐是不可以单个退换的，单拍是可以的。在不影响二次销售的前提下(包装完好，配件齐全，商品未使用)将为买家提供一次以上服务。" +
												"<br> 2、本品牌厂商提供上门安装、维修等售后服务，支持服务范围内免人工费用，超出范围内收取一定远程费用，根据您的安装环境收取一定的配件材料费用，相关费用标准以厂家制定标准为准，详情建议您拨打厂家服务电话详细了解。帅康全国统一服务热线：400-700-1111。质保期间如因质量问题引起的退货货运费由我司承担，人为损坏等买家原因造成的退换货由买家承担，买家退换货前需发照片与我司进行沟通确认。" +
												"<br>" +
												"<br> 温馨提醒" +
												"<br> 关于退换货：凡帅康退或换货的产品，需在不影响二次销售的情况下且包装完好。退换货买家需要先联系厂家售后0574-62243981，把您的订单号 ，姓名，联系电话、退货或者换货的理由告诉厂家售后， 以便我们及时的处理买家的退换货或退款。如果买家没有提前给厂家售后联系会延迟处理速度，还请见谅！<br></div>" +
										"</div>" +
										"<div id=\"goods_evaluate\" style=\"display: none;\">" +
											"<div class=\"sec_tab_detial\">" +
												"<ul class=\"sec2_tab_detial  sec_detail_ul clear\">" +
													"<li class=\"w1\">评价心得</li>" +
													"<li class=\"w2\">满意度</li>" +
													"<li class=\"w3\">商品信息</li>" +
													"<li class=\"w4\">评价用户</li>" +
												"</ul>" +
											"</div>" +
											"<div class=\"sec_goods_evaluate\"></div>" +
											"<div class=\"pages_box\"></div>" +
										"</div>" +
	
										"<div id=\"goodsConsult\" class=\"sec2_goods_evaluate\" style=\"display:none;\">" +
											"<ul></ul>" +
										"</div>" +
									"</div>" +
									"<div class=\"list_container  tab_list_container clear\">" +
										"<div class=\"wrapper_940\">" +
											"<h4 class=\"fs14\">关注了该商品的业主还在关注</h4>" +
											"<ul id=\"guanzhugoodsul\" class=\"list clear\">" +
//												"<li>" +
//													"<a href=\"javascript:;\" target=\"_blank\" class=\"pic\">" +
//														"<img class=\"lazy\" src=\"../images/ce8c47ec6ca4a5545e705e9dd21486ed_188x188M.jpg\" width=\"210\" height=\"210\" alt=\"Sacon/帅康CXW-200-JE5588+35B魅影烟灶套餐（赠精美刀具套组）\" style=\"display: inline;\">" +
//													"</a>" +
//													"<div class=\"cur_pric\">" +
//														"<p class=\"cur_msg ect\">Sacon/帅康CXW-200-JE5588+35B魅影烟灶套餐（赠精美刀具套组）</p>" +
//														"<p class=\"pri_msg f_c_e81a62 ect\">￥<span class=\"f_arial \">3480</span><del>￥3980</del></p>" +
//													"</div>" +
//												"</li>" +
											"</ul>" +
										"</div>" +
									"</div>" +
									"<!--    买家居建材常见问题-->" +
									"<div class=\"list_container  tab_list_container clear\">" +
										"<div class=\"wrapper_940\">" +
											"<div class=\"title\">" +
												"<div class=\"consult_ol fr\">" +
													"<span>购买时如有问题，请</span>" +
													"<a href=\"javascript:;\" class=\"icn_online_consult\"></a>" +
												"</div>" +
												"<h4 class=\"fs14\">买家居建材常见问题</h4>" +
											"</div>" +
											"<div class=\"tab_qst_box\">" +
												"<ul>" +
													"<li class=\"pb48\">" +
														"<div class=\"qst_box clear\">" +
															"<em class=\"icn_question\"></em>" +
															"<p class=\"qst_text\">土巴兔特卖商城如何保证所售商品是正品？</p>" +
														"</div>" +
														"<div class=\"answer_box clear\">" +
															"<em class=\"icn_answer\"></em>" +
															"<p class=\"answer_text\">土巴兔特卖商城招商只面向品牌官方或具有官方授权的正规代理商，全部都有正规授权，100%正品保证，假一赔十，先行赔付；并享有该品牌的全国联保服务。</p>" +
														"</div>" +
													"</li>" +
													"<li class=\"pb48\">" +
														"<div class=\"qst_box clear\">" +
															"<em class=\"icn_question\"></em>" +
															"<p class=\"qst_text\">土巴兔特卖商城如何确保低价？</p>" +
														"</div>" +
														"<div class=\"answer_box clear\">" +
															"<em class=\"icn_answer\"></em>" +
															"<p class=\"answer_text\">土巴兔特卖商城采用F2C模式，去掉中间层层加价环节，以工厂底价直供消费者，让消费者受惠。我们还为用户提供了完整的价格保障措施，确保低价，贵一赔三。</p>" +
														"</div>" +
													"</li>" +
													"<li>" +
														"<div class=\"qst_box clear\">" +
															"<em class=\"icn_question\"></em>" +
															"<p class=\"qst_text\">什么时候发货？多久才能收到？</p>" +
														"</div>" +
														"<div class=\"answer_box clear\">" +
															"<em class=\"icn_answer\"></em>" +
															"<p class=\"answer_text\">发货分3种情况：1是定时发货，消费者可根据需要，要求土巴兔的商家定时发货。2是三个工作日内发货，若消费者无备注发货时间，土巴兔将要求商家三个工作日内发货。。3是定制品发货，因定制商品具有一定的生产时间，商家会在定制生产完成后为消费者发出，具体发货时间，请查看商品描述页面。</p>" +
														"</div>" +
													"</li>" +
													"<li>" +
														"<div class=\"qst_box clear\">" +
															"<em class=\"icn_question\"></em>" +
															"<p class=\"qst_text\">商品是否支持无理由退换？</p>" +
														"</div>" +
														"<div class=\"answer_box clear\">" +
															"<em class=\"icn_answer\"></em>" +
															"<p class=\"answer_text\">支持7天退换无忧的商品，买家需在确认签收商品之日起7天内（按照物流签收后的第二天零时起计算时间，满168小时为7天）提出退换申请。</p>" +
															"<p class=\"answer_text\">&nbsp;&nbsp;&nbsp;&nbsp;" +
																"<a href=\"javascript:;\" style=\"color: #e81a62;text-decoration:underline;\" target=\"_blank\">了解退换无忧</a>" +
															"</p>" +
															"<p class=\"answer_text\">&nbsp;&nbsp;&nbsp;&nbsp;" +
																"<a href=\"javascript:;\" style=\"color: #e81a62;text-decoration:underline;\" target=\"_blank\">了解7天退换</a>" +
															"</p>" +
															"<p class=\"answer_text\">&nbsp;&nbsp;&nbsp;&nbsp;温馨提醒：定制品不支持退换货。</p>" +
														"</div>" +
													"</li>" +
												"</ul>" +
											"</div>" +
										"</div>" +
									"</div>" +
								"</div>" +
								"<!--    热销商品-->" +
								"<div class=\"col_r shopping_box\">" +
									"<div id=\"hotGoods\" class=\"m10\">" +
										"<h3 class=\"title\">热销商品</h3>" +
	
//										"<a href=\"javascript:;\" target=\"_blank\">" +
//											"<img class=\"lazy\" src=\"../images/4d5785ac8360c929989365c58f589a6f_188x188M.jpg\"  width=\"200\" height=\"200\" alt=\"Sacon/帅康 帅康CXW-200-TE6751欧式不碰头大吸力吸油烟机\" style=\"display: inline;\">" +
//										"</a>" +
//										"<div class=\"price_list\">" +
//											"<a class=\"f_c_003 lh20\" target=\"_blank\" href=\"javascript:;\">Sacon/帅康 帅康CXW-200-TE6751欧式不碰头大吸力吸油烟机</a>" +
//											"<em class=\"big_em\">￥<span>2780</span></em><del>￥<span>3199</span></del>" +
//										"</div>" +
									"</div>" +
								"</div>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" ;
				$("#detail_container").html(html);
				$.each(o.smallImg, function(i,o) {
					str1 += "<li>"
							+"<a href=\"javascript:;\">"
							+"<img  src=\""+o.smallImg+"\" width=\"64\" height=\"64\" >"
							+"</a>"
							+"</li>";
					
					$("#share_imgs").html(str1);
					$("#share_imgs").children().eq(0).children().attr("class","focus");
				});
				$.each(o.img, function(i,o) {
					str2 += "<img src=\""+o.img+"\" alt=\"\">";
					$("#mallDetailContent").html(str2);
				});
				$.each(o.guanzhu, function(i,o) {
					str4 += "<li>" +
								"<a href=\"javascript:;\" target=\"_blank\" class=\"pic\">" +
									"<img class=\"lazy\" src=\""+o.Img+"\" width=\"210\" height=\"210\" alt=\"Sacon/帅康CXW-200-JE5588+35B魅影烟灶套餐（赠精美刀具套组）\" style=\"display: inline;\">" +
								"</a>" +
								"<div class=\"cur_pric\">" +
									"<p class=\"cur_msg ect\">"+o.pName+"</p>" +
									"<p class=\"pri_msg f_c_e81a62 ect\">￥<span class=\"f_arial \">"+o.price+"</span><del>￥"+o.yprice+"</del></p>" +
								"</div>" +
							"</li>";
					$("#guanzhugoodsul").html(str4);
				});
				$.each(o.hot, function(i,o) {
					str3 += "<a href=\"javascript:;\" target=\"_blank\">" +
											"<img class=\"lazy\" src=\""+o.hImg+"\"  width=\"200\" height=\"200\" alt=\"Sacon/帅康 帅康CXW-200-TE6751欧式不碰头大吸力吸油烟机\" style=\"display: inline;\">" +
										"</a>" +
										"<div class=\"price_list\">" +
										"<a class=\"f_c_003 lh20\" target=\"_blank\" href=\"javascript:;\">"+o.hpName+"</a>" +
											"<em class=\"big_em\">￥<span>"+o.hprice+"</span></em><del>￥<span>"+o.hyprice+"</span></del>" +
										"</div>";
					$("#hotGoods").append(str3);
				});
				
				$("#share_imgs>li").click(function(){
					var $num = $(this).index();
					$("#share_imgs>li").children().removeClass("focus");
					$(this).children().addClass("focus");
					$(this).parent().prev().prev().children().attr("src",o.bigImg[$num].bigImg);
					$(this).parent().prev().children().eq(0).attr("src",o.middImg[$num].middImg);
				});
				$(function(){
					$("<img src=\""+o.middImg[0].middImg+"\" width=\"380\" height=\"380\" />").prependTo(".mall_big_img");
					$("<span class=\"mall_img_filter\" style=\"width: 190px; height: 190px; display: none; left: 0px; top: 0px;\"></span>").appendTo(".mall_big_img");
					$("<img style='position: absolute; left: 0px; top: 0px;' src='"+o.bigImg[0].bigImg+"' width='760px' height='760px'>").prependTo(".mall_big_view");
					$(".mall_big_img").hover(function(){
						$(".mall_big_view").show();
						$(".mall_img_filter").show();
						$(".mall_big_img").mousemove(function(e){
							var x = Math.max(Math.min(e.pageX - $(".mall_big_img").offset().left - $(".mall_img_filter").width() / 2,380 - $(".mall_img_filter").width()),0);
							var y = Math.max(Math.min(e.pageY - $(".mall_big_img").offset().top - $(".mall_img_filter").height() / 2,380 - $(".mall_img_filter").height()),0);
							$(".mall_img_filter").css({
								left:x,
								top:y
							});
							$(".mall_big_view>img").css({
								left:-x*2,
								top:-y*2
							});
						});
					},function(){
						$(".mall_big_view").hide();
						$(".mall_img_filter").hide();
					});
				});
				
				}		
				
			});
			
			
			
			
			$(".reduce_num").click(function(){
				var $num = $(this).next().val();
				$num--;
				if($num<1){
					$num = 1;
				}
				$(this).next().val($num);
			});
			$(".plus_num").click(function(){
				var $num = $(this).prev().val();
				$num++;
				$(this).prev().val($num);
			});
			
			
			
			
			
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
					
					//判断是否有物品然后是否取样式
					if($shopcart){
						$(".cart_empty_ico,.cart_empty_text,.empty_status_btn").hide();
						$(".jiesuan,.settle_accounts").show();
					}else{
						$(".cart_empty_ico,.cart_empty_text,.empty_status_btn").show();
						$(".jiesuan,.settle_accounts").hide();
					}
				}
				getShopcart();
				$(".add_cart_btn").click(function(){
					var $totalnum = parseInt($(".count").html());
					var $totalprice = 0;
					var $shopcart1 = $.cookie("shopcart");
					if($shopcart1!=undefined){
						var arr = strOper.get($shopcart1);
						$.each(arr, function(i,o) {
							//$totalnum += parseInt(o.count);
							$totalprice += parseInt(o.count)*parseInt(o.price);
						});
						//$(".count").html($totalnum);
						//$(".totalnum").html($totalnum);
						$(".totalprice").html($totalprice);
					}else{
						$(".count").html("0");
					}
					
					$totalnum += parseInt($(".tb_stock").children().eq(1).val());
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
					if($flag&&(!parseInt($("#rightSide").css("right")))){
						$flag = false;
						$(".rightSide_middle .shopcart").click();
					}
					$term = setTimeout(function(){
						$flag = true;
						$(".rightSide_middle .shopcart").click();
					},4000);
				});	
				
				
				
				$(".del_ico").click(function(){
					var id = $(this).parent().parent().attr("pro_id");
					var $shopcart = $.cookie("shopcart");
					var result = strOper.del($shopcart,id);
					$.cookie("shopcart",result);
					var $li = $(this).parent().parent().index();
					console.log($li)
					$(".shopping_list_ul>li:eq("+$li+")").remove();
					

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
						
				});
				
			})();
			
			(function(){
				var height = $("#detailNav").offset().top;
				$(window).scroll(function(){
				
					console.log($(window).scrollTop(),height)
					if($(window).scrollTop()>=height){
						$("#detailNav").css({
							"position":"fixed",
							"top":0,
							"width":"1263px"
						});
						$("#detailNav_attach").show();
					}else{
						$("#detailNav").css({
							"position":"static",
							"top":0,
							"width":"938px"
						});
						$("#detailNav_attach").hide();
					}
				});
			})();
			
			
			
		});
		
		
		
	})();
	
	
});

