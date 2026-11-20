
function tinhNamAm() {
    let nam = Number(document.getElementById("nam").value);

    let can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu",
               "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];

    let chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ",
               "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

    let canIndex = (nam + 6) % 10;
    let chiIndex = (nam + 4) % 12;

    let namAm = can[canIndex] + " " + chi[chiIndex];

    document.getElementById("ketQua").innerHTML =
        "Năm âm lịch là: " + namAm;
}
