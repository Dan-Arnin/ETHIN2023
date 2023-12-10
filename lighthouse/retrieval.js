// const lighthouse = require('@lighthouse-web3/sdk');

// const apiKey = '2badd02d.621b89ce2e384b4d870b7a0ef92950b6';
// const cid = 'Qmeab78nzkmdPg5aaas96YRGhd3nHtLi9JDffUHzbi1rq1'; // Replace with your CID

// async function downloadFile() {
//   try {
//     const downloadResponse = await lighthouse.download(cid, apiKey);
//     console.log(downloadResponse);
//   } catch (error) {
//     console.error(error);
//   }
// }

// downloadFile();

const fs = require('fs');
const fetch = require('node-fetch');

const cid = 'Qmeab78nzkmdPg5aaas96YRGhd3nHtLi9JDffUHzbi1rq1'; // Replace with your CID

async function downloadFile() {
  try {
    const response = await fetch('https://gateway.lighthouse.storage/ipfs/${cid}');
    if (!response.ok) {
      throw new Error('Error downloading file from IPFS');
    }

    const fileStream = fs.createWriteStream('downloaded_file'); // Replace with your desired file path
    response.body.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log('File downloaded successfully');
    });

  } catch (error) {
    console.error(error);
  }
}

downloadFile();