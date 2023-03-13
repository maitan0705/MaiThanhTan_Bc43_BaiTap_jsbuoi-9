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