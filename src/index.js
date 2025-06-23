// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./odin.jpeg";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);

// document.querySelector('body').textContent="HElloooo"

console.log(greeting);
