export function set16ToRgb(str) {
    var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    if (!reg.test(str)) {
        return;
    }
    let newStr = str.toLowerCase().replace(/\#/g, '');
    let len = newStr.length;
    if (len == 3) {
        let t = '';
        for (var i = 0; i < len; i++) {
            t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1));
        }
        newStr = t;
    }
    let arr = []; //将字符串分隔，两个两个的分隔
    for (var i = 0; i < 6; i = i + 2) {
        let s = newStr.slice(i, i + 2);
        arr.push(parseInt("0x" + s));
    }
    return 'rgb(' + arr.join(",") + ')';
}

export function setRgbTo16(str) {
    let reg = /^(rgb|RGB)/;
    if (!reg.test(str)) {
        return;
    }
    var arr = str.slice(4, str.length - 1).split(",");
    let color = '#';
    for (var i = 0; i < arr.length; i++) {
        var t = Number(arr[i]).toString(16);
        if (t == "0") {
            //如果为“0”的话，需要补0操作,否则只有5位数
            t = t + "0";
        }
        color += t;
    }
    return color;
}