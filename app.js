const image1 = document.querySelector("img")
const para = document.querySelector("p")
const math = Math.ceil(Math.random()*2)
function masjid() {
    // console.log(math);
    if (math === 1) {
        image1.src = "./assets/masjid.png";
        para.innerHTML = "You Won The Toss"
    } else {
        image1.src = " ";
        para.innerHTML = "You loss the Toss"
    }
}

function chand() {
    // console.log(math);
    if (math === 1) {
        image1.src = " ";
        para.innerHTML = "You loss the Toss"
    } else {
        image1.src = "./assets/chand.png";
        para.innerHTML = "You Won The Toss"
       
    }
}