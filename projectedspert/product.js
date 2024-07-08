
const products = [
    {
      image: 'assets/card-img.jpg',
      title: 'Kursus Pemrograman Javascript',
      instructor: 'Tomi',
      price: 500000,
      duration: '6 minggu',
      level: 'Pemula',
      description: 'Pelajari pemrograman javascript dari awal dengan proyek-proyek praktis.'
    },
    {
      image: 'assets/card-img.jpg',
      title: 'Kursus Pemrograman Javascript',
      instructor: 'Tomi',
      price: 700000,
      duration: '6 minggu',
      level: 'Pemula',
      description: 'Pelajari pemrograman javascript dari awal dengan proyek-proyek praktis.'
    },
    {
      image: 'assets/card-img.jpg',
      title: 'Kursus Pemrograman Javascript',
      instructor: 'Tomi',
      price: 300000,
      duration: '6 minggu',
      level: 'Pemula',
      description: 'Pelajari pemrograman javascript dari awal dengan proyek-proyek praktis.'
    },
    {
      image: 'assets/card-img.jpg',
      title: 'Kursus Pemrograman Javascript',
      instructor: 'Tomi',
      price: 400000,
      duration: '6 minggu',
      level: 'Pemula',
      description: 'Pelajari pemrograman javascript dari awal dengan proyek-proyek praktis.'
    },
    {
      image: 'assets/card-img.jpg',
      title: 'Kursus Pemrograman Javascript',
      instructor: 'Tomi',
      price: 900000,
      duration: '6 minggu',
      level: 'Pemula',
      description: 'Pelajari pemrograman javascript dari awal dengan proyek-proyek praktis.'
    },
    {
      image: 'assets/card-img.jpg',
      title: 'Kursus Pemrograman Javascript',
      instructor: 'Tomi',
      price: 800000,
      duration: '6 minggu',
      level: 'Pemula',
      description: 'Pelajari pemrograman javascript dari awal dengan proyek-proyek praktis.'
    },
    {
      image: 'assets/card-img.jpg',
      title: 'Kursus Pemrograman Javascript',
      instructor: 'Tomi',
      price: 300000,
      duration: '6 minggu',
      level: 'Pemula',
      description: 'Pelajari pemrograman javascript dari awal dengan proyek-proyek praktis.'
    },
    {
      image: 'assets/card-img.jpg',
      title: 'Kursus Pemrograman Javascript',
      instructor: 'Tomi',
      price: 600000,
      duration: '6 minggu',
      level: 'Pemula',
      description: 'Pelajari pemrograman javascript dari awal dengan proyek-proyek praktis.'
    },
    {
      image: 'assets/card-img.jpg',
      title: 'Kursus Pemrograman Javascript',
      instructor: 'Tomi',
      price: 700000,
      duration: '6 minggu',
      level: 'Pemula',
      description: 'Pelajari pemrograman javascript dari awal dengan proyek-proyek praktis.'
    },

  ]; 
  //Function discount
function calculateDiscountedPrice(price) {
    const discountThreshold = 500000; 
    const discountRate = 0.1; 
    if (price > discountThreshold) {
      return price - (price * discountRate);
    }
    return price;
  }
  // Function card
  function renderProductCards() {
    const productListDiv = document.getElementById('product-list');
    productListDiv.innerHTML = '';
    products.forEach(product => {
      const discountedPrice = calculateDiscountedPrice(product.price);
  
      const productCard = `
        <div class="col-lg-4">
          <div class="card mb-4 rounded-3 shadow-sm">
            <img src="${product.image}" alt="Course image" class="card-img-top h-32">
            <div class="card-body">
              <h3 class="card-title pricing-card-title">
              ${product.title}
              </h3>
              <p class="opacity-75">Batch 7</p>
              <p class="fw-bold">Instruktur: ${product.instructor}</p>
              
              <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg> Durasi: ${product.duration}</p>
              <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg> Level: ${product.level}</p>
                <p class="lead"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg> Harga: ${discountedPrice !== product.price ? `<s>Rp ${product.price.toLocaleString()}</s> <b>Rp ${discountedPrice.toLocaleString()}</b>` : `Rp  ${product.price.toLocaleString()}`}</p>
              <p>${product.description}</p>
              <a href="detail.html" class="w-100 btn btn-medium btn-outline-primary">Daftar Sekarang</a>
            </div>
          </div>
        </div>
      `;
      productListDiv.innerHTML += productCard;
    });
  }
  window.onload = renderProductCards;

