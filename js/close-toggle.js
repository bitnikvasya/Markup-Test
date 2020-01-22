var pageMain = document.querySelector(".page");
var pageToggle = document.querySelector(".page__header-toggle");

pageToggle.addEventListener("click", function () {
	pageMain.classList.add("page--closed");
});