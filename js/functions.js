
// $$ ACORDEON
const acordeon = document.querySelectorAll('[class*="acordeon"]');

if (acordeon != null) {
   acordeon.forEach(function (item) {
      let alturaElemento = item.nextElementSibling.scrollHeight;
      item.nextElementSibling.style = `height: ${alturaElemento}px`;

      item.addEventListener('click', function () {
         let alturaActual = this.nextElementSibling.offsetHeight;

         (alturaActual > 0) ? (
            this.nextElementSibling.style = 'height: 0',
            this.style.setProperty('--rotation', 'rotate(0deg)')
         ) : (
               this.nextElementSibling.style = `height: ${alturaElemento}px;`,
               this.style.setProperty('--rotation', 'rotate(180deg)'))
      })
   })
}

// $$ APERTURA MENU


// $$ SCROLL EN X
/* var item = document.getElementsByTagName('DIV')[1];

window.addEventListener('wheel', function (e) {
   if (e.deltaY > 0) item.scrollLeft += 100;
   else item.scrollLeft -= 100;
}); */

var scrollBox = document.querySelector('#scrollBox');
scrollBox.addEventListener('wheel', function(e) {
   (e.deltaY > 0)
      ? scrollBox.scrollLeft += 10
      : scrollBox.scrollLeft -= 10
});

scrollBox.addEventListener('mouseover', function(){
   document.querySelector('body').style.overflowY = 'hidden';
})

scrollBox.addEventListener('mouseleave', function(){
   document.querySelector('body').style.overflowY = 'scroll';
})