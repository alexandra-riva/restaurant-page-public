import menu from './menu';
import contact from './contact';
import sancocho from '../assets/images/sancocho.jpg';

function home() {
    const content = document.querySelector("#content");
    if (!content) {
        console.error('Element with id "content" not found');
        return;
    }

    content.textContent = ""; 

    const header = document.createElement("h1");
    header.textContent = "One-Dish Wonder Restaurant";
    content.appendChild(header);

    const image = document.createElement("img");
    image.src = sancocho;
    image.alt = "sancocho";
    content.appendChild(image);

    const welcome = document.createElement("p");
    welcome.textContent = "Welcome to our One-Dish Wonder Restaurant, where our flavorful Sancocho is the star, serving up a comforting taste of Dominican tradition in every bowl!";
    content.appendChild(welcome);

    const nav = document.createElement("nav");
    content.appendChild(nav);

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    nav.appendChild(menuBtn);
    menuBtn.addEventListener("click", menu);

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    nav.appendChild(contactBtn);
    contactBtn.addEventListener("click", contact);
}

export default home;
