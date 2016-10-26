var regExpManger = {
	userNameReg:/^([\u4e00-\u9fa5]|[0-9a-z_]){4,15}$/i,
	pwdReg:/^[0-9a-z]{6,16}$/i,
	emailReg:/^[0-9A-z_]{6,22}@[0-9a-z]{2,8}\.[a-z]{2,3}$/,
	mobileReg:/^[1-3]\d{10}$/
};
