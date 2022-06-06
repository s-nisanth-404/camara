setInterval(() => {
  let image = document.querySelector(".unsplash");
  image.src += "?";
}, 1000);

window.addEventListener("scroll", () => {
  let animationText = document.querySelectorAll(".animator");
  animationText.forEach((animation) => {
    let animationPosition = animation.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 1.2;

    if (animationPosition <= screenHeight) {
      animation.classList.add("animationText");
    }
    if (animationPosition >= screenHeight) {
      animation.classList.remove("animationText");
    }
  });
});
