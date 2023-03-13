 NhanVien = {
  account: '',
  yourName: '',
  email: " ",
  password: " ",
  datawork: " ",
  salary: " ",
  position: " ",
  timework: " ",
  luongChucVu: function (){
    if( position=== "Sếp"){
      return salary * 3
    }else if (position === "Trưởng phòng"){
      return salary * 2
    }else{
      return salary
    }
  },
  xepLoai: function (){
    if (timework >= 192) {
      return  "Nhân viên xuất sắc";
    } else if (timework >= 176) {
      return  "Nhân viên giỏi";
    } else if (timework >= 160) {
      return  "Nhân viên khá";
    } else {
      return  "Nhân viên trung bình";
    }
  }
}

// NhanVien.prototype.luongChucVu =function (){
//   if( position === "Sếp"){
//     return salary * 3
//   }else if (this.position === "Trưởng phòng"){
//     return this.salary * 2
//   }else{
//     return this.salary
//   }
// }
// NhanVien.prototype.xepLoai = function (){
//   if (this.timework >= 192) {
//     return  "Nhân viên xuất sắc";
//   } else if (this.timework >= 176) {
//     return  "Nhân viên giỏi";
//   } else if (this.timework >= 160) {
//     return  "Nhân viên khá";
//   } else {
//     return  "Nhân viên trung bình";
//   }
// }
// console.log(NhanVien)