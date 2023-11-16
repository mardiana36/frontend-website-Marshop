document.addEventListener("DOMContentLoaded", function () {
  function daftar() {
    let input1 = document.getElementsByClassName("divOnForm1");
    let input2 = document.getElementsByClassName("divOnForm2");
    let tombol1 = document.getElementById("tombolBerikutnya");
    let tombol2 = document.getElementById("tombolDaftar");
    let isiInputan = document.getElementById("email-login");
    for (let i = 0; i < input2.length; i++) {
      input2[i].style.display = "none";
    }
    tombol2.style.display = "none";
    tombol1.addEventListener("click", function () {
      if (isiInputan.value != "") {
        for (let i = 0; i < input2.length; i++) {
          input2[i].style.display = "block";
        }
        input1[0].style.display = "none";
        tombol2.style.display = "flex";
        tombol1.style.display = "none";
      }
    });
  }
  daftar();
});

document.addEventListener("DOMContentLoaded", function () {
  let element = document.getElementsByClassName("drop");
  let container = document.createElement("div");
  function ubahNav() {
    cekUkuranLayar();
    function cekUkuranLayar() {
      window.addEventListener("resize", function () {
        tampilan();
      });
    }
    function tampilan() {
      if (window.innerWidth < 1024) {
        element[0].parentNode.insertBefore(container, element[0]);
        for (let i = 0; i < element.length; i++) {
          container.appendChild(element[i]);
        }
        container.classList.add("divDrop");
      } else {
        // mengunakan spread operator untuk mereplace div dengan child yang ada di dalamnya
        container.replaceWith(...element);
      }
    }
    tampilan();
  }
  ubahNav();
});

document.addEventListener("DOMContentLoaded", function () {
  let iconMenu = document.getElementById("menuImg");
  let menu = document.querySelector(".divDrop");
  function dropMenu() {
    iconMenu.addEventListener("click", function () {
      menu.classList.toggle("displayOn");
      if (menu.classList.contains("displayOn")) {
        iconMenu.src = "aset/gambar/icons8-close-pane-100 (1).png";
      } else {
        iconMenu.src = "aset/gambar/icons8-menu-100 (2).png";
      }
    });
  }
  dropMenu();
});

document.addEventListener("DOMContentLoaded", function () {
  function scrollBar(classContainerScroll, classCardScroll, idButtonScrollLeft, idButtonScrollRight, totalMArginCard, containerKe2 = false) {
    let scroll = document.getElementsByClassName(classContainerScroll);
    let card = document.getElementsByClassName(classCardScroll);
    let buttonLeft = document.getElementById(idButtonScrollLeft);
    let buttonRight = document.getElementById(idButtonScrollRight);
    let cardWidth = card[0].offsetWidth;
    let goScroll;
    cekUkuranLayar();
    function cekUkuranLayar() {
      cardWidth = card[0].offsetWidth;
      tampil();
      hideButton();
      window.addEventListener("resize", function () {
        cardWidth = card[0].offsetWidth;
        tampil();
        hideButton();
      });
    }
    function hideButton() {
      if (scroll[0].scrollLeft === 0) {
        buttonLeft.style.display = 'none';
      } else {
        buttonLeft.style.display = 'block';
      }
      if ((scroll[0].scrollLeft + scroll[0].offsetWidth) >= scroll[0].scrollWidth-5) {
        buttonRight.style.display = 'none';
      } else {
        buttonRight.style.display = 'block';
      }
    }
    scroll[0].addEventListener('scroll', hideButton);
    function tampil() {
      buttonLeft.addEventListener("click", function () {
        if (containerKe2 == true) {
          if (window.innerWidth < 450) {
            goScroll = (cardWidth + totalMArginCard);
            scroll[0].scrollLeft -= goScroll;
          } else if (window.innerWidth < 768) {
            goScroll = (cardWidth + totalMArginCard) * 2;
            scroll[0].scrollLeft -= goScroll;
          } else if (window.innerWidth < 1024) {
            goScroll = (cardWidth + totalMArginCard) * 3;
            scroll[0].scrollLeft -= goScroll;
          }else { 
            goScroll = (cardWidth + totalMArginCard) * 4;
            scroll[0].scrollLeft -= goScroll;
          }
          
        } else {
          if (window.innerWidth < 450) {
            goScroll = (cardWidth + totalMArginCard) * 2;
            scroll[0].scrollLeft -= goScroll;
          } else if (window.innerWidth < 768) {
            goScroll = (cardWidth + totalMArginCard) * 3;
            scroll[0].scrollLeft -= goScroll;
          } else { 
            goScroll = (cardWidth + totalMArginCard) * 6;
            scroll[0].scrollLeft -= goScroll;
          }
        }
      });
      buttonRight.addEventListener("click", function () {
        if (containerKe2 == true) {
          if (window.innerWidth < 450) {
            goScroll = (cardWidth + totalMArginCard);
            scroll[0].scrollLeft += goScroll;
          } else if (window.innerWidth < 768) {
            goScroll = (cardWidth + totalMArginCard) * 2;
            scroll[0].scrollLeft += goScroll;
          } else if (window.innerWidth < 1024) {
            goScroll = (cardWidth + totalMArginCard) * 3;
            scroll[0].scrollLeft += goScroll;
          }else { 
            goScroll = (cardWidth + totalMArginCard) * 4;
            scroll[0].scrollLeft += goScroll;
          }
        } else {
          if (window.innerWidth < 450) {
            goScroll = (cardWidth + totalMArginCard) * 2;
            scroll[0].scrollLeft += goScroll;
          } else if (window.innerWidth < 768) {
            goScroll = (cardWidth + totalMArginCard) * 3;
            scroll[0].scrollLeft += goScroll;
          } else { 
            goScroll = (cardWidth + totalMArginCard) * 6;
            scroll[0].scrollLeft += goScroll;
          }
        }
      });
      
    }
    tampil();
    
  }
  scrollBar('container2','content2','buttonLeft','buttonRight', 12);
  scrollBar('divContent3','cardContent3','buttonLeft1','buttonRight1', 25, true);
  scrollBar('divContent4','cardContent4','buttonLeft2','buttonRight2', 25, true);
});
