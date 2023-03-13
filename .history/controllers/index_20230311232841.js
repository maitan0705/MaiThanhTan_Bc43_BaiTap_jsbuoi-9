const tableDanhSach = document.querySelector("#tableDanhSach");
let mangNhanVien = [];
document.querySelector("#btnThemNV").onclick = function (){
  let nv = new nhanVien();
  nv.account = document.querySelector('#').value;
  nv.yourName = document.querySelector('#name').value;
  nv.email = document.querySelector('#email').value;
  nv.password = document.querySelector('#password').value;
  nv.datawork = document.querySelector('#datepicker').value;
  nv.salary = document.querySelector('#luongCB').value;
  nv.position = document.querySelector('#chucvu').value;
  nv.timework = document.querySelector('#gioLam').value;
  nv.luongChucVu();
  nv.xepLoai();
  mangNhanVien.push(sv);
  renderNhanVien(mangNhanVien);
}

function renderNhanVien(item){
  
    const template = `<thead >
    <tr>
      <th class="nowrap">
        <span class="mr-1">${item.taiKhoan}</span>
      </th>
      <th>${item.yourname}</th>
      <th>${item.email}</th>
      <th>${item.workday}</th>
      <th>${item.position}</th>									
      <th>${item.luongChucVu()}</th>
      <th>${item.xepLoai()}</th>
      <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none; " data-id =${item.id}  data-toggle="modal"
      data-target="#myModal"></button></th>
      <th>
      <button class="btn btn-danger btnRemov" data-id =${item.id} >Xoá</button>
      </th>
    </tr>
    </thead>`;
    tableDanhSach.insertAdjacentHTML("afterend", template);
  
}