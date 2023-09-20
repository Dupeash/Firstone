

const burg=document.body.querySelector('.john')
const menu= document.body.querySelector('.vite')
const card = document.querySelector('.card')

console.log('hello')

burg.addEventListener('click', ()=>{
 console.log('clicked')
 if(menu.classList.contains('hidden')){
   menu.classList.remove('hidden');
 }else{
   menu.classList.add('hidden');


 }
})



//food ninjas logic
first=document.querySelector('.one')
second = document.querySelector('.one-c')
leftbar = document.querySelector('.leftbar')
main=document.querySelector('.main')




first.addEventListener('click', ()=>{
 console.log('first function')
 if(leftbar.classList.contains('md:hidden') && main.classList.contains('md:col-span-3')){
   leftbar.classList.remove('md:hidden')
   main.classList.remove('md:col-span-3')
   leftbar.classList.add('md:colspan-1')
  //  gsap.to(leftbar, {opacity:1, x:0, stagger:2});
   main.classList.add('md:col-span-2')
   console.log('clicked')

 
 }
   
 
})


second.addEventListener('click', ()=>{
 if(second.classList.contains('one-c')){
  // // gsap.from(leftbar, {opacity:0, x: '-100', stagger:2 });
  // setTimeout(() => {
    
   leftbar.classList.add('md:hidden')
    leftbar.classList.remove('md:colspan-1')
    main.classList.remove('md:col-span-2')
   main.classList.add('md:col-span-3')
     
  
  // }, 300);

  
   

  }

})


card.addEventListener('click',(e)=>{
  if(card){
    console.log('card clickded')
  }
})

