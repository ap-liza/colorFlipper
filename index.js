const colors = ["green", "rgba(133, 122, 200)","red", "#f15025", "gray"]
const btn = document.querySelector("#btn");
const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    //get random numbers btn 0-3 according to the colors arrays
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}