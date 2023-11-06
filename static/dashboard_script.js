// 서브메뉴 초기 숨김 상태
let submenuVisible = false;

// 방문통계 링크 클릭 시 서브메뉴 토글
const visitStatisticsLink = document.getElementById("visit-statistics");
const submenu = document.querySelector(".submenu");
visitStatisticsLink.addEventListener("click", function(e) {
    e.preventDefault(); // 링크 이동 방지
    submenuVisible = !submenuVisible; // 상태 토글
    submenu.style.display = submenuVisible ? "block" : "none";
});

document.addEventListener("DOMContentLoaded", function() {
  const dashboardLink = document.getElementById("dashboard");
  const dashboardContent = document.querySelector(".dashboard_content");
  const showAllStoreLink = document.getElementById("show_all_stores");
  const showAllContent = document.querySelector(".show_all_stores_content");

  showAllContent.style.display = "none";
  dashboardContent.style.display = "none";

  dashboardLink.addEventListener("click", function(event) {
      event.preventDefault(); // 링크가 새 페이지로 이동하는 것을 방지
      if (showAllContent.style.display === "block") {
        showAllContent.style.display = "none";
      }
      if (dashboardContent.style.display === "block") {
          dashboardContent.style.display = "none"; // 대시보드가 이미 표시되어 있으면 가려짐
      } else {
          dashboardContent.style.display = "block"; // 대시보드가 가려져 있으면 표시됨
      }
  });
  showAllStoreLink.addEventListener("click", function(event) {
    event.preventDefault(); // 링크가 새 페이지로 이동하는 것을 방지
    if (dashboardContent.style.display === "block") {
      dashboardContent.style.display = "none"; // 대시보드가 이미 표시되어 있으면 가려짐
    }
    if (showAllContent.style.display === "block") {
        showAllContent.style.display = "none";
    } else {
        showAllContent.style.display = "block";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const today = new Date();
  const oneWeekAgo = new Date(today);
  oneWeekAgo.setDate(today.getDate() - 7);

  const today_year = today.getFullYear();
  const today_month = String(today.getMonth() + 1).padStart(2, "0");
  const today_day = String(today.getDate()).padStart(2, "0");

  const oneWeekAgo_year = oneWeekAgo.getFullYear();
  const oneWeekAgo_month = String(oneWeekAgo.getMonth() + 1).padStart(2, "0");
  const oneWeekAgo_day = String(oneWeekAgo.getDate()).padStart(2, "0");

  const today_formattedDate = `${today_year}-${today_month}-${today_day}`;
  const oneWeekAgo_formattedDate = `${oneWeekAgo_year}-${oneWeekAgo_month}-${oneWeekAgo_day}`;

  const selectDateElement = document.getElementById("select_date");

  const flatpickrOptions = {
    mode: "range",
    defaultDate: [oneWeekAgo_formattedDate, today_formattedDate],
    dateFormat: "Y.m.d (D)",
    locale: {
      rangeSeparator: ' - ',
      weekdays: {
        shorthand: ['일', '월', '화', '수', '목', '금', '토'],
        longhand: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
      }
    },
  };
  
  flatpickr(selectDateElement, flatpickrOptions);
});




document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById("register-button");

  registerButton.addEventListener("click", function()  {
      // 페이지를 회원가입 화면으로 전환합니다. (예시: signup.html)
      window.location.href = "user_create.html";
  });
});
