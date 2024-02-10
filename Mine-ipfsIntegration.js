const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
require('dotenv').config()

async function uploadToIPFS() { // filepath is a string
    try {
        // let data = new FormData()
        
        // filePath = "./assets/Real.jpg"
        // data.append('file', fs.createReadStream(filePath))
        // data.append('pinataOptions', '{"cidVersion": 0}')
        // data.append('pinataMetadata', '{"name": "pdf1"}')
        // console.log(69)
        // const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', data, {
        //     headers: {
        //         'Authorization': `Bearer ${process.env.PINATA_JWT}`
        //     }
        // })
        // console.log(69)
        // let x = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`
        // let y = res.data.Timestamp
        // let z = ((x, y))
        // let arr = [];
        // arr.push(x);
        // arr.push(y);
        // console.log(arr);
        // // arr.push(z);
        // return (arr);

    } catch (error) {
        console.log(error)
    }
}

async function retrieveFromIPFS(ipfsHash) {
    ipfsHash = "QmSMEUsk5ZUEdFGW7D5VEqJUSEyAeDNU8eCBu6WVUxPCb8"
    try {
        const url = 'https://gateway.pinata.cloud/ipfs/' + ipfsHash;
        console.log(url)
        return url
    } catch (error) {
        console.error('Error retrieving file from IPFS: ', error);
        throw error;
    }
}

uploadToIPFS("./assets/Real.jpg")

// retrieveFromIPFS('QmZcT8tX7PztuCjRaHDW1mbGNqaMEAjYApqibzfQy15LLi')

module.exports = { uploadToIPFS, retrieveFromIPFS };
