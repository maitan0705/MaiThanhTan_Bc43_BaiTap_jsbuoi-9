const tableDanhSach = document.querySelector("#tableDanhSach");
let mangNhanVien = [];
document.querySelector("#btnThemNV").onclick = function (){
  let nv = new nhanVien();
  nv.account = document.querySelector('#tknv').value;
  nv.yourName = document.querySelector('#name').value;
  nv.email = document.querySelector('#email').value;
  nv.password = document.querySelector('#password').value;
  nv.datawork = document.querySelector('#datepicker').value;
  nv.salary = +document.querySelector('#luongCB').value;
  nv.position = document.querySelector('#chucvu').value;
  nv.timework = +document.querySelector('#gioLam').value;
  nv.luongChucVu();
  nv.xepLoai();
  mangNhanVien.push(nv);
  renderNhanVien(mangNhanVien);
}

function renderTableSinhVien(arrSinhVien) {
  //input là mangSinhVien = [{maSinhVien:1,tenSinhVien:'A'},{maSinhVien:2,tenSinhVien:'B'},{}]
  var htmlString = "";
  for (var index = 0; index < arrSinhVien.length; index++) {
    var sv = arrSinhVien[index];
    htmlString += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xoá</button>
                </td>

            </tr>
        `;
  }