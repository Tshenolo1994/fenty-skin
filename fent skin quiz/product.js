//load pre-loader
window.addEventListener("load",function(){
    setTimeout(function() {
        $('.preloader').addClass('active');
      }, 3000);
})




const products  = [
    {
    id:1,
    title:"Fenty skin start'rs",
    price:75,
    img:"./images/product1.jpg",
hoverImg:"./images/hover1.jpg",
link:"https://www.fentybeauty.com/fenty-skin-startrs/fenty-skin-startrs.html?cgid=shop-all",
},
{
    id:2,
    title:"TOTAL CLEANS'REMOVE-IT-ALL CLEANSER",
    price:25,
    img:"./images/product2.jpg",
hoverImg:"./images/hover2.jpg",
link:"https://www.fentybeauty.com/total-cleansr-remove-it-all-cleanser/47618.html?cgid=shop-all",
},
{
    id:3,
    title:"FAT WATERPORE-REFINING TONER SERUM",
    price:28,
    img:"./images/product3.jpg",
hoverImg:"./images/hover3.jpg",
link:"https://www.fentybeauty.com/fat-water-pore-refining-toner-serum/47151.html?cgid=shop-all",
},
{id:4,

title:"HYDRA VIZOR INVISIBLE MOISTURIZER BROAD SPECTRUM SPF 30 SUNSCREEN",
    price:35,
    img:"./images/product4.jpg",
hoverImg:"./images/hover4.jpg",
link:"https://www.fentybeauty.com/hydra-vizor-invisible-moisturizer-broad-spectrum-spf-30-sunscreen/FS20001.html?cgid=shop-all",
},
{id:5,

    title:"HYDRA VIZOR INVISIBLE MOISTURIZER BROAD SPECTRUM SPF 30 SUNSCREEN REFILL",
        price:30,
        img:"./images/product5.jpg",
    hoverImg:"./images/hover5.jpg",
    link:"https://www.fentybeauty.com/hydra-vizor-invisible-moisturizer-broad-spectrum-spf-30-sunscreen-refill/FS20002.html?cgid=shop-all",
    },
]



const productContainer = document.querySelector(".product-grid")
function displayProducts(){
    let displayProducts = products.map(function(product){
        return `<article class="product">
        <img src=${product.img} class="img">
        <div class=product-details>
           
          <h5 class="product-name">${product.title}</h5>
          <h5 class="product-size">$${product.price}</h5>
        </div>
       
        
      </article>`
      
    })
    displayProducts = displayProducts.join("");
productContainer.innerHTML = displayProducts;


//HOVER IMAGE

 /*function hoverImage(){
products.map(function(product){
    
    images.forEach(function(image){
        image.addEventListener("click", function(e){


        })
    })
})
} 


     hoverImage()

     */
    function hover(){
     products.map(function(product){
    
            const images = document.querySelectorAll("img");
    const productImages = document.querySelectorAll(".product");
    productImages.forEach(function(image){
        image.addEventListener("click",function(e){
           const target = e.target;
           
  
           if(target.classList.contains("img")){
            this.addEventListener("click",function(e){
                const currentImage = e.target.src;
                console.log(currentImage);
             
              
              });
             
              
         
        
            
           }
        });
    

        });

        });

    
        };
hover()

    }
//SORTT ITEMS
//ASCENDING
function sortProducts(){
    products.sort(function(a,b){
        /*if(a.price < b.price){
            return - 1
        }*/
        return a.price - b.price;
    })
    }
//DESCENDING
    function descend(){
        products.sort(function(a,b){
            /*if(a.price > b.price){
                return 1
            }*/
            return b.price - a.price;
        })
    }
//CLEAR FILTER
    function clear(){
products.sort(function(a,b){
            /*if(a.price > b.price){
                return 1
            }*/
            return a.price = b.price
        })
    }

function filter(){
    const list = document.querySelectorAll("ul li");
    list.forEach(function(li){
        li.addEventListener("click",function(e){
const filterBtn = e.currentTarget.dataset.id;


if(filterBtn === "ascending"){



//return
 sortProducts();
 displayProducts()

}
if(filterBtn === "descending"){
    //displayProducts()
    descend();
    displayProducts()
        //return descend();
 

}

if(filterBtn === "clear"){
  //displayProducts();
 clear();
 displayProducts()
  //return clear();
   ;
}


})
        
    })
}

window.addEventListener("DOMContentLoaded",filter())
console.log(products);

window.addEventListener("DOMContentLoaded",displayProducts)


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
