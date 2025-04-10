// Buttun For Dark & light Mode
const toggleBtn = document.querySelector('.theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});
// Recover preference when downloading the page
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'dark') body.setAttribute('data-theme', 'dark');
});

// Buttun For sidebar Search
const boxSearch = document.querySelector('.boxSearch');
const boxCheckout = document.querySelector('.boxCheckout');
function icon_box_Checkout(){
  boxCheckout.classList.toggle("open");
}
function icon_box_Search(){
  boxSearch.classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const fruitstList = document.getElementById('product-list');

      if (!fruitstList) {
        console.error('العنصر #product-list غير موجود في الصفحة!');
        return;
      }

      data.Fruits.forEach(fruits => {
        const fruitsItem = document.createElement('li');
        fruitsItem.classList.add('splide__slide');
        fruitsItem.innerHTML = `
          <div class="icon_heart"><a href="#"><i class="fa-regular fa-heart sdsngdn"></i></a></div>
          <div class="box_image">
              <span class="discount">${fruits.discount}%</span>
              <img src="${fruits.img}" class="img-product">
          </div>
          <div class="content">
              <a href="product.html" class="product-item-link">${fruits.name}</a>
              <p class="product-item-link">${fruits.description}</p>
              <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <div class="price">
                  <span>$${fruits.price}</span>
                  <del>$${fruits.priceDel}</del>
              </div>
              <button>Add</button>
          </div>
        `;

        fruitstList.appendChild(fruitsItem);
      });

      new Splide('#splide2', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '1rem',
        breakpoints: {
          1024: { perPage: 3 },
          768: { perPage: 2 },
          480: { perPage: 1 },
        },
      }).mount();
    })
    .catch(error => console.error('Error loading JSON:', error));
});

// for vegetables item
document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const vegetableItemItemList = document.getElementById('product-list-best'); // تحديد العنصر الذي سيحتوي على المنتجات
      if (!vegetableItemItemList) {
        console.error('العنصر #product-list غير موجود في الصفحة!');
        return;
      }
      data.vegetables.forEach(vegetable => {
        const vegetableItem = document.createElement('li'); // إنشاء عنصر <li>
        vegetableItem.classList.add('splide__slide'); // إضافة الكلاس المناسب
        vegetableItem.innerHTML = `
          <div class="icon_heart "><a href="#" ><i class="fa-regular fa-heart sdsngdn"></i></a></div>
          <div class="box_image">
              <span class="discount">${vegetable.discount}%</span>
              <img src="${vegetable.img}" class="img-product">
          </div>
          <div class="content">
              <a href="product.html" class="product-item-link">${vegetable.name}</a>
              <p class="product-item-link">${vegetable.description}</p>
              <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <div class="price">
                  <span>$${vegetable.price}</span>
                  <del>$${vegetable.priceDel}</del>
              </div>
              <button>Add</button>
          </div>
        `;
        // إضافة العنصر إلى القائمة
        vegetableItemItemList.appendChild(vegetableItem);
      });

      new Splide('#splide3', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '1rem',
        breakpoints: {
          1024: { perPage: 3 },
          768: { perPage: 2 },
          480: { perPage: 1 },
        },
      }).mount();
    })
    .catch(error => console.error('Error loading JSON:', error));
});



document.addEventListener('DOMContentLoaded', function () {
  new Splide('#splide1', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
  }).mount();
});


