const typingMessage_color = "I’VE FOUND 1 COLOR OF THIS STYLE:";
const typingMessage_size = "I’VE FOUND THESE SIZES FOR THIS PRODUCT:";
const typingMessage_action = "CONFIRM YOUR ACTION:";

const typingText_color = document.getElementById("typing_color");
const typingText_size = document.getElementById("typing_size");
const typingText_action = document.getElementById("typing_action");

let index_color = 0;
let index_size = 0;
let index_action = 0;


function typing_color(){
    if (index_color < typingMessage_color.length){
        let letter = typingMessage_color.charAt(index_color);
        typingText_color.innerHTML += letter;
        index_color++;
    }
}
function typing_size(){
    if (index_size < typingMessage_size.length){
        let letter = typingMessage_size.charAt(index_size);
        typingText_size.innerHTML += letter;
        index_size++;
    }
}
function typing_action(){
    if (index_action < typingMessage_action.length){
        let letter = typingMessage_action.charAt(index_action);
        typingText_action.innerHTML += letter;
        index_action++;
    }
}
// function typingInterval(typing_target, callback) {
//     setInterval(typing_target, 20);
//     callback();
// }
setInterval(function() {
    typing_action();
    setInterval(function() {
        typing_size();
        setInterval(function() {
            typing_color();
        }, 20)
    }, 20)
}, 20)
