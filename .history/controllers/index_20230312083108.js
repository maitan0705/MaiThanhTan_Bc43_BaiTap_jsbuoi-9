const tableDanhSach = document.querySelector("#tableDanhSach");
let mangNhanVien = [];
document.querySelector("#btnThemNV").onclick = function () {
  let nv = new nhanVien();
  nv.account = document.querySelector("#tknv").value;
  nv.yourName = document.querySelector("#name").value;
  nv.email = document.querySelector("#email").value;
  nv.password = document.querySelector("#password").value;
  nv.datawork = document.querySelector("#datepicker").value;
  nv.salary = +document.querySelector("#luongCB").value;
  nv.position = document.querySelector("#chucvu").value;
  nv.timework = +document.querySelector("#gioLam").value;
  nv.luongChucVu();
  nv.xepLoai();
  mangNhanVien.push(nv);
  renderNhanVien(mangNhanVien);
  luulocalStorage(mangNhanVien);
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
      <button class="btn btn-danger btnRemov"} >Xoá</button>
      </th>
    </tr>
    </thead>`;
  }
  tableDanhSach.insertAdjacentHTML("afterend", template);
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
    console.log(mang);
    for (var i = 0; i < mang.length; i++) {
      var nv = new NhanVien();
      console.log(nv);
      nv.account = mang[i].account;
      nv.name = mang[i].name;
      nv.email = mang[i].email;
      nv.password = mang[i].password;
      nv.dateOfWork = mang[i].dateOfWork;
      nv.salary = mang[i].salary;
      nv.competence = mang[i].competence;
      nv.timeWork = mang[i].timeWork;
      nv.coefficientssalary = mang[i].coefficientssalary;
      mangNhanVien.push(nv);
    }

    //Gọi hàm tạo giao diện từ mảng
    renderNhanVien(mangNhanVien);
  }
}
laylocalStorage();
