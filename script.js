const gridContainer = document.getElementById('grid-container');
let gridSize = 16;
let gridItemSize = 100 / gridSize;

for (let i = 0; i < gridSize * gridSize; i++) //rows
{
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${gridItemSize}%`;
    gridItem.style.height = `${gridItemSize}%`;
    gridItem.style.border = '1px solid black';
    gridContainer.appendChild(gridItem);

}