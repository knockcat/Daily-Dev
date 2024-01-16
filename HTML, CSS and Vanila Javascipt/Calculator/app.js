
let res = "";

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        //    console.log(e.target); 
        if (e.target.innerHTML == '=') {
            try{
                res = eval(res);
            }
            catch(e)
            {
                if(e instanceof SyntaxError || e instanceof ReferenceError)
                {
                    alert("INVALID");
                    res = "";
                }
                else
                {
                    throw e;
                }
            }
        }
        else if (e.target.innerHTML == 'C') {
            res = "";
        }
        else {
            res = res + e.target.innerHTML;
        }
        document.querySelector('input').value = res;
    });
});