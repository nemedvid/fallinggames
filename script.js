let butt = document.querySelector('.cookies-butt')
let cook = document.querySelector('.cookies')

butt.onclick = function(){
    cook.classList.remove("norm");
    cook.classList.add("cookieshid");
}