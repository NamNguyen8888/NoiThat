var inputs = document.forms['signup'].getElementsByTagName('input');
var run_onchange = false;
function valid(){
     var errors = false;
     var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
     for(var i=0; i<inputs.length; i++){
      var value = inputs[i].value;
      var id = inputs[i].getAttribute('id');   
      // Khởi tạo khoảng thời gian
      var span = document.createElement('span');
      // Nếu khoảng thời gian tồn tại thì hãy xóa
      var p = inputs[i].parentNode;
      if(p.lastChild.nodeName == 'SPAN') {p.removeChild(p.lastChild);}
         // Kiểm tra có để trống không
      if(value == ''){
           span.innerHTML ='Vui lòng điền vào trường này!';
      }else{
          // Kiểm tra vấn đề khác
           if(id == 'email'){
                if(reg_mail.test(value) == false){ span.innerHTML ='Email không hợp lệ!';}
                var email =value;
          }
       // Kiểm tra mật khẩu
       if(id == 'password'){
            if(value.length <6){span.innerHTML ='Mật khẩu phải có ít nhất 6 chữ cái!';}
            var pass =value;
       }
       // Kiểm tra mật khẩu có trùng với mật khẩu đã nhập
       if(id == 'confirm_pass' && value != pass){span.innerHTML ='Mật khẩu không khớp!';}
       // Kiểm tra số điện thoại
       if(id == 'phone' && isNaN(value) == true){span.innerHTML ='Số điện thoại không hợp lệ!';}
      }

      // Nếu có lỗi, hãy chạy onchange, gửi trả về false, tô sáng đường viền
      if(span.innerHTML != ''){
           inputs[i].parentNode.appendChild(span);
           errors = true;
           run_onchange = true;
           inputs[i].style.border = '1px solid #c6807b';
           inputs[i].style.background = '#fffcf9';
      }
     }// Kết thúc vòng for

     if(errors == false) {
         alert('Đăng ký thành công! Bây giờ đăng nhập vào trang của chúng tôi');
         window.location.href = "./dangnhap.html";
     }
     return !errors;
}// Kết thúc validate

// Chạy hàm kiểm tra validate
var register = document.getElementById('submit');
register.onclick = function(){
     return valid();
}

// Sự kiện thay đổi
 for(var i=0; i<inputs.length; i++){
  var id = inputs[i].getAttribute('id');
  inputs[i].onchange = function(){
       if(run_onchange == true){
            this.style.border = '1px solid #999';
            this.style.background = '#fff';
            valid();
       }
  }
 }