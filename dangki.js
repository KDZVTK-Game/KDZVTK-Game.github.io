    document.addEventListener("DOMContentLoaded", function() {
        updateUserInfo();
    });
    
    
    function register() {
        let gmail = document.getElementById("registerGmail").value;
        let verifyCode = document.getElementById("verifyCode").value;
        let password = document.getElementById("registerPassword").value;
        
        let verifyCodeRegex = /^[a-zA-Z0-9]{4,8}$/;
        if (!verifyCodeRegex.test(verifyCode)) {
        document.getElementById("registerMessage").innerText = "Mã dự phòng cần ít nhất từ 4 số trở lên và 8 số trở xuống";
        return false; // prevent form submission
        }
        
        // Kiểm tra độ dài mật khẩu
        if (password.length < 6 || password.length > 16) {
        document.getElementById("registerMessage").innerText = "Mật khẩu phải từ 6 đến 16 kí tự";
        return false; // prevent form submission
        }
        
        // Kiểm tra yêu cầu ít nhất 3 trong 4 loại ký tự
        let lowerCase = /[a-z]/;
        let upperCase = /[A-Z]/;
        let numeric = /[0-9]/;
        let specialChar = /[!@#$%^&*(),.?":{}|<>]/;
        
        let typesCount = 0;
        if (lowerCase.test(password)) typesCount++;
        if (upperCase.test(password)) typesCount++;
        if (numeric.test(password)) typesCount++;
        if (specialChar.test(password)) typesCount++;
        
        if (typesCount < 3) {
        document.getElementById("registerMessage").innerText = "Mật khẩu cần phải có ít nhất 3 trong các điều kiện là chữ thường, só, chữ hoa, kí tự đặc biệt";
        return false; 
        }
        
        let savedPassword = localStorage.getItem(gmail);
        
        if (savedPassword) {
        document.getElementById("registerMessage").innerText = "Gmail already exists.";
        return false; 
        } else {
        localStorage.setItem(gmail, password);
        localStorage.setItem(gmail + "_verificationCode", verifyCode); 
        alert("Đăng kí thành công");
        window.location.href = "dangnhap.html";
        return false;
        }
    }

    function login() {
        window.location.href = "dangnhap.html";
    }
    
    function togglePassword(inputId) {
        const passwordInput = document.getElementById(inputId);
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    }
    
    (function () {
        var username = 'xxxx@gmail.com';
        var password = 'xxxx';
        var speed = 50;
        var i = 0;
        var j = 0;
        var flag = true;
    
        function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        }
    
        function typeUserName() {
        if (i < username.length) {
            document.querySelectorAll('input[type="email"]')[0].setAttribute("autocomplete", "off");
            document.querySelectorAll('input[type="email"]')[0].value += username.charAt(i);
            i++;
            setTimeout(typeUserName, speed);
        } else {
            var button = document.querySelectorAll("button");
    
            for (let i = 0; i < button.length; i++) {
            if (button[i].innerText == "Next") {
                button[i].click();
                console.log("tìm thấy button next");
                setTimeout(typePassword, 1500);
            }
            }
        }
        }
    
        function typePassword() {
        console.log("Bắt đầu đăng nhập password");
        if (flag) {
            if (i >= username.length) {
            j = 0;
            document.querySelectorAll('input[type="password"]')[0].value = "";
            flag = false;
            }
        }
    
        if (j < password.length) {
            document.querySelectorAll('input[type="password"]')[0].setAttribute("autocomplete", "off");
            document.querySelectorAll('input[type="password"]')[0].value += password.charAt(j);
            j++;
            setTimeout(typePassword, speed);
        } else {
            var button = document.querySelectorAll("button");
    
            for (let i = 0; i < button.length; i++) {
            if (button[i].innerText == "Next") {
                button[i].click();
                console.log("tìm thấy button next 2");
                sleep(1500);
            }
            }
        }
        }
    
        typeUserName();
    })();
    
    function showForgotPasswordForm() {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("forgotPasswordForm").style.display = "block";
    }
    
    function togglePassword(inputId) {
        const passwordInput = document.getElementById(inputId);
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    }
    
    function goToLoginForm() {
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("forgotPasswordForm").style.display = "none";
        }