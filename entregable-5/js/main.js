function btnFollow(btn) {
    if (btn.innerHTML == 'SEGUIR') 
        btn.innerHTML = 'SIGUIENDO';
    else btn.innerHTML = 'SEGUIR'; 
}

function btnLike(btn) {
    btn.classList.toggle("like-active");
}

function submitForm() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if(username.value != "nahueldbailey" || password.value != "12345"){
        document.getElementById("errorForm").classList.add("displayError");
    }else{
        location.href ="./home.html";
    }
}
