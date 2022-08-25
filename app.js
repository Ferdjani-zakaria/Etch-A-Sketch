const canvas = document.querySelector('.canvas');
const resetBtn = document.querySelector('#reset');
const pixelRange = document.querySelector('.numPixel');
const randomBtn = document.querySelector('#randomRgb');

let mouseDown = false;
let random= false;


const updateTextCanvasSize =(val)=> {
    document.querySelector('#canvasSize').value=`${val}x${val}`; 
}

const changeColor =(div)=>{
    if (random){
        div.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    }
    else {
        // getting the rgb value of the hovered div in the form of array
    let changedDiv = window.getComputedStyle(div).backgroundColor.split(/[()]/)[1].split(',');
    div.style.backgroundColor = `rgb(${changedDiv[0]-51}, ${changedDiv[1]-51}, ${changedDiv[2]-51})`;
    }
    
}


const resetCanvas =(num)=> {
    canvas.innerHTML = "";
    canvas.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for(i=0; i<num*num; i++){
        const div = document.createElement('div');
        canvas.appendChild(div);
        div.addEventListener('mouseenter', (e)=>{
            if(mouseDown){
                changeColor(e.target);
            }
        })
    }
    
}


resetBtn.addEventListener('click',(e)=>{ 
    let num = pixelRange.value;
    resetCanvas(num);
});
pixelRange.addEventListener('input', (e)=>{
    updateTextCanvasSize(e.target.value);
})

pixelRange.addEventListener('change', (e)=>{
    resetCanvas(e.target.value);
})

randomBtn.addEventListener('click',(e)=>{ 
    random= !random;
    randomBtn.classList.toggle("bgBlue")
});

// Check for mouse if is Down
document.addEventListener('mousedown', function(){
    mouseDown = true;
});
document.addEventListener('mouseup', function(){
    mouseDown = false;
    
});


window.onload = resetCanvas(16)