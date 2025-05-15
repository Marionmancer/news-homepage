window.addEventListener('resize', function(event){
  
  if(event.target.outerWidth <= 375){
    document.querySelector("#main-article-container > img").src = "./assets/images/image-web-3-mobile.jpg";
  } else{
    document.querySelector("#main-article-container > img").src = "./assets/images/image-web-3-desktop.jpg";;
  }
});

function openNav() {
  document.getElementById("opacity-div").style.width = "100%";
  document.getElementById("mySidenav").style.width = "65%";
}

function closeNav() {
  document.getElementById("opacity-div").style.width = "0";
  document.getElementById("mySidenav").style.width = "0";
}