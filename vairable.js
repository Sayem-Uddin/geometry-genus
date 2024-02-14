
// triangle area------------

function triangleCalculation() {
    const base = getInputValueById('triangle-base')
    const height = getInputValueById('triangle-height')

    const area = 0.5*base*height
    const show = setTheArea('triangle-area',area)
    console.log(area)

}

// rectangle area--------------
function rectangleAreaCalculation(){
    const width = getInputValueById('rectangle-width')
    const height = getInputValueById('rectangle-height')
    const area = areaCalculation(width,height)
    const show = setTheArea('rectangle-area',area)
    console.log(area)
    

}


function getInputValueById(input){
    const getinput = document.getElementById(input)
    const getinputText = getinput.value ;
    const inputValue = parseFloat(getinputText)
    return(inputValue)
}

function areaCalculation(a,b){

    const areaCalculation = a*b;
    return(areaCalculation)

}
function setTheArea (elementId,ans){
    const element = document.getElementById(elementId)
    element.innerText = ans;
}
