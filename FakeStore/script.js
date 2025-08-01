const productList = document.getElementById("product-list");
const loadMoreBtn = document.getElementById("load-more");
const categorySelect = document.getElementById("category");
const searchInput = document.getElementById("search");

let allProducts = [];
let filteredProducts = [];
let currentIndex = 0;
const itemsPerPage = 5;

async function fetchProducts(category = 'all') {
  const baseUrl = 'https://fakestoreapi.com/products';
  const url = category === 'all' ? baseUrl : `${baseUrl}/category/${encodeURIComponent(category)}`;
  const res = await fetch(url);
  allProducts = await res.json();
  applySearchFilter();
}

function applySearchFilter() {
  const searchTerm = searchInput.value.toLowerCase();
  filteredProducts = allProducts.filter(p =>
    p.title.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm)
  );
  currentIndex = 0;
  productList.innerHTML = '';
  loadNextBatch();
}

function loadNextBatch() {
  const nextProducts = filteredProducts.slice(currentIndex, currentIndex + itemsPerPage);
  nextProducts.forEach(p => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h4>${p.title}</h4>
      <p>₹${(p.price * 80).toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  currentIndex += itemsPerPage;

  if (currentIndex >= filteredProducts.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

loadMoreBtn.addEventListener("click", loadNextBatch);
categorySelect.addEventListener("change", () => {
  fetchProducts(categorySelect.value);
});
searchInput.addEventListener("input", () => {
  applySearchFilter();
});

fetchProducts();