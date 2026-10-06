'use strict';

var STUDENT_NUMBER_PATTERN;
var EMAIL_PATTERN;

var WORKSHOP_FEES = {
  'Web Development': 500,
  'UI/UX Design': 400,
  'Cybersecurity': 600
}

function calculateFinalFee(workshop, studentType){
    let baseFee = 0;

    if (student == "Web Development"){
        baseFee += 500;
    } else if (student == "UI/UX Design"){
        baseFee += 400;
    } else if (student == "Cybersecurity"){
        baseFee += 600;
    } else {
        return 0;
    }

    let discount = 0;
    if (student == "Scholar"){
        discount = basefee * 0.20;
    }
    return baseFee - discount;

}