window.addEventListener("scroll", function(e){
    // Select the area where the effect will run
    const target = document.querySelectorAll(".scroll");
    // Calculate the speed on the X axis
    let xAxis = ((window.innerWidth / 2) - window.pageYOffset) / 2;
    // Collect all the element for the effect
    var index = 0, length = target.length;
    // Use the effect on all element
    for(index; index < length; index++){
        // If the direction setted to vertical
        if (target[index].dataset.dir === "vertical"){
            var posX = window.pageYOffset * target[index].dataset.ratey;
            
            target[index].style.transform = "translate3d(0px, "+posX+"px, 0px)";
            // Check the opacity changing. If the opacity option setted to yes, it will change the opacity of the element
            if (target[index].dataset.opacity === "yes"){
                var myOpacity = 1 - (window.pageYOffset / 500);
                target[index].style.opacity = myOpacity;
            }
        //Else, if the direction is horizontal
        }else{
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            target[index].style.transform = "translate3d("+posX+ "px, "+posY+"px, 0px)";
        }
    }
});

//Check the target is on the screen
observer.observe(target);