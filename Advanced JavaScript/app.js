// let btn = document.querySelector('button');
// console.dir(btn);

// // onclick console.log th button clicked

// btn.onclick = function(){
//     console.log('button clicked');
// }


// onmouseover console.log the button hovered
btn.onmouseover = function(){
    console.log('button hovered');
}


// Event Listener

// addEventListener('event', callback function)

// addEventListener('event', function(){

btn.addEventListener('click', function(){
    console.log('button clicked');
});

// double click

btn.addEventListener('dblclick', function(){
    console.log('button double clicked');
});








