const arguments = process.argv.slice(2);

function area(radius){    
    area = Math.PI * Math.pow(radius,2);
    // console.log(`Area is ${area.toFixed(2)} where radius equal to ${radius}`);
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
}

area(arguments[0] *1);