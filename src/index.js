import "./styles.css"; 
import home from './home'; 

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const content = document.querySelector("#content");
    console.log(content); 
    if (content) {
        home(); 
    } else {
        console.error('Element with id "content" not found');
    }
});