import { initHeader } from "./header.js";
import { Slide } from "./slide.js";
import {btnscroll} from "./scroll.js";
import {notification} from "./notification.js";
import {validation} from "./validation.js";

function initialize() {
  const slide1 = new Slide("#section1");

  slide1.init();
  initHeader();
  btnscroll.activate()
  notification()
  validation()
}

window.addEventListener("load", initialize);
