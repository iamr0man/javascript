let userName = prompt("Input your name"),
    userAge = +prompt("Input your age");


if(userName === "" && !isNaN(userAge)) {

    alert("You have one more attempt!");
    userName = prompt("Input your name");
    userAge = +prompt("Input your age");

    if(userAge < 18) {
        alert(`You are not allowed to visit this website. You have only ${userAge}`);
    }
    else if(userAge >= 18 && userAge <= 22) {
        if (confirm("Are you sure you want to continue?")) {
            alert(`Welcome, ${userName}`);
        } else {
            alert("You are not allowed to visit this website");
        }
    }
    else {
        alert(`Welcome, ${userName}`);
    }
} else {

    if(userAge < 18) {
        alert(`You are not allowed to visit this website. You have only ${userAge}`);
    }
    else if(userAge >= 18 && userAge <= 22) {
        if (confirm("Are you sure you want to continue?")) {
            alert(`Welcome, ${userName}`);
        } else {
            alert("You are not allowed to visit this website");
        }
    }
    else {
        alert(`Welcome, ${userName}`);
    }
}


