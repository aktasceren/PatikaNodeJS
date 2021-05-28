function circleArea(radius) {
    area = Math.PI * Math.pow(radius,2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
}

function circleCircumference(radius) {
    circumference = Math.PI * radius * 2;
    console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${circumference}`);
}

module.exports = {
    circleArea,
    circleCircumference
}