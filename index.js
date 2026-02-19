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


  <button class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">
    Add to Cart
  </button>

</div> `;
    document.getElementById("my_modal_5").showModal();
} 


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
              <button class="btn btn-primary btn-sm flex-1">
                Add
              </button>
            </div>

          </div>`;

        container.appendChild(card);
      });

    });
};


loadTrendingProducts();
            
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
          <button class="btn btn-primary btn-sm flex-1">
            Add
          </button>
        </div>
         </div>
    `;

    container.appendChild(card);
  });
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

