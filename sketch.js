var ttext = "Vitae nec in commodo, auctor consectetuer, sed rhoncus integer tincidunt praesent, tellus fermentum accumsan. Sed suspendisse, nunc mauris purus integer et platea, ligula elit. Arcu quam vitae ultrices neque. Ante ac urna vitae rutrum, cras porta quam vestibulum. Conubia non maecenas vestibulum vestibulum, orci viverra porta iaculis, arcu est, libero nam sodales eleifend odio justo. Ante purus, non morbi viverra nec massa. Massa lectus ante montes, eros dolor dolor, orci natoque porttitor quis mus quisque. Nunc et, magna inceptos lectus. Nulla vel tellus sed quam feugiat. Lectus et vel, felis viverra lorem suspendisse eget felis quis, suscipit purus egestas vitae lobortis, lorem magna id pede a.";
var decArr = [];
var stripArr = [];
var gridSize = 10;
var da = 0;
var db = 0;
var dx = 0;
var dy = 0;
var width = 200;
var height = 200;

function setup() {

    
    for(var i = 0; i < ttext.length; i++) {
        var cCode = ttext.charCodeAt(i);
        decArr.push(cCode);
    }
    
    
    if(decArr.length == ttext.length) {
        console.log(decArr);
        
        width = (8*(8*gridSize))+1;
        console.log(ttext.length);
        height = Math.ceil(((ttext.length*8)/64)/8)*(8*gridSize)+1;
        console.log(height);
        createCanvas(width, height);
        background(255);
        
        cCodeToBinary();
        
    }
    
    
}

function draw() {
  
}

function cCodeToBinary() {
    
    for(var i = 0; i < decArr.length; i++) {
        var bitArr = [0,0,0,0,0,0,0,0];
        var tempS = decArr[i];
        
        if(tempS - 128 >= 0 && tempS > 0){
            bitArr[0] = 1;
            tempS = tempS - 128;
        }
        if(tempS - 64 >= 0 && tempS > 0) {
            bitArr[1] = 1;
            tempS = tempS - 64;
        }
        if(tempS - 32 >= 0 && tempS > 0) {
            bitArr[2] = 1;
            tempS = tempS - 32;
        }
        if(tempS - 16 >= 0 && tempS > 0) {
            bitArr[3] = 1;
            tempS = tempS - 16;
        }
        if(tempS - 8 >= 0 && tempS > 0) {
            bitArr[4] = 1;
            tempS = tempS - 8;
        }
        if(tempS - 4 >= 0 && tempS > 0) {
            bitArr[5] = 1;
            tempS = tempS - 4;
        }
        if(tempS - 2 >= 0 && tempS > 0) {
            bitArr[6] = 1;
            tempS = tempS - 2;
        }
        if(tempS - 1 >= 0 && tempS > 0) {
            bitArr[7] = 1;
            tempS = tempS - 1;
        }
        
        stripArr.push(bitArr);
    }
    
    if(stripArr.length == decArr.length) {
        drawStrips();
    }
}

function drawStrips() {
    
    for(var i = 0; i < stripArr.length; i++){
        for(var j = 0; j < stripArr[i].length; j++) {
            if(stripArr[i][j] == 1){
                fill(0);
            } else {
                fill(255);
            }
            
            da = Math.floor(i/8);
            dx = (gridSize*8)*da;
            
            db = Math.floor(dx/((8*gridSize)*8));
            dy = db*(8*gridSize)
            
            console.log(db);
            
            rect(j*gridSize + dx - (dy*8), i*gridSize - dx + dy, gridSize, gridSize);
        }
    }
} 