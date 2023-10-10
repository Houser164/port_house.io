window.onload = pageLoad;
function pageLoad() {
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;

}

function validateForm() {


    var x = document.forms["myForm"]["password"][0];
    var y = document.forms["myForm"]["password"][1];

 //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    if (x.value != y.value) {
        document.getElementById('errormsg').innerHTML = "Password not match";
        alert("Please match your password ");
        return false;
    }

alert("Register successfully!")
}