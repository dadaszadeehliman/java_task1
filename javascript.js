//polindrom olub olmadigini yoxamaq 
function polindrom(cumle) {
    cumle = cumle.toLowerCase().replace(/[\W_]/g, "");
    let soz=cumle.split('').reverse().join('');
    if(soz==cumle){
        console.log("polindromdur");
    }else{
        console.log("sehv!");
    }
}
polindrom("Madam")
//sivollarin sayi 10-20 arasidrisa tru taski
function setr(soz) {
    soz=soz.toLowerCase();
    let say=soz.split("").reverse().join("")
    console.log(soz);
    
}
setr("lerik ryedd")

