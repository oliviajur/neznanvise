function scrollAppear(){
    var introText = document.querySelector(".intro-text");
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; //no fixed value

    if (introPosition < screenPosition){
        introText.classList.add("intro-appear");
    }
    //console.log(introPosition); //distance fromt ehtop of the screen till intor appears
}

window.addEventListener("scroll", scrollAppear);

//scrollAppear(); //this invoked it directly


//this used to be called homepage now we will name it index
