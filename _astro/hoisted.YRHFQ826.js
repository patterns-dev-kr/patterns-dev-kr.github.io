import"./hoisted.aKKH8uJq.js";class o extends HTMLElement{imgs=[...this.querySelectorAll("img")];connectedCallback(){this.addEventListener("click",l=>{const e=l.target.closest("button");if(!e)return;const t=Number(e.dataset.item);typeof t=="number"&&this.imgs.forEach((s,n)=>{s.style.display=t===n?"block":"none"})})}}customElements.define("hello-world",o);