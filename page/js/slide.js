export class Slide {
  delay = 5000;
  activeIndex = 0;
  maxImgs = 4;

  constructor(selector) {
    this.imgs = [];
    this.$slide = document.querySelector(selector);
  }

  init() {
    this.preload();
    this.loadImg();
    this.tmp = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.maxImgs;
      this.loadImg();
    }, this.delay);
  }

  preload() {
    let slideIdx = 1;

    for (let i = 0; i < this.maxImgs; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = `./assets/slide${slideIdx}.jpg`;
      slideIdx++;
    }
  }

  loadImg() {
    this.$slide.style.backgroundImage = `url("${this.imgs[this.activeIndex].src}")`;
  }
}
