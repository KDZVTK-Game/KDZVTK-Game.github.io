document.addEventListener("DOMContentLoaded", function() {
    displayAccountList();
});

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "dangnhap.html";
}

function createAccount() {
    let newGmail = document.getElementById("newGmail").value;
    let newPassword = document.getElementById("newPassword").value;
    let verificationCode = document.getElementById("verificationCode").value;

    // Kiểm tra xem tài khoản đã tồn tại chưa
    if (localStorage.getItem(newGmail)) {
        alert("Tài khoản đã tồn tại");
        return false;
    }

    // Kiểm tra mã dự phòng
    let storedVerificationCode = localStorage.getItem(newGmail + "_verificationCode");
    if (verificationCode !== storedVerificationCode) {
        alert("Sai mã dự phòng");
        return false;
    }

    // Lưu tài khoản mới vào localStorage
    localStorage.setItem(newGmail, newPassword);

    // Hiển thị lại danh sách tài khoản
    displayAccountList();

    alert("Tạo mới tài khoản thành công");
    return false;
}

function displayAccountList() {
    let accountList = document.getElementById("accountList");
    accountList.innerHTML = ""; // Xóa danh sách hiện tại

    // Lấy danh sách tất cả tài khoản từ localStorage
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key !== "loggedInUser" && !key.endsWith("_verificationCode")) {
            let row = accountList.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            cell1.textContent = key;
            cell2.textContent = localStorage.getItem(key);
            cell3.textContent = localStorage.getItem(key + "_verificationCode") || "N/A";
            cell4.innerHTML = `<button onclick="changePassword('${key}')">Đổi mật khẩu</button>
                               <button onclick="changeVerificationCode('${key}')">Đổi mã dự phòng</button>`;
        }
    }
}

function changeVerificationCode(gmail) {
    let newVerificationCode = prompt(`Nhập mã dự phòng mới cho tài khoản ${gmail}`);
    if (newVerificationCode !== null) {
        localStorage.setItem(gmail + "_verificationCode", newVerificationCode);
        alert("Thay đổi mã dự phòng thành công");
        displayAccountList();
    }
}

function changePassword(gmail) {
    let newPassword = prompt(`Nhập mật khẩu mới cho tài khoản ${gmail}`);
    if (newPassword !== null) {
        localStorage.setItem(gmail, newPassword);
        alert("Thay đổi mật khẩu thành công");
        displayAccountList();
    }
}

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
