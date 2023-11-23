let message = "";

const yearOfBirth = prompt("Enter your year of birth:");

const city = prompt("Enter the city you live in:");

const favoriteSport = prompt("Enter your favorite sport:");

const currentYear = new Date().getFullYear();
const age = currentYear - +yearOfBirth;

if (yearOfBirth != null) {
    message += "Your age is: " + age + "\n";
} else {
    message += "We wish you had entered your year of birth.\n";
};

if (city === "Kyiv" || city === "Washington" || city === "London") {
    message += "You live in the capital of ";
    switch (city) {
        case "Kyiv":
            message += "Ukraine.\n";
            break;
        case "Washington":
            message += "United States of America.\n";
            break;
        case "London":
            message += "United Kingdom.\n";
            break;
    }
} else if (city != "Kyiv" && city != "Washington" && city != "London" && city != null){
    message += "You live in the city of " + city + ".\n";
} else if (city === null) {
    message += "We wish you had entered your city.\n";
};

if (favoriteSport != null) {
    switch (favoriteSport.toLowerCase()) {
        case "football":
            message += "Cool! Do you want to become Lionel Messi?";
            break;
        case "basketball":
            message += "Cool! Do you want to become LeBron James?";
            break;
        case "boxing":
            message += "Cool! Do you want to become Oleksandr Usyk?";
            break;
    }
} else {
    message += "We wish you had entered your favorite sport.";
};



alert(message);

