//task1
function polindrom(cumle) {
    cumle = cumle.toLowerCase().replace(/[\W_]/g, "");
    let soz = cumle.split('').reverse().join('');
    if (soz == cumle) {
        console.log("polindromdur");
    } else {
        console.log("sehv!");
    }
}
polindrom("Madam")



//task2
function setr(soz) {
    soz = soz.toLowerCase().replace(/[\W_]/g, "");
    let say = soz.length;
    if (say > 10 && say < 20) {
        console.log(true);
    } else {
        console.log(false);
    }

}
setr("lerik ryedd     d ")




//task3
function edediorta(eded) {
    let cem = 0
    for (let i = 0; i < eded.length; i++) {
        cem += eded[i];
    }
    return cem / eded.length;
}
ededler = [1, 5, 6]
let orta = edediorta(ededler);
console.log(orta);
