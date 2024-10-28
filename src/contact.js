import home from './home';
import menu from './menu';
import sancocho from '../assets/images/sancocho.jpg';

function contact() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const header = document.createElement("h1");
    header.textContent = "Contact";
    content.appendChild(header);

    const image = document.createElement("img");
    image.src = sancocho;
    image.alt = "sancocho";
    content.appendChild(image);

    const welcome = document.createElement("p");
    welcome.textContent = "Can't get enough of sancocho? Who can blame you! Slide into our DMs on Instagram and get your sancocho fix!";
    content.appendChild(welcome);

    const nav = document.createElement("nav");
    content.appendChild(nav);

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    nav.appendChild(homeBtn);
    homeBtn.addEventListener("click", home);

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    nav.appendChild(menuBtn);
    menuBtn.addEventListener("click", menu);

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    nav.appendChild(contactBtn);
    contactBtn.addEventListener("click", contact);
}

export default contact;
