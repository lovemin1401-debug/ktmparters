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
