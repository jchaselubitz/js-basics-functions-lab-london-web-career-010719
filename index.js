// Code your solution in this file!


function distanceFromHqInBlocks(blocks) {
    let answer
    answer = blocks - 42
    answer = Math.abs(answer)
    return answer
}

function distanceFromHqInFeet(blocks) {
    let answer
    answer = distanceFromHqInBlocks(blocks) * 264
    return answer
}

function distanceTravelledInFeet(start, end) {
    let answer
    answer = Math.abs(start - end)
    answer = answer * 264
    return answer
}

// function calculatesFarePrice(start, destination) {
//     let answer 
//     let distance
//     let unit
//     distance = distanceTravelledInFeet(start, destination)
//     switch (distance){
//         case < 400:
//             answer = 0
//             break;
//         case > 400 && < 2000:
//             unit = 0.02
//             answer = distance * unit
//             break;
//         case > 2000 && < 2500:
//             answer = 25
//             break;
//         case > 2500
//             answer = "cannot travel that far";
//             break;
//     }
//    return answer
// }


function calculatesFarePrice(start, destination) {
    let distance
    distance = distanceTravelledInFeet(start, destination)
    let answer 
    if (distance < 400) {
        answer = 0
    } else if (distance > 400 && distance < 2000) {
        answer = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        answer = 25
    } else {
        answer = "cannot travel that far";
    }
   return answer
}


