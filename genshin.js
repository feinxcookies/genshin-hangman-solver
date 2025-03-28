const genshindb = require('genshin-db');
const fs = require('node:fs');
fs.writeFile('mytext.txt', "", {}, err => {});
// console.log(genshindb.talents('names', {matchCategories:true, verboseCategories: true}).map(e => [e.combat1.name.replace("Normal Attack: ",""), e.combat2.name, e.combat3.name, e.passive1.name, e.passive2.name].join("\n")))
// console.log( genshindb.geographies('names', {matchCategories:true, verboseCategories: true}).map(e => [e.name, e.areaName].join("\n")))


queries = [genshindb.characters('names', { matchCategories: true }),
    genshindb.talents('names', {matchCategories:true, verboseCategories: true}).map(e => 
        [e.combat1.name.replace("Normal Attack: ",""), e.combat2.name, e.combat3.name, e.passive1.name, e.passive2.name].join("\n")),
        genshindb.constellations('names', {matchCategories: true, verboseCategories: true}).map(e => [e.c1.name, e.c2.name,e.c3.name,e.c4.name,e.c5.name,e.c6.name,].join("\n")),
    genshindb.weapons('names', {matchCategories: true}),
    genshindb.materials('names', {matchCategories: true}),
    genshindb.artifacts('names', {matchCategories: true}),
    genshindb.foods('names', {matchCategories: true}),
    genshindb.domains('names', {matchCategories: true}),
    genshindb.enemies('names', {matchCategories: true}),
    genshindb.outfits('names', {matchCategories: true}),
    genshindb.windgliders('names', {matchCategories: true}),
    genshindb.animals('names', {matchCategories: true}),
    genshindb.namecards('names', {matchCategories: true}),
    genshindb.geographies('names', {matchCategories:true, verboseCategories: true}).map(e => [e.name, e.areaName].join("\n")),
    genshindb.elements('names', {matchCategories: true}),
]




for (i in queries) {
    //console.log(queries[i].join('\n'));
    if (queries[i] != undefined) {
        fs.writeFile('mytext.txt',queries[i].join('\n') + '\n' , { flag: 'a' }, err => {});
    }
}