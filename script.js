const gridContainer = document.getElementById('grid-container');
const sizeSlider = document.querySelector('.size-slider');
const sizeValue = document.querySelector('.size-value');
let gridSize = 0;
let gridItemSize = 0;

sizeSlider.addEventListener('input', function()
{
    gridSize = sizeSlider.value;
    gridItemSize = 100 / gridSize;
    sizeValue.textContent = `${gridSize}` + ' x ' + `${gridSize}`;
    createGridItems(gridSize);
})

function createGridItems(gridSize)
{
    gridContainer.innerHTML = '';

    for (let i = 0; i < gridSize * gridSize; i++) //rows
    {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${gridItemSize}%`;
        gridItem.style.height = `${gridItemSize}%`;
        gridItem.style.border = '1px solid black';
        gridContainer.appendChild(gridItem);
    }

    const gridItems = document.querySelectorAll('.grid-item');
    let isMouseDown = false;

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function()
        {   
            if (isMouseDown)
            {
                item.style.backgroundColor = 'green';
                console.log('working')
            }
        })
    });
    
    gridItems.forEach(item => {
        item.addEventListener('mousedown', function()
        {
            isMouseDown = true;
        })
    });
    
    gridItems.forEach(item => {
        item.addEventListener('mouseup', function()
        {
            isMouseDown = false;
        })
    });
}