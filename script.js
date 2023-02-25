let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/', '%'];

const out = document.querySelector('.main_box-disp');

function allClear() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

// document.querySelector('.ac').addEventListener('click', allClear);

document.addEventListener('keydown', (event) => {
  console.log(event);
  if (digit.includes(event.key)) {
    a += event.key;
    out.textContent = a;
  }
});

document.querySelector('.main_box').addEventListener('click', (event) => {
  if(!event.target.classList.contains('main_box-btn')) {return;}
  if (event.target.classList.contains('ac')) {
    allClear();
    return;
  }
  if (event.target.classList.contains('main_box-disp')) {return;}
  out.textContent = '';
  
  const key = event.target.textContent;

  if (a!='' && a != '-' && key === '+/-') {
    a = a * -1;
    console.log(a);
    out.textContent = a;
  }
  
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a+=key;
      console.log(a, b, sign);
      out.textContent = a;
    } 
  else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b+=key;
      console.log(a,sign,b);
      out.textContent = b;
    }
  }

  if (action.includes(key)) {
    sign=key;
    console.log(a, b, sign);
    out.textContent = sign;
  }

  if (key === '=') {
    switch (sign) {
      case "+": 
        a = (+a) + (+b);
        break;
      case "-": 
        a = (+a) - (+b);
        break;
      case "x": 
        a = (+a) * (+b);
        break;
      case "/":
        if ( b == 0 ) {
          out.textContent = 'Тi що, ебанувсi?';
          a = '';
          b = '';
          sign = ''; 
          return;
        }
        a = (+a) / (+b);
        break;
      case "%":
        a = (+a)/100 * (+b);
        break;
    } 

    finish = true;
    out.textContent = a;
  }

});

