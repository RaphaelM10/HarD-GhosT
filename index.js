const boi = document.getElementById('img-boi')
const supremo = document.getElementById('sec-invisivel')

boi.addEventListener('click',()=>{
    
    supremo.classList.toggle('boi')
})

const calvo = document.getElementById('img-calvo')
const calvo2 = document.getElementById('sec-invisivel-2')

calvo.addEventListener('click',()=>{
    
    calvo2.classList.toggle('boi')
})
const Gustavo = document.getElementById('img-gustavo')
const Gustavo2 = document.getElementById('sec-invisivel-1')

Gustavo.addEventListener('click',()=>{
    
    Gustavo2.classList.toggle('boi')
})

function zap(){
    alert('Link desligado: Procure o Player [HarD]Ninja para mais Informações!')
}