function generateCaptcha() {
  var captcha = Math.random().toString(36).substr(2, 6).toUpperCase(); 
  document.getElementById("captcha").textContent = captcha; 
}
document.addEventListener("DOMContentLoaded", function(event) {
  generateCaptcha(); 
});
document.querySelector("form").addEventListener("submit", function(event) {
  var enteredCaptcha = document.getElementById("captchaInput").value.toUpperCase();
  var actualCaptcha = document.getElementById("captcha").textContent;
  if (enteredCaptcha !== actualCaptcha) {
    alert("Invalid CAPTCHA! Please try again.");
    event.preventDefault(); 
  }
});
