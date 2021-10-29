function CountDown(inputTime, inputWorkTime) {
    let now_time = +new Date(); //当前时间距离Unix时间戳1970.1.1的总毫秒数，js在某个数据类型前使用‘+’，这个操作目的是为了将该数据类型转换为Number类型，如果转换失败，则返回NaN;
    let input_time = +new Date(inputTime);
    let times = (input_time - now_time) / 1000;

    let d = parseInt(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d; //如果不足10天，则加零
    let h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    let m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    return '距离下班还有' + ' ' + d + '天' + h + '时' + m + '分' + s + '秒';
}

function CountUp(inputWorkTime) {
    let now_time = +new Date(); //当前时间距离Unix时间戳1970.1.1的总毫秒数
    let input_work_time = +new Date(inputWorkTime);
    let work_times = (now_time - input_work_time) / 1000;

    let d = parseInt(work_times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d; //如果不足10天，则加零
    let h = parseInt(work_times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    let m = parseInt(work_times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let s = parseInt(work_times % 60);
    s = s < 10 ? '0' + s : s;
    return '已经摸鱼了' + ' ' + d + '天' + h + '时' + m + '分' + s + '秒';
}

console.log(CountDown('2021-9-7 17:30:00'));
console.log(CountUp('2021-9-7 09:00:00'));
let date = new Date();
console.log(date);