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

function renderNhanVien(mangNhanVien){
        
  var htmlString = "";
  for (var index = 0; index < arrSinhVien.length; index++) {
    var sv = arrSinhVien[index];
    htmlString += `<thead >
    <tr>
      <th class="nowrap">
        <span class="mr-1">${mangNhanVien.taiKhoan}</span>
      </th>
      <th>${mangNhanVien.yourname}</th>
      <th>${mangNhanVien.email}</th>
      <th>${mangNhanVien.workday}</th>
      <th>${mangNhanVien.position}</th>									
      <th>${mangNhanVien.luongChucVu()}</th>
      <th>${mangNhanVien.xepLoai()}</th>
      <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none;"  data-toggle="modal"
      data-target="#myModal"></button></th>
      <th>
      <button class="btn btn-danger btnRemov"} >Xoá</button>
      </th>
    </tr>
    </thead>`;
   
  } 
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