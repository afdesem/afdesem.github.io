console.log("Work");
const textOnScroll = document.querySelectorAll(".popup");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

textOnScroll.forEach(text => {
  observer.observe(text);
});
