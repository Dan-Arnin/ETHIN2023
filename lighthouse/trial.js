const lighthouse = require('@lighthouse-web3/sdk');

// const apiKey = '2badd02d.621b89ce2e384b4d870b7a0ef92950b6';

// async function uploadFile() {
//   try {
//     const uploadResponse = await lighthouse.upload('/Users/jvnk/downloads/wow.png', apiKey);
//     console.log(uploadResponse);
//   } catch (error) {
//     console.error(error);
//   }
// }

// uploadFile();

const API_KEY = '2badd02d.621b89ce2e384b4d870b7a0ef92950b6';
const pageNo = 1; // replace with your desired page number

fetch('https://api.lighthouse.storage/api/user/files_uploaded?pageNo=' + pageNo, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + API_KEY
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});
