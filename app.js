let number = prompt('Nhap vao chuoi so');
let str = number.toString();
let result = [];

result.push(str[0]);
for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
        result.push('-');
        result.push(str[i+1]);
    }else {
        result.push(str[i+1]);;
    }
}

alert(result.join(""));

