const usernameNode = prompt("What is your name?");
const ageNode = prompt("What is your age?");
if (ageNode < 18) {
    document.getElementById("advice-text").innerHTML =
    "Sorry " + usernameNode + ", you are not old enough to get a proper advice from us";
    document.getElementById("advice-card").className = "box has-background-grey-light";

    document.getElementById("username").innerHTML = usernameNode;
    document.getElementById("age").innerHTML = ageNode;
}
else {
    const heightNode = prompt("What is your height? (in m, ie 1.96)");
    const weightNode = prompt("What is your weight? (in kg, ie 89.3)");
    
    document.getElementById("username").innerHTML = usernameNode;
    document.getElementById("age").innerHTML = ageNode;
    document.getElementById("height").innerHTML = heightNode;
    document.getElementById("weight").innerHTML = weightNode;  

    bmi = weightNode / (heightNode * heightNode);

    if (bmi < 18.5) {
        document.getElementById("advice-text").innerHTML =
        "Your BMI is: " + bmi + "<br/> You are under weight <br/> Start with a personal trainer";
        document.getElementById("advice-card").className = "box has-background-warning";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("advice-text").innerHTML =
        "Your BMI is: " + bmi + "<br/> You are normal weight <br/> Start with any programme";
        document.getElementById("advice-card").className = "box has-background-success";
    }
    else if (bmi >= 25 && bmi < 30) {
        document.getElementById("advice-text").innerHTML =
        "Your BMI is: " + bmi + "<br/> You are slightly over weight <br/> Start with cardio training";
        document.getElementById("advice-card").className = "box has-background-warning";
    }
    else {
        document.getElementById("advice-text").innerHTML =
        "Your BMI is: " + bmi + "<br/> You are obese <br/> Start with a personal trainer";
        document.getElementById("advice-card").className = "box has-background-danger";
    }
}