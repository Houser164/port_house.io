window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin(){
	
	const query = window.location.search;
	const urlParams = new URLSearchParams(query);
	const username = urlParams.get('username');
	const password = urlParams.get('password');

	var user = document.forms["myLogin"]["username"];
	var pass = document.forms["myLogin"]["password"];

	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

	if(user.value != username || pass.value != password)
	{
		alert("Wrong username or password");
		return false;
	}

	alert("Login successfully!");
}

			