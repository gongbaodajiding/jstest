var year = prompt('请输入要查询的年份')
if (year && parseInt(year)) {
    year = parseInt(year)
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        alert(year + '年是闰年')
    }
    else {
        alert(year + '年不是闰年')
    }
}
else {
    alert('请输入正确的年份')
}