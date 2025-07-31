import { renderFronPage } from "./renderFrontPage.js";

function main():void {
  const body = document.querySelector('body');

  if (!body) return;

    console.log("working")

    const frontPage: HTMLDivElement = renderFronPage();

    body.appendChild(frontPage);
  
}

document.addEventListener("DOMContentLoaded", main);


