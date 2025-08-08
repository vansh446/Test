// Smooth scroll for internal anchors (if you add any anchors with href="#...") 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Intersection Observer for fade-in animation on scroll
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(fader => observer.observe(fader));

  // Instagram button redirect on Contact page
  const instaBtn = document.getElementById('instagramBtn');
  if (instaBtn) {
    instaBtn.addEventListener('click', () => {
      window.open("https://www.instagram.com/the.lai.lama/?hl=en", "_blank");
    });
  }
});
