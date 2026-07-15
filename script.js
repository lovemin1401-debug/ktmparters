// Header 불러오기
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // 햄버거 메뉴
        window.toggleMenu = function () {
            document.getElementById("navMenu").classList.toggle("active");
        };

        // 드롭다운 메뉴
        document.querySelectorAll(".dropdown-btn").forEach(function(button) {
            button.addEventListener("click", function() {
                this.parentElement.classList.toggle("open");
            });
        });

    });

// Footer 불러오기
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });
window.addEventListener("scroll", function () {
    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
/* =====================================================
   Focus Field Gallery
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".focus-gallery");

  if (!gallery) {
    return;
  }

  const track = gallery.querySelector(".gallery-track");
  const slides = gallery.querySelectorAll(".gallery-slide");
  const prevButton = gallery.querySelector(".gallery-prev");
  const nextButton = gallery.querySelector(".gallery-next");
  const dots = document.querySelectorAll(".gallery-dot");

  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    track.style.transform =
      `translateX(-${currentIndex * 100}%)`;

    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle(
        "active",
        slideIndex === currentIndex
      );
    });

    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle(
        "active",
        dotIndex === currentIndex
      );
    });
  }

  prevButton.addEventListener("click", function () {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", function () {
    showSlide(currentIndex + 1);
  });

  dots.forEach(function (dot, dotIndex) {
    dot.addEventListener("click", function () {
      showSlide(dotIndex);
    });
  });

  showSlide(0);
});
/* =====================================================
   Product Image Mini Gallery
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".product-image-gallery");

  if (!gallery) {
    return;
  }

  const track = gallery.querySelector(".product-gallery-track");
  const slides = gallery.querySelectorAll(".product-gallery-slide");
  const prevButton = gallery.querySelector(".product-gallery-prev");
  const nextButton = gallery.querySelector(".product-gallery-next");
  const dots = gallery.querySelectorAll(".product-gallery-dot");

  let currentIndex = 0;

  function showProductSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    track.style.transform =
      `translateX(-${currentIndex * 100}%)`;

    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle(
        "active",
        dotIndex === currentIndex
      );
    });
  }

  prevButton.addEventListener("click", function () {
    showProductSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", function () {
    showProductSlide(currentIndex + 1);
  });

  dots.forEach(function (dot, dotIndex) {
    dot.addEventListener("click", function () {
      showProductSlide(dotIndex);
    });
  });

  showProductSlide(0);
});
