/* Filename: app.js
   Javascript for Game 1 Homework
*/

//alert("ok");
//console.log("ok");
var x = 0;
var y = 0;


function b_left() {

	x -= 20;

	var obj = document.getElementById('circle');

	obj.style.left = x + 'px';  

}


function b_right() {

	x += 20;

	var obj = document.getElementById('circle');

	obj.style.left = x + 'px'; 

}


function b_up() {

	y -= 20;

	var obj = document.getElementById('circle');

	obj.style.top = y + 'px'; 

}

function b_down() {

	y += 20;

	var obj = document.getElementById('circle');

	obj.style.top = y + 'px'; 

}


    
window.onload=function(){
    var obj_u = document.getElementById('btn_up');

	var obj_l = document.getElementById('btn_left');

	var obj_r = document.getElementById('btn_right');

	var obj_d = document.getElementById('btn_down');

	obj_u.addEventListener('click', b_up, false);

	obj_l.addEventListener('click', b_left, false);

	obj_r.addEventListener('click', b_right, false);

	obj_d.addEventListener('click', b_down, false)

}
