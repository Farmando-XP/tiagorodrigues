let count = 1;
let lastClick = 0;


document.getElementById("next").addEventListener("click", next);

function next(){
    const thisClick = Date.now();
    if(thisClick - lastClick < 100){
        return;
    }
    lastClick = thisClick;

    console.log(count)
    if(count>3){
        count = 1;
    }

    document.getElementById("next").setAttribute("for","radio"+count);
    count++;
}

document.getElementById("back").addEventListener("click", back);

function back(){
    const thisClick = Date.now();
    if(thisClick - lastClick < 100){
        return;
    }
    lastClick = thisClick;

    console.log(count)
    if(count<2){
        count = 4;
    }
    console.log("1")
    document.getElementById("back").setAttribute("for","radio"+(count -1));
    
    count=count-1;
}