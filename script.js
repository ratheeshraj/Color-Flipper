const button = document.getElementById("btn")
const wrap = document.getElementById("wrap")
const colortext = document.getElementById("color")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

setTimeout(() => {
    button.addEventListener('click', function(){
        let hexcolor ='#'
    
        for(let i=1;i<=6;i++){
            hexcolor+=randomhex();
        }
        wrap.style.backgroundColor =hexcolor;
        colortext.innerHTML=hexcolor
    })
    
    
}, 5000); 
function randomhex(){
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]
}
