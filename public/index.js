console.log("A sample of NavBar with Register Modal");

document.addEventListener("DOMContentLoaded", function() {
    const navbarTitle = document.querySelector(".navbar-title");
    const navbarCollapse = document.querySelector(".collapse");

    navbarTitle.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });
});
