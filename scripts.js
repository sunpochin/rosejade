const button = document.getElementsByClassName("button");
const backgroundImage = document.querySelector(".background-image");
const photo = document.querySelector(".photo");
const profilePhoto = document.querySelector(".photo img");
const profileName = document.querySelector(".profile-name");
const actionButtons = document.querySelector(".action-buttons");
const closeButton = document.querySelector(".close");
let photos = [
  "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/455871311_1033814185413292_448477470223793746_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0-QDGGViwhEQ7kNvgHEk_pK&_nc_ht=scontent-tpe1-1.xx&oh=00_AYDodNvP0X2yTdIhz_VpEUlV27rOKiP3_9XgqytIUlQ77g&oe=66C8FF70",
  "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/455733639_1033814275413283_6670295205692878070_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J2T1qAOMJzEQ7kNvgHZNjsW&_nc_ht=scontent-tpe1-1.xx&oh=00_AYCO7G5De-xsrpzsSXvy1GUmGQzxpJU-jmH1LkbcLRBzrQ&oe=66C8F7FA",
  "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/455817402_1033814262079951_7718728803541806784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1N1QN5tG2a8Q7kNvgHKyahU&_nc_ht=scontent-tpe1-1.xx&oh=00_AYACLeW7iMjMZL5zyfq8lwPAgcQ4fy5Z3jud3qifVd3AJw&oe=66C8EE3B",
  "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/455935823_1033814282079949_3410858504416355529_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=R_FcTmQNwOYQ7kNvgHod0QA&_nc_ht=scontent-tpe1-1.xx&oh=00_AYBlaUbfXpt2GZiBulIrIuh8_Q5U3dZHw7khEuvI-H4jwA&oe=66C8EE0A",
];

let names = ["瑜", "檣", "薇", "大家"];

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    backgroundImage.style.marginTop = "180px";
    photo.style.marginTop = "235px";
    profilePhoto.src = photos[i];
    profileName.innerHTML = `${names[i]}`;
    actionButtons.style.marginBottom = "220px";
    closeButton.style.marginTop = "60px";
    for (let j = 0; j < button.length; j++) {
      button[j].style.zIndex = "0";
    }
  });
}

closeButton.addEventListener("click", function () {
  backgroundImage.style.marginTop = "0px";
  photo.style.marginTop = "0px";
  actionButtons.style.marginBottom = "0px";
  closeButton.style.marginTop = "0px";
  for (let i = 0; i < button.length; i++) {
    button[i].style.zIndex = "1";
  }
});
