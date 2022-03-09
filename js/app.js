
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll('section')

function createListItem() {
    for (sec of sections) {
        ListItem = document.createElement("li");
        ListItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`;
        navbarList.appendChild(ListItem);
    }
}

createListItem();
window.onscroll = function () {
    document.querySelectorAll('section').forEach(function (active) {
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ) {
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
};


