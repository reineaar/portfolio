const buttons = document.querySelectorAll("[data-section]");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const target = button.dataset.section;

        pages.forEach(page => {
            page.classList.remove("active");
        });

        document.getElementById(target).classList.add("active");
    });
});
