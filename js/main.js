const topNavMenuToggle = document.getElementById("nav_menu_toggle");
const navList = document.getElementById("nav_links");

topNavMenuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

const bottomNotice = document.getElementById("bottom_notice")
const bottomNoticeBtn = document.getElementById("bottom_notice_btn")

bottomNoticeBtn.addEventListener('click', () => {
    bottomNotice.style.display = "none";
});
