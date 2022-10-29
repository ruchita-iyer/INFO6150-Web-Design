document.getElementById("add").addEventListener('click', () =>{
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let input3 = document.querySelector('#input3');
    let result = document.querySelector('h1');
    let total = parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value);
    //result.innerText = total.toFixed(3); 
    document.getElementById("result").value=total.toFixed(2);
});


document.getElementById("subtract").addEventListener('click', () =>{
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let input3 = document.querySelector('#input3');
    let result = document.querySelector('h1');
    let total = parseFloat(input1.value) - parseFloat(input2.value) - parseFloat(input3.value);
    //result.innerText = total.toFixed(3); 
    document.getElementById("result").value=total.toFixed(2);
});

document.getElementById("multiply").addEventListener('click', () =>{
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let input3 = document.querySelector('#input3');
    let result = document.querySelector('h1');
    let total = parseFloat(input1.value) * parseFloat(input2.value) * parseFloat(input3.value);
    //result.innerText = total.toFixed(3); 
    document.getElementById("result").value=total.toFixed(2);
});

document.getElementById("divide").addEventListener('click', () =>{
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let input3 = document.querySelector('#input3');
    let result = document.querySelector('h1');
    let total = parseFloat(input1.value) / parseFloat(input2.value) / parseFloat(input3.value);
    //result.innerText = total.toFixed(3); 
    document.getElementById("result").value=total.toFixed(2);
});

