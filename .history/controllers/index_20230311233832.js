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
  
    const template = `<thead >
    <tr>
      <th class="nowrap">
        <span class="mr-1">${m.taiKhoan}</span>
      </th>
      <th>${m.yourname}</th>
      <th>${m.email}</th>
      <th>${m.workday}</th>
      <th>${m.position}</th>									
      <th>${m.luongChucVu()}</th>
      <th>${m.xepLoai()}</th>
      <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none;"  data-toggle="modal"
      data-target="#myModal"></button></th>
      <th>
      <button class="btn btn-danger btnRemov"} >Xoá</button>
      </th>
    </tr>
    </thead>`;
    tableDanhSach.insertAdjacentHTML("afterend", template);
  
}