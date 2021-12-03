function btnFollow(btn) {
    if (btn.innerHTML == 'SEGUIR') 
        btn.innerHTML = 'SIGUIENDO';
    else btn.innerHTML = 'SEGUIR'; 
}

function btnLike(btn) {
    btn.classList.toggle("like-active");

    let likeCount = btn.nextElementSibling;
    if(btn.classList.contains("like-active")){
        likeCount.innerHTML++;
    }
    else{
        likeCount.innerHTML--;
    }
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

function promocionar() {
    let btn = document.getElementById("btn-promocionar");
    let text = document.getElementById("text-prom");

    if (btn.innerHTML == 'Promocionar') {
        btn.innerHTML = 'Dejar de Promocionar';
        text.style.display = "block";
     } else {
        btn.innerHTML = 'Promocionar'; 
        text.style.display = "none";
     }

}

