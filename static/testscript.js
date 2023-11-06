document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
  
    loginButton.addEventListener("click", function()  {
        // 페이지를 회원가입 화면으로 전환합니다. (예시: signup.html)
        window.location.href = "supervisor_dashboard.html";
    });
  });
  