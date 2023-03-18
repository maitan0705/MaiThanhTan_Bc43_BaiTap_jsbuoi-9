function Validation() {
  // /
    
  this.chechName = function (value, idError, name) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (value.trim() === "") {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    } else if (regexLetter.test(value)) {
      document.getElementById(idError).innerHTML = "";
      value.classList.add("success");
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Chỉ Nhập Ký Tự`;
    value.classList.add("error");
    return false;
  };

  this.checkEmail = function (value, idError, name) {
    var regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (regexEmail.test(value)) {
      document.getElementById(
        idError
      ).innerHTML = `<i class="fa fa-check align-items-center"></i>`;

      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Sai Định Dạng `;
    value.classList.add("error");
    return false;
  };

  this.checkNumber = function (value, idError, name, min, max) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
      if (Number(value) < min || Number(value) > max) {
        document.getElementById(
          idError
        ).innerHTML = `${name} : ${min} - ${max}`;
        return false;
      }
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Phải Là Số`;
    return false;
  };

  this.checkLength = function (value, idError, name, min, max) {
    if (value.length < min || value.length > max) {
      document.getElementById(
        idError
      ).innerHTML = `${name} Từ ${min} Đến ${max} Ký Tự`;
      return false;
    }
    document.getElementById(idError).innerHTML = "";
    return true;
  };
  this.checkPassword = function (value, idError, name) {
    var regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{5,9}$/;
    if (regexPassword.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(
      idError
    ).innerHTML = `${name} Phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt ,độ dài từ 6 đến 10 ký tự`;
    return false;
  };
  this.chucVu = function (value, idError) {
    if (value == "0") {
      document.getElementById(idError).innerHTML = `Vui Lòng Chọn Chức Vụ`;
      return false;
    }
    document.getElementById(idError).innerHTML = "";
    return true;
  };
}
