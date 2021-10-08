var arr = [5, 3, 85, 849, 3, 651, 64585, 1226, 3232, 55, 59, 63, 0];
for (var i = 0, len = arr.length; i < len - 1; i++) { // 外层循环指排了几次，每一次都是将最大的数挪至右边，是数组长度-1
    for (var j = 0; j < len - 1 - i; j++) { // 内层循环指交换了几次，次数每次递减，数组长度-1-i
        if (arr[j] > arr[j + 1]) { // 如果前边的数比后边的大，则交换两数
            var temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);