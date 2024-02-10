function bytes32ToAscii(str) {
    // Step 1: Trim the '0x' prefix if it exists
    if (str.startsWith('0x')) {
        str = str.slice(2);
    }

    // Step 2 & 3: Convert each byte to ASCII
    let asciiStr = '';
    for (let i = 0; i < str.length; i += 2) {
        let byte = str.substr(i, 2);
        let asciiChar = String.fromCharCode(parseInt(byte, 16));
        asciiStr += asciiChar;
    }

    // Step 4: Trim null characters and return
    return asciiStr.replace(/\0/g, '');
}

// // Example usage
// const bytes32 = '0x5365780000000000000000000000000000000000000000000000000000000000';
// const asciiString = bytes32ToAscii(bytes32);
// console.log(asciiString); // Output: "MALE"

// export default bytes32ToAscii

module.exports = {
    bytes32ToAscii
}
