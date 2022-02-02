const menuIconBtn = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector(".sidebar");

menuIconBtn.addEventListener("click", () => {
    // Expand / Collapse Sidebar
    sidebar.classList.toggle("open");
});

const listItem = document.querySelectorAll("[data-list-item]");

listItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        // console.log(e.target);
        listItem.forEach((i) => {
            // console.log(i.textContent.trim(), i.contains(e.target));
            i.classList.toggle("active", i.contains(e.target));
        });
    });
});
