    document.addEventListener("DOMContentLoaded", function () {
        updateUserInfo();
    });

    function updateUserInfo() {
        // Thêm tài khoản admin khi trang được tải
        const adminEmail = "Kietadmin@gmail.com";
        const adminPassword = "Kietadmin2009";
        localStorage.setItem(adminEmail, adminPassword);
    }

    // Cập nhật hàm login để kiểm tra tài khoản admin
    function login() {
        let gmail = document.getElementById("loginGmail").value;
        let password = document.getElementById("loginPassword").value;

        if (gmail === "Kietadmin@gmail.com" && password === "Kietadmin2009") {
            alert("Đăng nhập thành công với tài khoản admin");
            // Chuyển hướng sang trang admin.html
            window.location.href = "admin.html";
            return false;
        }

        let savedPassword = localStorage.getItem(gmail);

        if (savedPassword && savedPassword === password) {
            alert("Đăng nhập thành công");
            localStorage.setItem("loggedInUser", gmail);
            window.location.href = "index.html";
            return false;
        } else {
            document.getElementById("loginMessage").innerText = "Sai mật khẩu hoặc gmail";
            return false;
        }
    }

    function signin() {
        window.location.href = "dangki.html";
    }
    
    function resetPassword() {
    let gmail = document.getElementById("forgotPasswordGmail").value;
    let verificationCode = document.getElementById("forgotPasswordCode").value;
    let newPassword = document.getElementById("forgotPasswordNewPassword").value;
    
    let savedPassword = localStorage.getItem(gmail);
    
    if (!savedPassword) {
    document.getElementById("forgotPasswordMessage").innerText = "Sai Gmail.";
    return false;
    }
    
    let verifyCodeRegex = /^[a-zA-Z0-9]{4,8}$/;
    if (!verifyCodeRegex.test(verificationCode)) {
    document.getElementById("forgotPasswordMessage").innerText = "Sai mã dự phòng";
    return false;
    }
    
    // Kiểm tra điều kiện mật khẩu
    if (newPassword.length < 6 || newPassword.length > 16) {
    document.getElementById("forgotPasswordMessage").innerText = "Mật khẩu phải từ 6 đến 16 kí tự";
    return false; // prevent form submission
    }
    
    let lowerCase = /[a-z]/;
    let upperCase = /[A-Z]/;
    let numeric = /[0-9]/;
    let specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    
    let typesCount = 0;
    if (lowerCase.test(newPassword)) typesCount++;
    if (upperCase.test(newPassword)) typesCount++;
    if (numeric.test(newPassword)) typesCount++;
    if (specialChar.test(newPassword)) typesCount++;
    
    if (typesCount < 3) {
    document.getElementById("forgotPasswordMessage").innerText = "Mật khẩu cần phải có ít nhất 3 trong các điều kiện là chữ thường, só, chữ hoa, kí tự đặc biệt";
    return false;
    }
    
    
    let storedVerificationCode = localStorage.getItem(gmail + "_verificationCode");
    if (verificationCode !== storedVerificationCode) {
    document.getElementById("forgotPasswordMessage").innerText = "Incorrect verification code.";
    return false;
    }
    
    localStorage.setItem(gmail, newPassword);
    localStorage.removeItem(gmail + "_verificationCode");
    
    alert("Mật khẩu thay đổi thành công");
    return false;
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
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("forgotPasswordForm").style.display = "block";
    }
    
    function togglePassword(inputId) {
        const passwordInput = document.getElementById(inputId);
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    }
    
    function goToLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("forgotPasswordForm").style.display = "none";
    }