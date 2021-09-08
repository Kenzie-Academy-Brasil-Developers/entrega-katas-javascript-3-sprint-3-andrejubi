const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (results) {
    let body = document.querySelector('body')

    let newDiv = document.createElement("div")

    newDiv.innerText = results

    body.appendChild(newDiv)

}

function kata1() {
    let numbersSequencial = [] 

    for (let sequence = 1; sequence <= 25; sequence++){
        numbersSequencial.push(sequence)
    }

    showResults(numbersSequencial)

    return numbersSequencial

    }

kata1()


function kata2() {
    let numbersRegresive = []

    for (let regresive = 25; regresive >= 1; regresive--){
        numbersRegresive.push(regresive)
    }

    showResults(numbersRegresive)

    return numbersRegresive

}

kata2()

function kata3() {
    let negativeRegresive = []

    for (let negative = -1; negative >= -25; negative--){
        negativeRegresive.push(negative)
    }
    
    showResults(negativeRegresive)

    return negativeRegresive
}

kata3()

function kata4() {
    let negativeSequence = []

    for (let nSequence = -25; nSequence <= -1; nSequence++){
        negativeSequence.push(nSequence)
    }

    showResults(negativeSequence)

    return negativeSequence
}

kata4()

function kata5() {
    let oddSequence = []

    for (odd = -25; odd <= 25; odd+= 2){
        oddSequence.push(odd)
    }

    showResults(oddSequence)

    return oddSequence
}

kata5()

function kata6() {
    let tripleSequence = []

    for (triple = 3; triple <= 99; triple += 3){
        tripleSequence.push(triple)
    }

    showResults(tripleSequence)

    return tripleSequence
}

kata6()

function kata7() {
    let seventhSequence = []

    for (seventh = 7; seventh <= 98; seventh += 7){
        seventhSequence.push(seventh)
    }

    showResults(seventhSequence)

    return seventhSequence
}

kata7()

function kata8() {
    let tripleAndSeventh = []

    for (hundred = 100; hundred >= 1; hundred--){
        if (hundred%3==0){
            tripleAndSeventh.push(hundred)
        }
        else if (hundred%7==0){
            tripleAndSeventh.push(hundred)
        }

    }

    showResults(tripleAndSeventh)

    return tripleAndSeventh
}

kata8()

function kata9() {
    let fifthOdd = []

    for (fifth = 5; fifth <=100; fifth += 10){
        fifthOdd.push(fifth)
    }

    showResults(fifthOdd)

    return fifthOdd
}

kata9()

function kata10() {
    
    showResults(sampleArray)

    return sampleArray
}

kata10()

function kata11() {
    let pairSampleArray = []

    for (pair = 0; pair <= 20; pair++){
        if (sampleArray[pair]%2==0){
            pairSampleArray.push(sampleArray[pair])    
        }        
    }

    showResults(pairSampleArray)

    return pairSampleArray
}

kata11()

function kata12() {
    let oddSampleArray = []

    for (odd = 0; odd <= 20; odd++){
        if (sampleArray[odd]%2 !== 0){
            oddSampleArray.push(sampleArray[odd])
        }
    }

    showResults(oddSampleArray)

    return oddSampleArray
}

kata12()

function kata13() {
    let eighthSampleArray = []

    for (eighth = 0; eighth <= 20; eighth++){
        if (sampleArray[eighth]%8 == 0){
            eighthSampleArray.push(sampleArray[eighth])
        }
    }

    showResults(eighthSampleArray)

    return eighthSampleArray
}

kata13()

function kata14() {
    let squareSampleArray = []

    for (square = 0; square <= 19; square++){
        let resultsSampleArray = sampleArray[square] * sampleArray[square]
        squareSampleArray.push(resultsSampleArray)
    }

    showResults(squareSampleArray)

    return squareSampleArray
}

kata14()

function kata15() {
    let sum = 0

    for (numbers = 1;numbers <= 20; numbers++){
        sum += numbers
        }

        showResults(sum)

        return sum
}

kata15()

function kata16() {
    let sumSampleArray = 0

    for (sample = 0; sample <= 19; sample++){
        sumSampleArray += sampleArray[sample]
    }

    showResults(sumSampleArray)

    return sumSampleArray
}

kata16()

function kata17() {
    let smallerSampleArray = 1000

    for (smaller = 0; smaller <= 19; smaller++){
        if (smallerSampleArray > sampleArray[smaller]){
            smallerSampleArray = sampleArray[smaller]
        }
    }

    showResults(smallerSampleArray)

    return smallerSampleArray
}

kata17()

function kata18() {
    let biggerSampleArray = 0

    for (bigger = 0; bigger <= 19; bigger++){
        if (biggerSampleArray < sampleArray[bigger]){
            biggerSampleArray = sampleArray[bigger]
        }
    }

    showResults(biggerSampleArray)

    return biggerSampleArray
}

kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
