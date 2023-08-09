function showClothes() {
    const category = document.getElementById('category').value;
    const clothesDisplay = document.getElementById('clothesDisplay');
  
    // Remove previous clothes items if any
    while (clothesDisplay.firstChild) {
      clothesDisplay.removeChild(clothesDisplay.firstChild);
    }
  
    // Array of cloth types for each category
    const clothesTypes = {
      men: ['Shirts', 'Trousers', 'Jackets', 'Sweaters', 'Shorts'],
      women: ['Dresses', 'Skirts', 'Blouses', 'Coats', 'Jeans'],
      kids: ['T-shirts', 'Leggings', 'Hoodies', 'Hats', 'Pajamas']
    };
  
    // Create and append clothes items to the display
    clothesTypes[category].forEach(type => {
      const clothesItem = document.createElement('div');
      clothesItem.classList.add('clothesItem');
      clothesItem.textContent = type;
      clothesDisplay.appendChild(clothesItem);
    });
  }
  