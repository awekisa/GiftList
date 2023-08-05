const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  let name = process.argv[2];
  console.log("Input name:", name);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name
  });

  console.log({ gift });
}

main();