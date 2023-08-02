document.addEventListener("DOMContentLoaded", function() {
    const smoothScroll = function(target) {
      const scrollTarget = document.querySelector(target);
      const targetTop = scrollTarget.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const startTime = performance.now();

      function scrollAnimation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const scrollY = ease(timeElapsed, startPosition, targetTop, 1000);
        window.scrollTo(0, scrollY);
        if (timeElapsed < 1000) requestAnimationFrame(scrollAnimation);
      }

      // Easing function for smooth scrolling (optional, you can use a different one)
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(scrollAnimation);
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        smoothScroll(target);
      });
    });
  });