const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

// adding click event button

btn.addEventListener('click', function(){
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.style.color = newColor;
    h1.innerText = newColor;
})

// creating a callback function

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `RGB(${r}, ${g}, ${b})`;
}