import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const container = document.getElementById("main-container");
    container?.replaceChildren();
    for(let prod in prods){
        const product = document.createElement("div"); 
        product.innerHTML = generateProductHTML(prods[prod]); 
        container?.appendChild(product);
    }
}

function getByCategory(category: string): void {
    const container = document.getElementById("main-container");
    container?.replaceChildren();
    let newArr:any = products.filter((a:Product)=> a.category == category);
    renderProducts(newArr);
}

function getByRating(minRating: number): void {
    const container = document.getElementById("main-container");
    container?.replaceChildren();
    let newArr:any = products.filter((a:Product)=> a.rating >= minRating);
    renderProducts(newArr);
}

export { renderProducts, getByCategory, getByRating };