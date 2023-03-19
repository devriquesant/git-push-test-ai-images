window.onload = init;
var imageShown = 0;
var imageLimit = 3;

function init(){
    const BTNs  = document.querySelectorAll("button");
    const LEFT  = BTNs[0]; LEFT.motionValue  = -1;
    const RIGHT = BTNs[1]; RIGHT.motionValue = +1;

    const BackgroundBlur = document.getElementById("blur-img");
    BackgroundBlur.setImage = function( url ){
        this.style.backgroundImage = `url(${url})`;
    }

    const Display = document.getElementById("display");
    Display.setImage = function( url ){
        this.src = url;
    }

    function getUrl( ){
        return "city"+(imageShown+1)+".jpg";
    }

    function onButtonClick(){
        imageShown = ( 
            ( imageLimit+(
                (imageShown+this.motionValue)%imageLimit)
            ) % imageLimit 
        );

        let url = getUrl();
        Display.setImage( url );
        BackgroundBlur.setImage( url );

        const Properties = {
            duration: 300,
            iterations: 1,
            playbackRate: "ease-in",
            fill: "forwards"   
        }

        Display.animate([
            {opacity: 0.2},{opacity: 1}
        ],Properties)

        BackgroundBlur.animate([
            {filter: 'blur(20px)'},{filter: 'blur(30px)'},{filter:'blur(20px)'}
        ],Properties)
    }

    LEFT.onclick = onButtonClick;
    RIGHT.onclick = onButtonClick;
    
}