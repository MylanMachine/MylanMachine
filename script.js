// Show product info in modal
function showProductInfo(title, price, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalLink').href = `https://www.amazon.com/s?k=${encodeURIComponent(title)}`;
    document.getElementById('productModal').style.display = 'flex';
  }
  
  // Close modal
  function closeModal() {
    document.getElementById('productModal').style.display = 'none';
  }
  
  // Sticky header on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('header');
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    lastScroll = currentScroll;
  });
  
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });