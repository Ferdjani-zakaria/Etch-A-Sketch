const canvas = document.querySelector('.canvas');
const resetBtn = document.querySelector('.btn');
const pixelRange = document.querySelector('.numPixel');

let mouseDown = false;



const updateTextCanvasSize =(val)=> {
    document.querySelector('#canvasSize').value=`${val}x${val}`; 
}

const changeColor =(div)=>{
    div.style.backgroundColor = "black";
}


const resetCanvas =(num)=> {
    canvas.innerHTML = "";
    canvas.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for(i=0; i<num*num; i++){
        const div = document.createElement('div');
        canvas.appendChild(div);
        div.addEventListener('mouseover', (e)=>{
            if(mouseDown){
                changeColor(e.target);
            }
            c
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

// Check for mouse if is Down
document.addEventListener('mousedown', function(){
    mouseDown = true;
});
document.addEventListener('mouseup', function(){
    mouseDown = false;
});


window.onload = resetCanvas(16)