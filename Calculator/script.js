let input = document.getElementById('inputbox');
let button = document.querySelectorAll('button');

let string = "";
let a = Array.from(button);
a.forEach(button => {
    button.addEventListener('click', (b) =>{
        if(b.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(b.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(b.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += b.target.innerHTML;
            input.value = string;
        }
        
    })
})