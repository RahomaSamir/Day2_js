function validateInput() {
    let name;
    while (true) {
        name = prompt("Enter your name:");
        if (/^[a-zA-Z\s]+$/.test(name)) {
            break; // Valid name
        }
        alert("Invalid: Name must contain only letters.");
    }

    let phoneNumber;
    while (true) {
        phoneNumber = prompt("Enter your phoneNumber must 8 digit :");
        if (/^\d{8}$/.test(phoneNumber)) {
            break; // Valid phone number
        }
        alert("Invalid: Phone number must be 8 digits.");
    }

    let mobileNumber;
    while (true) {
        mobileNumber = prompt("Enter your mobile number:");
        if (/^(010|011|012)\d{8}$/.test(mobileNumber)) {
            break; // Valid mobile number
        }
        alert("Invalid: Mobile number must start with 010, 011, or 012 and be 11 digits.");
    }

    let email;
    while (true) {
        email = prompt("Enter your email:");
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            break; // Valid email
        }
        alert("Invalid: Email format must include @ and a valid domain.");
    }

    let choiceColor;
    const colors = ["red", "green", "blue"];
    while (true) {
        choiceColor = prompt("Choose a color for text: red, green, or blue:");
        if (colors.includes(choiceColor.toLowerCase())) {
            break; // Valid color
        }
        alert("Invalid choice: Please select red, green, or blue.");
    }

    // Display user information
    console.log(
        `%cWelcome, ${name}!`,
        `color: ${choiceColor.toLowerCase()}`
    );

    document.write(`<h2>Welcome, dear guest ${name}</h2>`);
    document.write(`<p>Your telephone number is <b>${phoneNumber}</b></p>`);
    document.write(`<p>Your mobile number is <b>${mobileNumber}</b></p>`);
    document.write(`<p>Your email address is <b>${email}</b></p>`);
    document.write(`<br>`);
    document.write(`<p>Today is <b>${new Date().getDate()}</b></p>`);
    document.write(`<p>We are in month <b>${new Date().getMonth() + 1}</b></p>`);
}

// Call the function
validateInput();
