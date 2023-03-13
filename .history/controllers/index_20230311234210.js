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
        <span class="mr-1">${sv.taiKhoan}</span>
      </th>
      <th>${sv.yourname}</th>
      <th>${sv.email}</th>
      <th>${sv.workday}</th>
      <th>${sv.position}</th>									
      <th>${sv.luongChucVu()}</th>
      <th>${sv.xepLoai()}</th>
      <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none;"  data-toggle="modal"
      data-target="#myModal"></button></th>
      <th>
      <button class="btn btn-danger btnRemov"} >Xoá</button>
      </th>
    </tr>
    </thead>`;
   
  } 
}
