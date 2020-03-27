import fetch from 'node-fetch';

const urlMarvelApi = 'https://gateway.marvel.com:443/v1/public/characters?ts=';
const timeStamp = 1;
const publicKey = 'ccde6ee06ea81f49fb5a4dff203d6a7f';
const privateKey = '5216b35c249f93752a21d864c29c78181dffe90d';
// REVIEW: CALCULATE HASH: TIMESTAMP+PRIVATE_KEY+PUBLIC_KEY -> md5
const myHash = '113fe23c77d6667149fd6429c17dd0ba';

export const getAllCharacter = async () => {
    return await fetch(
        `${urlMarvelApi}` +
            `${timeStamp}` +
            '&apikey=' +
            `${publicKey}` +
            '&hash=' +
            `${myHash}`
    )
        .then(res => {
            return res.json();
        })
        .catch(err => console.log('Error call Marvel backend - ' + err));
};
