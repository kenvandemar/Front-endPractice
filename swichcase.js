switch (new Date().getDay()) {
    case 0:
        greeting = "I don't move on Sunday";
        break;
    case 1:
        greeting = "Moday: Go to Work";
        break;
    case 2:
        greeting = "Tuesday: chillout with family";
        break;
    case 3:
        greeting = "Wednesday: Focus on learning";
        break;
    case 4:
        greeting = "Thursday: Analyze the outcome";
        break;
    case 5:
        greeting = "Friday: Last day of work";
        break;
    case 6:
        greeting = "Saturday: Party night";
        break;
    default:
        greeting = "What are you doing with me?";
        break;
}

document.getElementById("test").innerHTML = greeting;