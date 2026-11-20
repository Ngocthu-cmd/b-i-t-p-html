function tinhNgay() {
    let thang = Number(document.getElementById("thang").value);
    let soNgay;

    if (thang == 1 || thang == 3 || thang == 5 ||
        thang == 7 || thang == 8 || thang == 10 ||
        thang == 12) {
        soNgay = 31;
    }
    else if (thang == 4 || thang == 6 ||
             thang == 9 || thang == 11) {
        soNgay = 30;
    }
    else if (thang == 2) {
        document.getElementById("ketQua").innerHTML =
            "Tháng 2 có 28 hoặc 29 ngày";
        return;
    }
    else {
        document.getElementById("ketQua").innerHTML =
            "Tháng không hợp lệ";
        return;
    }

    document.getElementById("ketQua").innerHTML =
        "Tháng " + thang + " có " + soNgay + " ngày";
}
