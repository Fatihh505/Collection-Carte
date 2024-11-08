document.addEventListener("DOMContentLoaded", () => {
    const cards = [
      { name: "Carte 1", image: "path/to/image1.jpg" },
      { name: "Carte 2", image: "path/to/image2.jpg" },
      { name: "Carte 3", image: "path/to/image3.jpg" }
    ];
  
    const container = document.querySelector(".card-container");
  
    cards.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.name}">
        <p>${card.name}</p>
      `;
      container.appendChild(cardElement);
    });
  });
  