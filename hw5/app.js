window.onload= function(){//this will only run after the page is loaded...

    document.getElementById("b_add").onclick=function(){
    
    let a=document.querySelector("#n1");
    let b=document.querySelector("#n2");

    let c=(parseInt(a.value)) +(parseInt(b.value));
    document.querySelector("#output").innerHTML=c;
    }
    document.getElementById("b_sub").onclick=function(){
    
        let a=document.querySelector("#n1");
        let b=document.querySelector("#n2");
    
        let c=(parseInt(a.value)) -(parseInt(b.value));
        document.querySelector("#output").innerHTML=c;
        }
    document.getElementById("b_div").onclick=function(){
    
        let a=document.querySelector("#n1");
        let b=document.querySelector("#n2");
        
         let c=(parseInt(a.value)) /(parseInt(b.value));
        document.querySelector("#output").innerHTML=c;
     }  
     document.getElementById("b_mult").onclick=function(){
    
        let a=document.querySelector("#n1");
        let b=document.querySelector("#n2");
            
        let c=(parseInt(a.value)) *(parseInt(b.value));
        document.querySelector("#output").innerHTML=c; 
    }

}
