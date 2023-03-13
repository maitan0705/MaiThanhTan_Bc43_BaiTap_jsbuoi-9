let mangNhanVien = [];
document.querySelector("#btnThemNV").onclick = function (){
  let nv = new nhanVien();
  nv.account = document.querySelector('#').value;
  nv.yourName = document.querySelector('#').value;
  nv.email = document.querySelector('#').value;
  nv.password = document.querySelector('#').value;
  nv.datawork = document.querySelector('#').value;
  nv.salary = document.querySelector('#').value;
  nv.position = document.querySelector('#').value;
  nv.timework = document.querySelector('#').value;
  nv.luongChucVu();
  nv.xepLoai();
  mangNhanVien.push(sv);
  renderNhanVien(mangNhanVien);
}

function renderNhanVien(arra){
  
    const template = `<thead >
    <tr>
      <th class="nowrap">
        <span class="mr-1">${item.taiKhoan}</span>
      </th>
      <th>${item.yourname}</th>
      <th>${item.email}</th>
      <th>${item.workday}</th>
      <th>${item.positions}</th>									
      <th>${item.tongLuong}</th>
      <th>${item.xepLoai}</th>
      <th><button class="fa fa-pencil btnEdit btn btn-success" style="pointer-event:none; " data-id =${item.id}  data-toggle="modal"
      data-target="#myModal"></button></th>
      <th>
      <button class="btn btn-danger btnRemov" data-id =${item.id} >Xoá</button>
      </th>
    </tr>
    </thead>`;
    tableDanhSach.insertAdjacentHTML("afterend", template);
  
}