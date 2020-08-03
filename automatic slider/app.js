const cards = document.getElementsByClassName("card");
const container = document.querySelector(".container__slide");

for (i of cards) {
      i.addEventListener("click", () => {
            let target = event.target;
            move(target);
      }
      )
      i.addEventListener("transitionstart", () => {
            console.log("transitionend")
      })
}

let counter = 0;
/*set initial start to first div (skip the 4_clone - this clone is only for infinite loop purpose)*/
// let widthContainer = container.offsetWidth;
// let startingTransition = -counter * widthContainer;
// container.style.transform = `translateX(${startingTransition}px)`;

function move (element) {
      counter++;
      if(element.getAttribute("id") ==="1_clone") {
            counter = 1; /*jump back to picture 2 if 1_clone is reached*/
      }
      /*get widht how far to move div to the left*/
      let width = element.parentNode.offsetWidth;
      let x = element.parentNode.getBoundingClientRect().x;
      let moveX = counter * -width;
      /*move div*/
      element.parentNode.style.transform =`translateX(${moveX}px)`;
      
}

console.log( cards.length);

let ct = 0;

setInterval(()=>{
     
     
      move(cards[ct]);
      ct++;
      if(ct === cards.length) {ct=1}
},1000)



/*
container.addEventListener("transitionend", () => {
      console.log("fired");
})
*/
