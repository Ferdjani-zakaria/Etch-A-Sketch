const canvas = document.querySelector('.canvas');
const resetBtn = document.querySelector('.btn');
const pixelRange = document.querySelector('.numPixel');

const div = document.createElement('div');

// window.onload = resetCanvas(16)

const updateTextCanvasSize =(val)=> {
    document.querySelector('#canvasSize').value=`${val}x${val}`; 
}


const resetCanvas =()=> {
    const pixel = document.querySelectorAll('.canvas div');
}


resetBtn.addEventListener('click', resetCanvas)
pixelRange.addEventListener('input', (e)=>{
    updateTextCanvasSize(e.target.value);
})