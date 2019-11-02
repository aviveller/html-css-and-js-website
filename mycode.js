function Menue() {
  var btnText = document.querySelector(".btn");
  var selectMenu = document.querySelector(".menu");
  var selectWrapMenu = document.querySelector(".wrapMenu");

  if (btnText.innerText == "Show Menu") {
    selectMenu.style.height = "650px";
    selectWrapMenu.style.height = "650px";
    btnText.innerText = "Close Menu";
  } else {
    selectMenu.style.height = "0px";
    selectWrapMenu.style.height = "0px";
    btnText.innerText = "Show Menu";
  }
}
