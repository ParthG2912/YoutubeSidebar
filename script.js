const menuIconBtn = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector(".sidebar");

menuIconBtn.addEventListener("click", () => {
    // Expand / Collapse Sidebar
    sidebar.classList.toggle("open");
});
