function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

var get_num = getRandomInt(1, 100);

while (true) {
    var num = prompt('你来猜？请输入1-100之间的数字');
    if (num > get_num) {
        alert('猜大了');
    } else if (num < get_num) {
        alert('猜小了');
    } else if (num == get_num) {
        alert('恭喜你猜对了');
        break;
    }
}
