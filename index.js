
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function(){
const scrollHeight = window.pageYOffset;
if (scrollHeight > 200) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }

})