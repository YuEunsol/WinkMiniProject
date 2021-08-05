const searchMessage_hello = "Hello, how can I help you today?";
const searchMessage_discover = "Discover the new Off-White collection for Boys and Girls";
const searchMessage_instant = "The instant classic";
const searchMessage_shop = "Shop Fall Winter 21 Collection";
const searchMessage_arrivals = "New Arrivals in Women's Collection";
const searchMessage_click = "Click here to go back to top of the page.";
const searchMessage_hover = "Search Off-White";

const typingText = document.getElementById("typingText");

function scrollCheck(height_now, message, height_target) {
    window.addEventListener('scroll',function (){
        let scroll_now = window.scrollY;
        if( scroll_now )
    })
}



let index = 0;

// function typing(message){
//     if (index < message.length){
//         let letter = message.charAt(index);
//         typingText.innerHTML += letter;
//         index++;
//     }
// }
// setInterval(typing(searchMessage_hello), 20)

// function typing(){
//     if (index < searchMessage_hello.length){
//         let letter = searchMessage_hello.charAt(index);
//         typingText.innerHTML += letter;
//         index++;
//     }
//     console.log(index)
// }
// setInterval(typing, 20)
// console.log(typingText)
