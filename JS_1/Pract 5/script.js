const secondsInMinute = 60;
const secondsInHour = secondsInMinute * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;

alert(`Секунд в часе: ${secondsInHour}`);
alert(`Секунд в сутках: ${secondsInDay}`);
alert(`Секунд в месяце (30 дней): ${secondsInMonth}`);

//var hour, minute, second;
const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();   
alert(`Час: ${hour}, Минута: ${minute}, Секунда: ${second}`);

let x = 25;
x = x ** 2;
alert(x);