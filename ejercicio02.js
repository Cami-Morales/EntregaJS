const círculo = document.getElementsByClassName('círculo')[0];
const verde = document.getElementById('verde');
const borde = document.getElementById('borde');
const reset = document.getElementById('reset');

verde.addEventListener('click', function () {
    círculo.classList.add('verde') 

})

borde.addEventListener('click', function(){
círculo.classList.add('borde') 

})

reset.addEventListener('click', function(){
    círculo.classList.remove('borde', 'verde') 
})