const tableDanhSach = document.querySelector("#tableDanhSach");
let mangNhanVien = [];
document.querySelector("#btnThemNV").onclick = function () {
  let nv = new NhanVien();
  nv.account = document.querySelector("#tknv").value;
  nv.yourName = document.querySelector("#name").value;
  nv.email = document.querySelector("#email").value;
  nv.password = document.querySelector("#password").value;
  nv.datawork = document.querySelector("#datepicker").value;
  nv.salary = +document.querySelector("#luongCB").value;
  nv.position = document.querySelector("#chucvu").value;
  nv.timework = +document.querySelector("#gioLam").value;

  mangNhanVien.push(nv);
  renderNhanVien(mangNhanVien);
  luulocalStorage(mangNhanVien);
};

function renderNhanVien(array) {
  var template = "";
  for (var index = 0; index < array.length; index++) {
    var nv = new NhanVien();
    nv = array[index];
    template += `<thead >
    <tr>
      <th class="nowrap">
        <span class="mr-1">${nv.account}</span>
      </th>
      <th>${nv.yourName}</th>
      <th>${nv.email}</th>
      <th>${nv.datawork}</th>
      <th>${nv.position}</th>									
      <th>${nv.luongChucVu()}</th>
      <th>${nv.xepLoai()}</th>
      <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none;"  data-toggle="modal"
      data-target="#myModal"></button></th>
      <th>
      <button class="btn btn-danger" onclick="xoaSinhVienTheoMa('${
        nv.account
      }')">Xoá</button>
      </th>
    </tr>
    </thead>`;
  }
  document.querySelector("tbody").innerHTML = template;
  return template;
}
function xoaSinhVienTheoMa(maSVClick) {
  // alert(maSVClick);
  var indexDel = -1;
  for (var index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].account === maSVClick) {
      indexDel = index;
      break;
    }
  }
  //Xoá đi sinh viên tại vị trí đó trong mảng
  mangNhanVien.splice(indexDel, 1);
  //Tạo lại bảng table Sinh Viên
  renderNhanVien(mangNhanVien);
}

// lưu thông tin
function luulocalStorage(mangNhanVien) {
  var stringMangNhanVien = JSON.stringify(mangNhanVien);
  localStorage.setItem("mangNhanVien", stringMangNhanVien);
}
// lấy thông tin
function laylocalStorage() {
  if (localStorage.getItem("mangNhanVien")) {
    var stringMangNhanVien = localStorage.getItem("mangNhanVien");

    //Chuyển dữ string liệu về dạng object
    var mang = JSON.parse(stringMangNhanVien);
    mangNhanVien = Object
    renderNhanVien(mangNhanVien);
  }
}
laylocalStorage();
