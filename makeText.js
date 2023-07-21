/** Command-line tool to generate Markov text. */

const {MarkovMachine} = require('./markov')
const fs = require('fs')
const axios = require('axios')


let [npath, fpath, option, input] = process.argv


const path = input;
if(option === 'url'){
    webCat(path, option)
} else {
    cat(path, option)
}


function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log('sorry, file not found', err.code)
            process.exit(1)
        }
        callMachine(data)
    })
}

async function webCat(path){
    const response = await axios.get(path)
        .catch(err => { console.log("oh no", err.code) })
    if(response){
        callMachine(response.data);
    }
}

function callMachine(data){
    const mm = new MarkovMachine(data)
    mm.makeText();
}


