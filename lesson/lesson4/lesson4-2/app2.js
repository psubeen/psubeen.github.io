window.onload=function(){

    document.querySelector("#numberOnly").onkeypress=function(ev){
        console.log(ev.keyCode);
        //0 = 48 to 9 = 57
        if(ev.keyCode<48||ev.keyCode>58)
        ev.preventDefault();
    }


}