window.addEventListener("scroll", function(e){
    const target = document.querySelectorAll(".scroll");

    let xAxis = ((window.innerWidth / 2) - window.pageYOffset) / 2;
    
    var index = 0, length = target.length;
    for(index; index < length; index++){
        if (target[index].dataset.dir === "vertical"){
            var posX = window.pageYOffset * target[index].dataset.ratey;
            

            target[index].style.transform = "translate3d(0px, "+posX+"px, 0px)";
            if (target[index].dataset.opacity === "yes"){
                var myOpacity = 1 - (window.pageYOffset / 500);
                target[index].style.opacity = myOpacity;
            }
        }else{
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            target[index].style.transform = "translate3d("+posX+ "px, "+posY+"px, 0px)";
        }
    }
});

const fromRight = document.querySelector('.slideRight');
const fromLeft = document.querySelector('.slideLeft');

observer = new IntersectionObserver((entries) =>{
    
    entries.forEach(entry => {
        console.log(entries[0].target.dataset);
        if(entries[0].intersectionRatio > 0){
            entries[0].target.style.animation = entries[0].target.dataset.dir+" 2s forwards ease-out";
        }else{
            entries[0].target.style.animation = 'none';
        }
    })
})

let target = '.slide';
document.querySelectorAll(target).forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});