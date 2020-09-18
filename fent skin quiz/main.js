window.addEventListener("load",function(){
    setTimeout(function() {
        $('.preloader').addClass("hidden");
      }, 3000);
})




const ulOne = document.querySelector(".choiceList1");
const ulTwo = document.querySelector(".choiceList2");
const ulThree = document.querySelector(".choiceList3");
const ulFour = document.querySelector(".choiceList4");
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3  = document.querySelector(".q3");
const q4 = document.querySelector(".q4");

let container = document.querySelector(".quizContainer");
const containers = document.querySelectorAll(".quizContainer");
const prevBtn= document.querySelector(".prevButton");
const nextBtn= document.querySelector(".nextButton");



 /*ulOne.addEventListener("click", function(e){

    const option= e.target;
    
    if(option.dataset.id === "normal" || "oily"  ||  "dry"  ||  "combination"){
   q1.style.display = "none";
   q2.style.display = "block";
 prevBtn.style.opacity="1";
       };
  
 })

ulTwo.addEventListener("click", function(e){
const option= e.target

if(option.dataset.id === "dark spots" || "wrinkles"  ||  "dullness"  ||  "breakout"){
    q2.style.display = "none";
    q3.style.display = "block";
  
   };
       
})

ulThree.addEventListener("click", function(e){
    const option= e.target
    
    if(option.dataset.id === "moisturizers" || "cleaners"  ||  "treatments"  ||  "masks"){
        q3.style.display = "none";
        q4.style.display = "block";
      
       };
    
    })
    */

containers.forEach(function(slide,index){
slide.style.left = `${index * 100}vh`;
});
let currentQuestionIndex = 0;

nextBtn.addEventListener("click",function(){
    currentQuestionIndex++;
    carousel();
 
})

prevBtn.addEventListener("click",function(){
    currentQuestionIndex--;
    carousel();
  
})
function carousel(){
   /* if(currentQuestionIndex === containers.length){
        currentQuestionIndex = 0;
    }
    if(currentQuestionIndex < 0){
        currentQuestionIndex = containers.length -1;
    }
*/
if(currentQuestionIndex > 0){
    prevBtn.style.display="block";
}
else{
    prevBtn.style.display="none";  
}
containers.forEach(function(slide){
    slide.style.transform = `translateX(-${currentQuestionIndex * 100}vh)`
})
if(currentQuestionIndex > containers.length - 1){
   currentQuestionIndex = 0;
   carousel();
    
 window.open('product.html', '_blank');
  
}

}





nextBtn.style.display = "none"
prevBtn.style.display="none";

function numOfClicks(){
    const ul = document.querySelectorAll("ul");
ul.forEach(function(li){
    console.log(ul.length);
    
    li.addEventListener("click",function(){
        currentQuestionIndex++;
        carousel();
        
       
    })
    
})
}
numOfClicks();


