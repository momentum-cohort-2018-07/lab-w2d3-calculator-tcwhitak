
var numberButtons = document.querySelectorAll('.numberButtons')
//looping add event listener for each number button
for (var button of numberButtons){
    //add event listener for individual button
    button.addEventListener('click', function(e){
        //define button as the element that triggered the event
        var button = e.srcElement
        //push button text to display (calcWindow)
        document.querySelector(".calcWindow").innerText += button.innerText
}
    )
}

document.querySelector(".clearButton").addEventListener('click', function(){
    document.querySelector(".calcWindow").innerText = ""
})

document.querySelector(".equalButton").addEventListener('click', function(){
    document.querySelector(".calcWindow").innerText = eval(document.querySelector(".calcWindow").innerText)
})
