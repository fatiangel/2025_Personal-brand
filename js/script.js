// --- 導覽列連結自動高亮 ---
// 這個腳本會在使用者瀏覽到對應頁面時，自動幫導覽列的連結加上高亮樣式
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    // 檢查連結的 href 是否與當前頁面的 URL 完全相符
    if (link.href === window.location.href) {
      link.classList.add("active");
    } else {
      // 確保其他非當前頁面的連結沒有 active class
      link.classList.remove("active");
    }
  });
});
