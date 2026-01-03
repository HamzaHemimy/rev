function valid(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mass = document.getElementById('mass').value;
    if(name===""||email===""||mass===""){
        document.getElementById("res2").innerText="Please faild all emtye spaces";
        return true;
    }else if(email.indexOf ("@") ===-1||email.indexOf(".")===-1){
        document.getElementById("res1").innerText="Place Write a Valid Email";
        return true;
    }else if (name.length<=3||name.length>15){
        document.getElementById("res").innerText="Please enter between 3 to 15 chracter";
        return true;
    }
    else if (mass.length<=20||mass.length>=50){
        document.getElementById("res3").innerText="Please enter between 20 to 50 chracter";
        return true;
    }
    else{
        alert("Form Submitted Successfully!");
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('mass').value = "";
        document.getElementById('res').innerText = "";
        document.getElementById('res1').innerText = "";
        document.getElementById('res2').innerText = "";
        document.getElementById('res3').innerText = "";
    }
}