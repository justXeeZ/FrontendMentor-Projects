const btn = document.querySelector(".article-button");
const btnIcon = document.querySelector(".article-button-icon");
const articleShare = document.querySelector(".article-share");

function toggleShare() {
	if (articleShare.style.display === "flex") {
		articleShare.style.display = "none";
		btn.style.backgroundColor = "hsl(0, 0%, 90%)";
		btnIcon.style.filter = "none";
	} else {
		articleShare.style.display = "flex";
		btn.style.backgroundColor = "var(--Desaturated-Dark-Blue)";
		btnIcon.style.filter = "brightness(0) invert(100%)";
	}
}

btn.onclick = toggleShare;

