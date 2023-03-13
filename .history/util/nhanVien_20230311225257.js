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
    return this.s
  }
}
nhanVien.prototype.xepLoai = function (){

}