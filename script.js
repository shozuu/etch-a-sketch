const gridContainer = document.getElementById('grid-container');
const sizeSlider = document.querySelector('.size-slider');
const sizeValue = document.querySelector('.size-value');
const colorPicker = document.querySelector('.color-picker');
const colorPen = document.querySelector('.color-pen');
const rainbowPen = document.querySelector('.rainbow-pen');
const eraser = document.querySelector('.eraser');
const clearCanvas = document.querySelector('.clear-canvas');
const toggleLines = document.querySelector('.toggle-lines');
const toggleSettings = document.querySelector('.toggle-button-container');
const settingsContainer = document.querySelector('.settings-container');
const contentContainer = document.querySelector('.content-container');
const replace = document.querySelector('.replace');
let r = 0, b = 0, g = 0; 
let isRgbClicked = false;
let colorValue = 'black'; // this values are set
let gridSize = 16;        // to act as default values
let gridItemSize = 100 / gridSize; // when no user-inputs
createGridItems(gridSize); //has received yet


colorPicker.addEventListener('input', function()
{
    colorValue = colorPicker.value;
})

colorPen.addEventListener('click', function()
{
    colorValue = colorPicker.value;
    isRgbClicked = false;

    colorPen.classList.add('button-clicked');
    rainbowPen.classList.remove('button-clicked');
    eraser.classList.remove('button-clicked');
})

rainbowPen.addEventListener('click', function()
{
    isRgbClicked = true;

    colorPen.classList.remove('button-clicked');
    rainbowPen.classList.add('button-clicked');
    eraser.classList.remove('button-clicked');
})

eraser.addEventListener('click', function()
{
    colorValue = '#e8e8e8';
    isRgbClicked = false;

    colorPen.classList.remove('button-clicked');
    rainbowPen.classList.remove('button-clicked');
    eraser.classList.add('button-clicked');
})

clearCanvas.addEventListener('click', function()
{
    isRgbClicked = false;
    gridContainer.innerHTML = '';
    createGridItems(gridSize);
})

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
    let showLines = true;

    for (let i = 0; i < gridSize * gridSize; i++)
    {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${gridItemSize}%`;
        gridItem.style.height = `${gridItemSize}%`;
        gridItem.style.border = '1px solid rgb(184, 184, 184';
        gridContainer.appendChild(gridItem);
    }

    const gridItems = document.querySelectorAll('.grid-item');
    let isMouseDown = false;

    toggleLines.addEventListener('click', function()
    {
        showLines = !showLines;
        console.log(showLines);

        if (showLines == false)
        {
            toggleLines.classList.remove('button-clicked');
            gridItems.forEach(item => {
                item.style.border = 'none';
            });
        }
        else
        {
            toggleLines.classList.add('button-clicked');
            gridItems.forEach(item => {
                item.style.border = '1px solid rgb(184, 184, 184';
            });
        }
    })

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function()
        {   
            if (isMouseDown)
            {
                if (isRgbClicked)
                {
                    r = Math.floor(Math.random() * 256);
                    b = Math.floor(Math.random() * 256);
                    g = Math.floor(Math.random() * 256);

                    colorValue = `rgb(${r}, ${g}, ${b})`;
                    item.style.backgroundColor = colorValue;
                }
                else
                    item.style.backgroundColor = colorValue;
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

toggleSettings.addEventListener('click', function()
{
    replace.style.display = '';
    settingsContainer.classList.add('hidden');
    contentContainer.classList.add('center');
})

replace.addEventListener('click', function()
{
    replace.style.display = 'none';
    settingsContainer.classList.remove('hidden');
    contentContainer.classList.remove('center');
})