function asciiToBytes32(text) {
    // Convert ASCII text to hexadecimal string
    let hexString = '';
    for (let i = 0; i < text.length; i++) {
        const hexChar = text.charCodeAt(i).toString(16).padStart(2, '0');
        hexString += hexChar;
    }

    // Ensure the hexadecimal string is exactly 64 characters long
    if (hexString.length < 64) {
        hexString = hexString.padEnd(64, '0');
    } else if (hexString.length > 64) {
        hexString = hexString.slice(0, 64);
    }

    return '0x' + hexString;
}

// Example usage:
// const asciiText = "chbsakj";
// const bytes32Compatible = asciiToBytes32(asciiText);
// console.log(bytes32Compatible); // Output: "0x48656c6c6f2c20776f726c6421000000000000000000000000000000000000"
module.exports = {
    asciiToBytes32
}
