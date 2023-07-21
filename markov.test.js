const {MarkovMachine} = require("./markov");
const fs = require('fs')



  describe("instantiate machine and make text", function () {
    test("text is chained correctly", function () {
        const path = 'eggs.txt'
        fs.readFile(path, 'utf8', (err, data) => {
            const testMachine = new MarkovMachine(data)
            const machineTxt = testMachine.makeText()
            const wrdcnt = machineTxt.split(/[ \r\n]+/);
            const chains = testMachine.makeChains()
            for(let i = 0; i < wrdcnt.length-2; i++){
            expect(chains[wrdcnt[i]]).toContain(wrdcnt[i+1]);
            }
        })
        
    })
})