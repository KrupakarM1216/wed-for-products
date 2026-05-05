// Mobile Nav Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // Filter Functionality
  document.querySelectorAll('.filter-item').forEach(item => {
      item.addEventListener('click', () => {
          document.querySelectorAll('.filter-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          // Add your filtering logic here
          // Example: Update product grid content based on selected filter
      });
  });

  // Search Functionality
  document.getElementById('search').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          // Add your search functionality here
          console.log('Search triggered:', e.target.value);
      }
  });

  // Lazy Loading
  document.querySelectorAll('img').forEach(img => {
      if (img.dataset.src) {
          img.src = img.dataset.src;
      }
  });

  // Add to Cart Functionality
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
          // Add your cart handling logic here
          console.log('Add to Cart clicked for:', button.closest('.product-card'));
      });
  });