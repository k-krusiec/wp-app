(function () {

  const showLogo = logo => {
    logo.classList.remove('logo-hidden');
  };

  const hideLogo = logo => {
    logo.classList.add('logo-hidden');
  };

  const isVisible = elements => {
    const html = document.documentElement;
    const logo = document.querySelector('.logo');
    let position;

    for (let i = 0, len = elements.length; i < len; i++) {
      position = elements[i].getBoundingClientRect();
      if ((position.top + position.height) >= 0 && position.left >= 0 &&
          (position.bottom - position.height) <= (window.innerHeight || html.clientHeight) && position.right <= (window.innerWidth || html.clientWidth)) {
        return showLogo(logo);
      } else {
        hideLogo(logo);
      }
    }
  };

  const getSelectedElements = () => {
    const selectedElements = document.querySelectorAll('.selected');

    window.addEventListener('scroll', e => {
      isVisible(selectedElements);
    });
  };

  getSelectedElements();

})();


// (function () {
//
//   let selectedItemsArr = [];
//
//   const showLogo = function () {
//     const logo = document.querySelector('.logo');
//     logo.classList.remove('logo-hidden');
//   }
//
//   const getSelectedElements = function (joke) {
//     const position = joke.getBoundingClientRect();
//     const itemName = 'item' + joke.dataset.id;
//     const selectedItem = {
//       name: itemName,
//       positionX: position.top,
//       positionY: position.left,
//       width: joke.offsetWidth,
//       height: joke.offsetHeight
//     };
//
//     if (joke.classList.contains('selected')) {
//       selectedItemsArr.push(selectedItem);
//     } else {
//       selectedItemsArr = selectedItemsArr.filter(item => item.name !== itemName);
//     }
//     // console.log(selectedItemsArr);
//   }
//
//   const isItemSelected = function () {
//     const jokes = document.querySelectorAll('.joke');
//
//     for (let i = 0, len = jokes.length; i < len; i++) {
//       getSelectedElements(jokes[i]);
//     }
//   }
//
//   const scrollDetection = function () {
//     // isItemSelected();
//     window.onscroll = function(e) {
//       // console.log(this.oldScroll > this.scrollY);
//       this.oldScroll = this.scrollY;
//       // console.log(this.scrollY);
//       showLogo();
//
//     }
//   }
//
//   scrollDetection();
//
//
//   console.log(window.innerHeight);
//
// })();
