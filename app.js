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
                console.log(myOpacity);
                target[index].style.opacity = myOpacity;
            }
        }else{
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            target[index].style.transform = "translate3d("+posX+ "px, "+posY+"px, 0px)";
        }
    }
});