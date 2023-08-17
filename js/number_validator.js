function telephoneCheck(str) {

    // Create a regular expression to match the phone number
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    // Test the regular expression against the string
    return regex.test(str);

}

telephoneCheck("555-555-5555");