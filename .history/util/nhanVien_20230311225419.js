function nhanVien() {
  this.account = " ";
  this.yourName= " ";
  this.email = " ";
  this.password = " ";
  this.datawork = " ";
  this.salary = " ";
  this.position = " ";
  this.timework = " ";
}

nhanVien.prototype.luongChucVu =function (){
  if( this.position === "Sếp"){
    return this.salary * 3
  }else if (this.position === "Trưởng phòng"){
    return this.salary * 2
  }else{
    return this.salary
  }
}
nhanVien.prototype.xepLoai = function (){
  if ( >= 192) {
    xepLoai = "Nhân viên xuất sắc";
  } else if (gioLam >= 176) {
    xepLoai = "Nhân viên giỏi";
  } else if (gioLam >= 160) {
    xepLoai = "Nhân viên khá";
  } else {
    xepLoai = "Nhân viên trung bình";
  }
}