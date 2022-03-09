var inputs = document.forms['login'].getElementsByTagName('input');
  		var run_onchange = false;
  		function valid(){
   			var errors = false;
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
	    			//Check password có đủ độ dài bảo mật
	     			if(id == 'password'){
	      				if(value.length <6){span.innerHTML ='Mật khẩu phải có ít nhất 6 chữ cái!';}
	      				var pass =value;
	     			}
	    		}
	    		//Nếu có lỗi, hãy chạy onchange, gửi trả về false, tô sáng đường viền
	    		if(span.innerHTML != ''){
	     			inputs[i].parentNode.appendChild(span);
	     			errors = true;
	     			run_onchange = true;
	     			inputs[i].style.border = '1px solid #ff1a1a';
	     			inputs[i].style.background = '#fffcf9';
	    		}
   			}// Kết thúc
  
   			if(errors == false) {
   				alert('Bạn đã đăng nhập thành công!!');
   				window.location.href = "./trangchu.html";
   			}
   			return !errors;
  		}

  		// Chạy validate form
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

   		}// Kết thúc vòng for
