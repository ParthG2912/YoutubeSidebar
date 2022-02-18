const menuIconBtn = document.querySelector("[data-menu-icon-btn]");
const sidebar = document.querySelector("[data-sidebar]");

menuIconBtn.addEventListener("click", () => {
    // Expand / Collapse Sidebar
    sidebar.classList.toggle("open");
});

const listItem = document.querySelectorAll("[data-list-item]");
const title = document.querySelector("[data-title]");

listItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        // console.log(e.target);
        listItem.forEach((i) => {
            // console.log(i.textContent.trim(), i.contains(e.target));
            i.classList.toggle("active", i.contains(e.target));
            // if (i.classList.contains("active")) {
            //     title.textContent = `Channel ${i.textContent.trim().toLocaleLowerCase()}`;
            // }
        });
    });
});
