

// Mobile Menu Toggle
  document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
      document.querySelector('nav').classList.toggle('active');
  });
  
//counter//
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCount = document.querySelector('.cart-count');
  let count = 0;
  
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
          count++;
          cartCount.textContent = count;
          this.textContent = 'تمت الإضافة!';
          setTimeout(() => {
              this.textContent = 'أضف إلى السلة';
          }, 2000);
      });
  });