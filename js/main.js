

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }

} else {
  document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}




$(document).ready(function () {
  $('.slider1').slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 800,
    responsive: [{
      breakpoint: 1025, // максимальная ширина экрана
      settings: {
        slidesToShow: 3, // показывать по 2 слайда
        slidesToScroll: 1, // скроллить по 2 слайда
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }, {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      }
    }]
  });
});

// Код для выпадающего меню

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте раскрывающееся меню, если пользователь щелкнет за его пределами.
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


// Код для замены ссылок на кнопке "Перейти"

var link1 = document.querySelector('.link1');
var link2 = document.querySelector('.link2');
var link3 = document.querySelector('.link3');
var neo = document.querySelector('.neo');
var btn = document.querySelector('.btn');
link1.onclick = function () {
  neo.outerHTML = '<button class="dropbtn">Tahiti</button>';
  btn.outerHTML = '<button  class="dropbtn btn"><a class="btn-link" href="https://www.britannica.com/place/Tahiti">Explore</a></button>';
  link2.onclick = null;
};
link2.onclick = function () {
  neo.outerHTML = '<button class="dropbtn">Bora Bora</button>';
  btn.outerHTML = '<button  class="dropbtn btn"><a class="btn-link" href="https://www.fourseasons.com/ru/borabora/">Explore</a></button>';
  link2.onclick = null;
};
link3.onclick = function () {
  neo.outerHTML = '<button class="dropbtn">Tahaa </button>';
  btn.outerHTML = '<button  class="dropbtn btn"><a class="btn-link" href="https://royalmile.com.ua/australia-oceaniya/francuzskaya-polineziya/ostrov-taxaa/">Explore</a></button>';
  link3.onclick = null;
};