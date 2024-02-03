document.addEventListener("DOMContentLoaded", function() {
  updateUserInfo();
});

function updateUserInfo() {
  var userInfoDiv = document.getElementById("user-info");

  var loggedInUser = localStorage.getItem("loggedInUser");

  if (isLoggedIn(loggedInUser)) {
      userInfoDiv.innerHTML = "Gmail: " + loggedInUser;
  } else {
      userInfoDiv.innerHTML = "Gmail: Không đăng nhập";
  }
}

function isLoggedIn(email) {
  return email && isValidGmail(email);
}

function isValidGmail(email) {
 
  return email.endsWith("@gmail.com") && !email.includes("x") && email !== "xxxxx@gmail.com";
}

function redirectToGame1() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "flappybird.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "flappybird.html";
  }
}

function redirectToGame2() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "chessai.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "chessai.html";
    }
}

function redirectToLoginPage() {
  window.location.href = "dangnhap.html";
}

function redirectToPage1() {
  window.location.href = "dangnhap.html";
}

function redirectToPage2() {
  window.location.href = "dangki.html";
}

function redirectToGame3() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "chess.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "chess.html";
  }
}

function redirectToGame4() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "tictactoeai.html";
  } else {
      alert("VHãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "tictactoeai.html";
  }
}

function redirectToGame5() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "tictactoe.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "tictactoe.html";
  }
}

function redirectToGame6() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "ransanmoi.html";
  } else {
      alert("Hãy đăng kí và đăng nhập để có trải nghiệm tốt nhất");
      window.location.href = "ransanmoi.html";
  }
}

function redirectToNhac() {
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (isLoggedIn(loggedInUser)) {
      window.location.href = "Phatnhac.html";
  } else {
      alert("Vui lòng đăng nhập để nghe nhạc.");
      redirectToLoginPage();
  }
}

var modal = document.getElementById("updateModal");

var updateButton = document.getElementById("updateButton");

var closeBtn = document.getElementsByClassName("close")[0];

updateButton.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeUpdatePopup() {
    modal.style.display = "none";
}
