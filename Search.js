const searchMessage_hello = "Hello, how can I help you today?";

const typingText = document.getElementById("typingText");

let index_hello = 0;


function typing_hello(){
    if (index_hello < searchMessage_hello.length){
        let letter = searchMessage_hello.charAt(index_hello);
        typingText.innerHTML += letter;
        index_hello++;
        console.log(index_hello);
    }
}

setInterval(typing_hello, 20)