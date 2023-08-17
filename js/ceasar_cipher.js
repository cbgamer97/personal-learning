function rot13(str) {

    // Create an array of the alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Create an array of the alphabet shifted by 13
    const shiftedAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('');

    // Create an empty array to hold the decoded string
    let decoded = [];

    // Loop through the string to be decoded
    for (let i = 0; i < str.length; i++) {

        // If the character is not a letter, push it to the decoded array
        if (alphabet.indexOf(str[i]) === -1) {
            decoded.push(str[i]);
        } else {

            // Find the index of the character in the alphabet array
            const index = alphabet.indexOf(str[i]);

            // Push the corresponding character from the shifted alphabet array to the decoded array
            decoded.push(shiftedAlphabet[index]);
        }
    }

    // Join the decoded array into a string
    decoded = decoded.join('');

    // Return the decoded string
    return decoded;
}

rot13("SERR PBQR PNZC");