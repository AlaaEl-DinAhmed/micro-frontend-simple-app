import { html, render } from "lit-html";

// Define a template
const myTemplate = (name) => html`<p>Product details</p>`;

// Render the template to the document
render(myTemplate("details"), document.body);
