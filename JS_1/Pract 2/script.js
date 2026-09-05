var srt = 'Привет, Мир!';
alert(srt);

var srt1 = 'Привет, ';
var srt2 = 'Мир!';
alert(srt1 + srt2);

var name = 'Боря';
alert(`Привет, ${name}!`);
var age = 17;
alert(`Мне ${age} лет!`);

var name1 = prompt('Ваше имя: ');
alert(`Ваше имя, ${name1}!`);

var srt3 = 'abcde';
var srt_ch;
srt_ch = srt3[0];
alert(srt_ch);
srt_ch = srt3[2];
alert(srt_ch);
srt_ch = srt3[4];
alert(srt_ch);


// Начало
var num = 12345;
var product = 1;
var length = num.length;

for (var i = 0; i < length; i++) {
        var digit = parseInt(num[i], 10);
        product *= digit;
    }
alert(product);
// Конец