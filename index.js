
// load and display details
const loadProductDetails=async(id)=>{
    const url=`https://fakestoreapi.com/products/${id}`;
    const response=await fetch(url);
    const details= await response.json();
    displayProductDetails(details);
}

const displayProductDetails=(product)=>{
    console.log(product);
    const detailsBox= document.getElementById("detailsContainer");
    detailsBox.innerHTML=`
          <div class="p-4 space-y-3">

  <img src="${product.image}" alt="" class="h-48 rounded-lg mx-auto">

  <h2 class="text-xl font-semibold text-black">${product.title}
    
  </h2>
  <div class="flex justify-between items-center">

    <span class="text-lg font-semibold text-black">
      $${product.price}
    </span>

  
    <div class="flex flex-col items-end">
      <span class="flex items-center gap-1 text-black text-sm">
        <i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}
      </span>
      <span class="text-xs text-black">${product.rating.count} Reviews</span>
    </div>

  </div>

  <p class="text-black text-sm">${product.description}</p>


  <button class="btn btn-primary btn-sm flex-1" onclick="addToCart(${product.id})">
    Add to Cart
  </button>

</div> `;
    document.getElementById("my_modal_5").showModal();
} 
// load trending products and display

const loadTrendingProducts=()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>{
        const sorted= data.sort((a,b)=>
        b.rating.rate - a.rating.rate);
        const topThree = sorted.slice(0,3);
        const container = document.getElementById("trendingContainer");
        container.innerHTML= "";
        topThree.forEach(product=>{
            const card= document.createElement("div");
            card.className="card bg-base-200 shawdow-md hover:shadow-xl transition";
            card.innerHTML=
            `<figure class="p-6">
             <img src="${product.image}"
                 class="h-52 object-contain" />
            </figure>
            <div class="card-body pt-0">

            <div class="flex justify-between items-center text-sm">
              <span class="badge badge-outline text-primary">
                ${product.category}
              </span>
              <span class="text-yellow-500"> <i class="fa-solid fa-star"></i> ${product.rating.rate} ${product.rating.count}
              </span>
            </div>

            <h3 class="font-semibold text-base line-clamp-2">
              ${product.title}
            </h3>

            <p class="text-lg font-bold">
              $${product.price}
            </p>

            <div class="flex gap-3 mt-2">
              <button class="btn btn-outline btn-sm flex-1" onclick="my_modal_5.showModal()">
                Details
              </button>
              <button class="btn btn-primary btn-sm flex-1" onclick="addToCart(${product.id})">
                Add
              </button>
            </div>

          </div>`;

        container.appendChild(card);
      });

    });
};


loadTrendingProducts();

// button
            
function setActive(activeIdDesktop,activeIdMobile) {
      [
    "homeBtn","productsBtn","aboutBtn","contactBtn",
    "homeBtnSmall","productsBtnSmall","aboutBtnSmall","contactBtnSmall"
  ].forEach(id => {
      document.getElementById(id).classList.remove("active-nav");
  });

  document.getElementById(activeIdDesktop).classList.add("active-nav");
  document.getElementById(activeIdMobile).classList.add("active-nav");
}

function showHome() {
  document.getElementById("Home").classList.remove("hidden");
  document.getElementById("Products").classList.add("hidden");

  setActive("homeBtn","homeBtnSmall");
  window.scrollTo(0, 0);
}

function showProducts() {
  document.getElementById("Home").classList.add("hidden");
  document.getElementById("Products").classList.remove("hidden");

  setActive("productsBtn","productsBtnSmall");
  window.scrollTo(0, 0);
}

window.onload = function() {
  setActive("homeBtn","homeBtnSmall");
};

// button click and show page
function showWorkingPage(type){
    document.getElementById("Home").classList.add("hidden");
    document.getElementById("Products").classList.add("hidden");
    document.getElementById("workingPage").classList.remove("hidden");
    if(type === "about"){
      setActive("aboutBtn","aboutBtnSmall");
  }
  else if(type === "contact"){
      setActive("contactBtn","contactBtnSmall");
  }

  window.scrollTo(0,0);
}
// load nd display all products

let allProducts=[];

const loadProducts=()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>{
        allProducts=data;
        displayProducts(allProducts);
    })
}

loadProducts();
 const displayProducts=(products)=>{
    const container= document.getElementById("productsContainer");
    container.innerHTML="";
    products.forEach(product=> {
        const card= document.createElement("div");
        card.className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300";
        card.innerHTML=`
        <figure class="p-6">
        <img src="${product.image}" class="h-52 object-contain mx-auto"/>
        </figure>
        <div class="card-body pt-0">

        <div class="flex justify-between text-sm">
          <span class="badge badge-outline text-primary">
            ${product.category}
          </span>
          <span class="text-yellow-500"><i class="fa-solid fa-star"></i>${product.rating.rate}</span>
          </div>
          <h3 class="font-semibold line-clamp-2 min-h-[48px]">
          ${product.title}
        </h3>

        <p class="text-lg font-bold">
          $${product.price}
        </p>

        <div class="flex gap-3 mt-3">
          <button class="btn btn-outline btn-sm flex-1" onclick="loadProductDetails(${product.id})">
            Details
          </button>
          <button class="btn btn-primary btn-sm flex-1" onclick="addToCart(${product.id})">
            Add
          </button>
        </div>
         </div>
    `;

    container.appendChild(card);
  });
//  category 
}
 const filterProducts=(category)=>{
    if(category=="all"){
        displayProducts(allProducts);
    }
        else{
            const filtered= allProducts.filter(
                product=> product.category=== category);
                displayProducts(filtered);

        }
        setActiveCategoryButton(category);

    }

 
const buttons = document.querySelectorAll(".cat-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => {
      b.classList.remove("bg-white", "text-[#6366f1]");
      b.classList.add("bg-white", "text-black");
    });
   
    btn.classList.remove("bg-white", "text-black");
    btn.classList.add("bg-white", "text-[#6366f1]");
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){
  const product=allProducts.find(p=>p.id===id);
  const existing= cart.find(item=>item.id===id);
  if(existing){
    existing.quantity += 1;
  }
  else{
    cart.push({
      ...product, quantity:1
    });
  }
  saveCart();
  updateCartUI();
}
function updateCartUI(){
  const cartItemsContainer = document.getElementById("cartItems");
  const cartCount= document.getElementById("cartCount");
  const totalItemsEl = document.getElementById("totalItems");
  const totalPriceEl = document.getElementById("cartTotal");

  cartItemsContainer.innerHTML=" ";
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    const div = document.createElement("div");
    div.className = "flex gap-4 items-center border-b pb-3";

    div.innerHTML = `
      <img src="${item.image}" class="w-16 h-16 object-contain rounded">

      <div class="flex-1">
        <h4 class="font-semibold text-sm">${item.title}</h4>
        <p class="text-sm font-bold">$${item.price}</p>

        <div class="flex items-center gap-2 mt-2">
          <button onclick="changeQuantity(${item.id}, -1)" class="btn btn-xs">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${item.id}, 1)" class="btn btn-xs">+</button>
        </div>
      </div>

      <div class="text-right">
        <p class="font-bold">$${(item.price * item.quantity).toFixed(2)}</p>
        <button onclick="removeItem(${item.id})" class="text-red-500 text-xs">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(div);
  });

  cartCount.innerText = totalItems;
  totalItemsEl.innerText = totalItems;
  totalPriceEl.innerText = totalPrice.toFixed(2);
}
function changeQuantity(id, amount) {
  const item = cart.find(p => p.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(p => p.id !== id);
  }
  saveCart();
  updateCartUI();
}
function removeItem(id) {
  cart = cart.filter(p => p.id !== id);
  saveCart();
  updateCartUI();
}
function openCart() {
  updateCartUI();
  document.getElementById("cartModal").showModal();
}
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
window.addEventListener("DOMContentLoaded", () => {
  updateCartUI();
});
