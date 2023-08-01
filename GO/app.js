"use strict";

function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  clone();

  let a = setInterval(moveFirst, 40);
  let b = setInterval(moveSecond, 40);

}

carousel();

function mostrar(){

  document.getElementById('selectLanguage').style.display = 'block';

}

var btn = document.getElementById('language');
var language = document.getElementById('selectLanguage');

btn.addEventListener('click', function (){

    if (language.style.display == 'none'){ 
        language.style.display = 'block';
        language.style.transition = 'all 1s ease;';
    }
    else {
        language.style.display = 'none';
    }

    }
)

var btn = document.getElementsByClassName('fa-bars')[0];
var navb = document.getElementById('navbar');

btn.addEventListener('click',function (){

    if (navb.style.display == 'none'){ 
        navb.style.display = 'flex';
        header.style.background = '#005ECF';
    }
    else {
        navb.style.display = 'none';
        header.style.background = 'transparent';
    }

    }
)