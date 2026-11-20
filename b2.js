
function kiemTra() {
    let nam = Number(document.getElementById("nam").value);

    if (nam % 400 == 0) {
        document.getElementById("ketQua").innerHTML = "Đây là năm nhuận";
    }
    else if (nam % 4 == 0 && nam % 100 != 0) {
        document.getElementById("ketQua").innerHTML = "Đây là năm nhuận";
    }
    else {
        document.getElementById("ketQua").innerHTML = "Đây không phải năm nhuận";
    }
}
