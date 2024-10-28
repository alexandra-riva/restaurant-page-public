import home from './home';
import contact from './contact';
import sancocho from '../assets/images/sancocho.jpg';

function menu() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const header = document.createElement("h1");
    header.textContent = "Menu";
    content.appendChild(header);

    const image = document.createElement("img");
    image.src = sancocho;
    image.alt = "sancocho";
    content.appendChild(image);

    const welcome = document.createElement("p");
    welcome.textContent = "Sancocho is our one and only love! Your taste buds will throw a fiesta!";
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

export default menu;
