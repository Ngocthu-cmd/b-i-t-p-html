
function tinhLai() {
    let tienVay = Number(document.getElementById("tienVay").value);
    let laiSuat = Number(document.getElementById("laiSuat").value);
    let soNam = Number(document.getElementById("soNam").value);

    let tienLai = tienVay * laiSuat / 100 * soNam;
    let tongTien = tienVay + tienLai;

    document.getElementById("ketQua").innerHTML =
        "Tiền lãi phải trả: " + tienLai.toLocaleString("vi-VN") + " đồng<br>" +
        "Tổng tiền phải trả: " + tongTien.toLocaleString("vi-VN") + " đồng";
}
