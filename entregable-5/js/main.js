function btnFollow(btn) {
    if (btn.innerHTML == 'SEGUIR') 
        btn.innerHTML = 'SIGUIENDO';
    else btn.innerHTML = 'SEGUIR'; 
}

function btnLike(btn) {
    btn.classList.toggle("like-active");
}
