//document.getElementsByClassName("main_title")[0].style.color = 'red';

/*document.getElementById('main_action').onclick = function () {
   alert ('clac');
}*/

document.getElementById("main_action").onclick = function () {
   document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

var buttons = document.getElementsByClassName("car-button");
for (var i = 0; i < buttons.length; i++) {
   buttons[i].onclick = function () {
      document.getElementById("price").scrollIntoView({behavior: "smooth"});
   }
}

document.getElementById("price-action").onclick = function () {
   if (document.getElementById("name").value === "") {
      alert("Заполните поле имя!");
   } else if (document.getElementById("phone").value === "") {
      alert("Заполните поле телефон!");
   } else if (document.getElementById("car").value === "") {
      alert("Заполните поле автомобиль!");
   } else {
      alert("Спасибо за заявку, Мы сыяжемся с вами!");
   }
}


// движение ролса за мышкой
document.addEventListener("DOMContentLoaded", function () {
   let layer = document.querySelector('.price_image');
   document.addEventListener('mousemove', (event) => {
      layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 5) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
   });


   // анимация картинки заднего фона
   const elem = document.querySelector(".main");
   document.addEventListener('scroll', () => {
      elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
   })
});


/*Переключение типов автомомбилей*/


document.getElementById('sport').onclick = (Event) => {
   document.getElementById('l_c1').classList.add('hidden');
   document.getElementById('l_c2').classList.add('hidden');
   document.getElementById('l_c3').classList.add('hidden');
   document.getElementById('l_c4').classList.add('hidden');
   document.getElementById('l_c5').classList.add('hidden');
   document.getElementById('l_c6').classList.add('hidden');

   document.getElementById('sport_car1').classList.remove('hidden');
   document.getElementById('sport_car2').classList.remove('hidden');
   document.getElementById('sport_car3').classList.remove('hidden');
   document.getElementById('sport_car4').classList.remove('hidden');
   document.getElementById('sport_car5').classList.remove('hidden');
   document.getElementById('sport_car6').classList.remove('hidden');

}



document.getElementById('luxury').onclick = (Event) => {
   document.getElementById('sport_car1').classList.add('hidden');
   document.getElementById('sport_car2').classList.add('hidden');
   document.getElementById('sport_car3').classList.add('hidden');
   document.getElementById('sport_car4').classList.add('hidden');
   document.getElementById('sport_car5').classList.add('hidden');
   document.getElementById('sport_car6').classList.add('hidden');

   document.getElementById('l_c1').classList.remove('hidden');
   document.getElementById('l_c2').classList.remove('hidden');
   document.getElementById('l_c3').classList.remove('hidden');
   document.getElementById('l_c4').classList.remove('hidden');
   document.getElementById('l_c5').classList.remove('hidden');
   document.getElementById('l_c6').classList.remove('hidden');
}


document.getElementById('all').onclick = (Event) => {
   document.getElementById('l_c1').classList.remove('hidden');
   document.getElementById('l_c2').classList.remove('hidden');
   document.getElementById('l_c3').classList.remove('hidden');
   document.getElementById('l_c4').classList.remove('hidden');
   document.getElementById('l_c5').classList.remove('hidden');
   document.getElementById('l_c6').classList.remove('hidden');
   
   document.getElementById('sport_car1').classList.remove('hidden');
   document.getElementById('sport_car2').classList.remove('hidden');
   document.getElementById('sport_car3').classList.remove('hidden');
   document.getElementById('sport_car4').classList.remove('hidden');
   document.getElementById('sport_car5').classList.remove('hidden');
   document.getElementById('sport_car6').classList.remove('hidden');   
}