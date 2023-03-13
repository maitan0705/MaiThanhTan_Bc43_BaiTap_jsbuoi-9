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


  var valid = true;
    
    valid = check.checkEmty(nv.tknv,'error-required-tknv','Tài Khoản')&check.checkEmty(nv.name,'error-required-name','Tên Nhân Viên')&check.checkEmty(nv.email,'error-required-email','Email')&check.checkEmty(nv.password,'error-required-password','Mật Khẩu')&check.checkEmty(nv.luongCB,'error-required-luongCB','Lương Cơ Bản')&check.checkEmty(nv.gioLam,'error-required-gioLam','Giờ Làm');
    valid = valid & check.checkLetter(nv.name,'error-AllLetter-name','Tên Nhân Viên');
    valid = valid & check.checkemail(nv.email,'error-email','Email');
    valid = valid & check.checkLength(nv.tknv,'error-tknv','Tài Khoản',4,6);
    valid = valid & check.checkPassword(nv.password,'error-password','Mật Khẩu',6,10);
    valid = valid & check.checkNumber(nv.luongCB,'error-luongCB','Lương Cơ Bản',1000000,20000000);
    valid = valid & check.checkRole(nv.heSoLuong,'error-chucVu');
    valid = valid & check.checkNumber(nv.gioLam,'error-gioLam','Giờ Làm',80,200);



    if(!valid){
        return ;
    }

  luulocalStorage();
  renderNhanVien(mangNhanVien);
};


// chỉnh sửa nhân viên
function fixNhanVien(accountNV) {
  document.getElementById("tknv").disabled = true;
  document.getElementById("btnThemNV").disabled = true;
  for (var index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].account === accountNV) {
      //in thông tin sinh viên tìm thấy lên giao diện
      document.getElementById("tknv").value = mangNhanVien[index].account;
      document.getElementById("yourName").value = mangNhanVien[index].yourName;
      document.getElementById("email").value = mangNhanVien[index].email;
      document.getElementById("password").value = mangNhanVien[index].password;
      document.getElementById("datepicker").value =
        mangNhanVien[index].dateOfWork;
      document.getElementById("luongCB").value = mangNhanVien[index].salary;
      document.getElementById("chucvu").value = mangNhanVien[index].competence;
      document.getElementById("gioLam").value = mangNhanVien[index].timeWork;
      break;
    }
  }
  let isValid = validate();
  if (!isValid) {
    return;
  }
}
document.getElementById("btnCapNhat").onclick = function () {
  var nhanVienEdit = new NhanVien();

  nhanVienEdit.account = document.getElementById("tknv").value;
  nhanVienEdit.name = document.getElementById("name").value;
  nhanVienEdit.email = document.getElementById("email").value;
  nhanVienEdit.password = document.getElementById("password").value;
  nhanVienEdit.dateOfWork = document.getElementById("datepicker").value;
  nhanVienEdit.salary = +document.getElementById("luongCB").value;
  nhanVienEdit.timeWork = +document.getElementById("gioLam").value;
  for (var index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].account === nhanVienEdit.account) {
      mangNhanVien[index].yourName = nhanVienEdit.yourName;
      mangNhanVien[index].email = nhanVienEdit.email;
      mangNhanVien[index].password = nhanVienEdit.password;
      mangNhanVien[index].datawork = nhanVienEdit.datawork;
      mangNhanVien[index].salary = nhanVienEdit.salary;
      mangNhanVien[index].position = nhanVienEdit.position;
      mangNhanVien[index].timework = nhanVienEdit.timework;
      break;
    }
  }

  renderTableThemNhanVien(mangNhanVien);
  luuLocalStrage();
  document.getElementById("tknv").disabled = false;
  document.getElementById("btnThemNV").disabled = false;
};



function renderNhanVien(array) {
  var template = "";
  for (var index = 0; index < array.length; index++) {
    var nv = array[index];
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
function xoaSinhVienTheoMa(accountNV) {
  // alert(maSVClick);
  var indexDel = -1;
  for (var index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].account === accountNV) {
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
function luulocalStorage() {
  var stringMangNhanVien = JSON.stringify(mangNhanVien);
  localStorage.setItem("mangNhanVien", stringMangNhanVien);
}
// lấy thông tin
function laylocalStorage() {
  if (localStorage.getItem("mangNhanVien")) {
    var stringMangNhanVien = localStorage.getItem("mangNhanVien");

    //Chuyển dữ string liệu về dạng object
    var mang = JSON.parse(stringMangNhanVien);
    console.log(mang);
    for (var i = 0; i < mang.length; i++) {
      var nv = new NhanVien();
      console.log(nv);
      nv.account = mang[i].account;
      nv.yourName = mang[i].yourName;
      nv.email = mang[i].email;
      nv.password = mang[i].password;
      nv.datawork = mang[i].datawork;
      nv.salary = mang[i].salary;
      nv.position = mang[i].position;
      nv.timework = mang[i].timework;
      mangNhanVien.push(nv);
    }
  
    //Gọi hàm tạo giao diện từ mảng
    renderNhanVien(mangNhanVien);
  }
}
laylocalStorage();