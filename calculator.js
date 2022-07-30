let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue="";

for (const item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
    
        if (buttonText=='x') {
            buttonText="*";
            screenValue +=buttonText;
            screen.value = screenValue;            
        }
        else if (buttonText=="C") {
            screenValue ="";
            screen.value = screenValue; 
        }
        else if (buttonText=="⌫") {
            screenValue=screenValue.slice(0, -1);
            screen.value= screenValue;
        }
        else if (buttonText=="=") {
             
            screen.value = eval(screenValue); 
        }
        else{
            screenValue  +=buttonText;
            screen.value = screenValue; 
        }

    })
}