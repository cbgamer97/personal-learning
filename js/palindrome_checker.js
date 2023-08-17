function palindrome(str) {

    // Remove all non-alphanumeric characters
    var str = str.replace(/[^0-9a-z]/gi, '');

    // Convert to lowercase
    str = str.toLowerCase();

    // Reverse the string
    var reverseStr = str.split('').reverse().join('');

    // Compare the original string with the reversed string
    if (str == reverseStr) {
        return true;
    } else {
        return false;
    }

}

palindrome("eye");