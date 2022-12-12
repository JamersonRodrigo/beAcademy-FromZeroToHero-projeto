export const btnscroll = {

  activate() {
    this.$btn = document.querySelector("#btnscroll");
    this.$btn.addEventListener("click", () => {
      window.scroll({ top: -window.innerHeight, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {

      if (window.scrollY > 0) {
        this.$btn.style.opacity = "100";
      } else {
        this.$btn.style.opacity = "0";
      }

    });
  }
};
