const nav = document.querySelector('#nav');
const navbutton = document.querySelector('#nav-btn');
const navbtnimg = document.querySelector('#nav-btn-img');

navbutton.onclick = () => {
    if (nav.classList.toggle('open')) {
  navbtnimg.src = 'img/NAV close.jpg';
}
  else {
   navbtnimg.src = 'img/NAV.jpg';
  }
}

AOS.init();