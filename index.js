fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(obj => {
      const category = obj.category;
      const score = obj.score;
      const icon = obj.icon;

      const detailCard = document.querySelector(`.details-card.${category.toLowerCase()}`);
      const scoreElement = detailCard.querySelector('.detail-score span');
      const iconElement = detailCard.querySelector('img');

      scoreElement.textContent = score;
      iconElement.src = icon;
    });
  })
  .catch(error => console.error(error));