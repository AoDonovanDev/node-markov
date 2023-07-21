/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    const chains = {}
    const uniques = new Set(this.words)
    for(let word of uniques){
      chains[word] = [];
    }
    for(let i=0; i<this.words.length; i++){
      chains[this.words[i]].push(this.words[i+1])
    }
    return chains
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    const chains = this.makeChains()
    let str = ''
    let start = Math.floor(Math.random()*(this.words.length))
    let current = this.words[start]
    for(let i = 0; i < numWords; i++){
      if(current === undefined){
        return str
      }
      let ran = Math.floor(Math.random()*(chains[current].length))
      str += `${current} `;
      current = chains[current][ran]
    }
    return str
  }
}

module.exports = {
  MarkovMachine: MarkovMachine
}
