
let moon = document.getElementById(`moon`);
let stars = document.getElementById(`stars`);
let mountainBehind = document.getElementById(`mountains_behind`);
let buttonExplore = document.getElementById(`btn`);
let text = document.getElementById(`text`);
let header = document.querySelector(`header`);

window.addEventListener(`scroll`, function () {
let value = window.scrollY;

stars.style.left = value * 0.25 + `px`;
moon.style.top = value + `px`;
mountainBehind.style.top = value * 0.5 + `px`;
buttonExplore.style.marginTop = value * 1.5 + `px`;
text.style.marginTop = value + `px`;
text.style.marginRight = value * 3 + `px`;
header.style.top = value * 0.5 + `px`;
});
