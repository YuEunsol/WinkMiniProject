
const searchMessage_hello = "Hello, how can I help you today?";
let height_hello_min = 0;
let height_hello_max = 2000;
const searchMessage_discover = "Discover the new Off-White collection for Boys and Girls";
let height_discover_min = 2000;
let height_discover_max = 4000;
const searchMessage_instant = "The instant classic";
let height_instant_min = 600;
let height_instant_max = 900;
const searchMessage_shop = "Shop Fall Winter 21 Collection";
let height_shop_min = 900;
let height_shop_max = 1200;
const searchMessage_arrivals = "New Arrivals in Women's Collection";
let height_arrivals_min = 1200;
let height_arrivals_max = 1500;
const searchMessage_click = "Click here to go back to top of the page.";
let height_click_min = 1500;
let height_click_max = 1800;
const searchMessage_hover = "Search Off-White";
let height_hover_min = 0;
let height_hover_max = 0;

const typingText = document.getElementById("typingText");

function scrollCheck(typing_target,reset_target, height_target_min, height_target_max) {
    window.addEventListener('scroll',function (){
        if(height_target_min <= window.scrollY && window.scrollY < height_target_max){

            setInterval(typing_target(), 10);
        }else {
            reset_target();
        }
    })
}

scrollCheck(typing_hello, reset_hello, height_hello_min, height_hello_max);
scrollCheck(typing_discover, reset_discover, height_discover_min, height_discover_max);
// scrollCheck(typing_instant, reset_instant, height_instant_min, height_instant_max);
// scrollCheck(typing_shop, reset_shop, height_shop_min, height_shop_max);
// scrollCheck(typing_arrivals, reset_arrivals, height_arrivals_min, height_arrivals_max);
// scrollCheck(typing_click, reset_hover, height_click_min, height_click_max);
//


let index_hello = 0;
let index_discover = 0;
let index_instant = 0;
let index_shop = 0;
let index_arrivals = 0;
let index_click = 0;
let index_hover = 0;





// function typing(message){
//     if (index < message.length){
//         let letter = message.charAt(index);
//         typingText.innerHTML += letter;
//         index++;
//     }
// }
// setInterval(typing(searchMessage_hello), 20)


function typing_hello(){
    if (index_hello < searchMessage_hello.length){
        let letter = searchMessage_hello.charAt(index_hello);
        typingText.innerHTML += letter;
        index_hello++;
        console.log(index_hello);
    }
}
function reset_hello() {
    if(index_hello > 0) {
        typingText.innerHTML = "";
        index_hello =0;
    }
}
// setInterval(typing_hello, 20)

function typing_discover(){
    if (index_discover < searchMessage_discover.length){
        let letter = searchMessage_discover.charAt(index_discover);
        typingText.innerHTML += letter;
        index_discover++;
    }
}
function reset_discover() {
    if(index_discover > 0) {
        typingText.innerHTML = "";
        index_discover = 0;
    }
}
// setInterval(typing_discover, 20)

function typing_instant(){
    if (index_instant < searchMessage_instant.length){
        let letter = searchMessage_instant.charAt(index_instant);
        typingText.innerHTML += letter;
        index_instant++;
    }
}
function reset_instant() {
    typingText.innerHTML = "";
    index_instant =0;
}
// setInterval(typing_instant, 20)

function typing_shop(){
    if (index_shop < searchMessage_shop.length){
        let letter = searchMessage_shop.charAt(index_shop);
        typingText.innerHTML += letter;
        index_shop++;
    }
}
function reset_shop() {
    typingText.innerHTML = "";
    index_shop =0;
}
// setInterval(typing_shop, 20)

function typing_arrivals(){
    if (index_arrivals < searchMessage_arrivals.length){
        let letter = searchMessage_arrivals.charAt(index_arrivals);
        typingText.innerHTML += letter;
        index_arrivals++;
    }
}
function reset_arrivals() {
    typingText.innerHTML = "";
    index_arrivals =0;
}
// setInterval(typing_arrivals, 20)

function typing_click(){
    if (index_click < searchMessage_click.length){
        let letter = searchMessage_click.charAt(index_click);
        typingText.innerHTML += letter;
        index_click++;
    }
}
function reset_click() {
    typingText.innerHTML = "";
    index_click =0;
}
// setInterval(typing_click, 20)

function typing_hover(){
    if (index_hover < searchMessage_hover.length){
        let letter = searchMessage_hover.charAt(index_hover);
        typingText.innerHTML += letter;
        index_hover++;
    }
}
function reset_hover() {
    typingText.innerHTML = "";
    index_hover =0;
}
// setInterval(typing_hover, 20)