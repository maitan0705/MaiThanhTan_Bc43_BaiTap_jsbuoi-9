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
    return this
  }
}
nhanVien.prototype.xepLoai = function (){

}