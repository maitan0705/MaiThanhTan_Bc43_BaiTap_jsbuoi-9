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
  if (timework >= 192) {
     = "Nhân viên xuất sắc";
  } else if (timework >= 176) {
     = "Nhân viên giỏi";
  } else if (timework >= 160) {
     = "Nhân viên khá";
  } else {
     = "Nhân viên trung bình";
  }
}