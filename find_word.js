const fs = require('node:fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

data = fs.readFileSync('merge.txt', 'utf8');
data2 = fs.readFileSync('master.txt', 'utf8')
list = []
list = data2.split('\n')
// list = data2
// console.log(typeof data)
// var regex1 = new RegExp("\\wydro");
// console.log(regex1)
// my = list.filter(word => word.replaceAll(" ","").match(regex1))
// console.log(my)
run();
function run () {
    rl.question('enter text:', query => {
        rl.question('enter incorrect:', inc => {
            var letters = new Set(query.match(/[a-z]/gi));
            res = inc.match(/[a-z]/gi)
            exclude = [...letters].join("") + (res != null ? res.join("") : "");
            console.log(exclude);
            var regex = new RegExp("^" + query.replaceAll("_", `\\s*(?![${exclude}])\\w\\s*`).replaceAll(/[\s᲼᲼᲼]/g, '') + "$", "gi")
            console.log(regex);
                var results =  new Set(list.filter(word => word.replaceAll(/\W/gi, "").match(regex)))
            console.log(results)
            if (results.size==1) {
                console.log(`/guess guess:${results.values().next().value}`)
            }
            run();
        }) 
    })
}