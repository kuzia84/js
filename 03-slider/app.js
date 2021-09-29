const slider = (
  containerClass,
  sidebarClass,
  mainSlideClass,
  downButtonClass,
  upButtonClass
) => {
  const container = document.querySelector(containerClass),
    sidebar = document.querySelector(sidebarClass),
    mainSlide = document.querySelector(mainSlideClass),
    downButton = document.querySelector(downButtonClass),
    upButton = document.querySelector(upButtonClass),
    slidersCount = mainSlide.querySelectorAll("div").length;

  sidebar.style.top = `-${(slidersCount - 1) * 100}vh`;

  upButton.addEventListener("click", () => changeSlide("up"));
  downButton.addEventListener("click", () => changeSlide("down"));

  let curentSlide = 0;

  function changeSlide(direction) {
    if (direction === "up") {
      curentSlide++;
      if (curentSlide === slidersCount) {
        curentSlide = 0;
      }
    } else if (direction === "down") {
      curentSlide--;
      if (curentSlide < 0) {
        curentSlide = slidersCount - 1;
      }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${curentSlide * height}px)`;
    sidebar.style.transform = `translateY(${curentSlide * height}px)`;
  }
};

slider(".container", ".sidebar", ".main-slide", ".down-button", ".up-button");
