
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


// document.querySelector(".one").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 1
// })

// document.querySelector(".two").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 2
// })

// document.querySelector(".three").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 3
// })

// document.querySelector(".four").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 4
// })

// document.querySelector(".five").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 5
// })

// document.querySelector(".six").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 6
// })

// document.querySelector(".seven").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 7
// })

// document.querySelector(".eight").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 8
// })

// document.querySelector(".nine").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 9
// })

// document.querySelector(".zero").addEventListener('click', function(){
//     document.querySelector(".calcWindow").innerText += 0
// })

document.querySelector(".clearButton").addEventListener('click', function(){
    document.querySelector(".calcWindow").innerText = ""
})

document.querySelector(".divideButton").addEventListener('click', function(){
    document.querySelector(".calcWindow").innerText += "/"
})

document.querySelector(".multiplyButton").addEventListener('click', function(){
    document.querySelector(".calcWindow").innerText += "*"
})

document.querySelector(".minusButton").addEventListener('click', function(){
    document.querySelector(".calcWindow").innerText += "-"
})
document.querySelector(".decimalButton").addEventListener('click', function(){
    document.querySelector(".calcWindow").innerText += "."
})

document.querySelector(".equalButton").addEventListener('click', function(){
    document.querySelector(".calcWindow").innerText = eval(document.querySelector(".calcWindow").innerText)
})

document.querySelector(".addButton").addEventListener('click', function(){
    document.querySelector(".calcWindow").innerText += "+"
})