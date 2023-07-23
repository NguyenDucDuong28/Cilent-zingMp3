
const navbarItems = Array.from(document.querySelectorAll('.zm-navbar-item-is-active'));


// Lưu trạng thái khi nhấp vào phần tử
navbarItems.forEach(item => {
  item.addEventListener('click', function() {
    const itemId = this.getAttribute('data-item-id');
    localStorage.setItem('activeItemId', itemId);
  });
});

// Kiểm tra trạng thái và áp dụng lại khi trang được tải lại
window.addEventListener('DOMContentLoaded', function() {
  const activeItemId = localStorage.getItem('activeItemId');
  if (activeItemId) {
    const activeItem = navbarItems.find(item => item.getAttribute('data-item-id') === activeItemId);
    activeItem.classList.add('active');
  }
});


//


const navbarLibrary= Array.from(document.querySelectorAll('.zm-navbar-item-is-library'));


// Lưu trạng thái khi nhấp vào phần tử
navbarLibrary.forEach(item => {
  item.addEventListener('click', function() {
    const itemId = this.getAttribute('data-item-id');
    localStorage.setItem('activeItemId', itemId);
  });
});

// Kiểm tra trạng thái và áp dụng lại khi trang được tải lại
window.addEventListener('DOMContentLoaded', function() {
  const activeItemId = localStorage.getItem('activeItemId');
  if (activeItemId) {
    const activeItem = navbarLibrary.find(item => item.getAttribute('data-item-id') === activeItemId);
    activeItem.classList.add('active');
  }
});

//
const navbarBXH= Array.from(document.querySelectorAll('.zm-sidebar-scrollbar-BXH'));


// Lưu trạng thái khi nhấp vào phần tử
navbarBXH.forEach(item => {
  item.addEventListener('click', function() {
    const itemId = this.getAttribute('data-item-id');
    localStorage.setItem('activeItemId', itemId);
  });
});

// Kiểm tra trạng thái và áp dụng lại khi trang được tải lại
window.addEventListener('DOMContentLoaded', function() {
  const activeItemId = localStorage.getItem('activeItemId');
  if (activeItemId) {
    const activeItem = navbarBXH.find(item => item.getAttribute('data-item-id') === activeItemId);
    activeItem.classList.add('active');
  }
});

