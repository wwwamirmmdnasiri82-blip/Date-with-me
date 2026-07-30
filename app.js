* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-x: hidden;
  position: relative;
}

/* قلب‌های شناور */
.heart {
  position: fixed;
  font-size: 20px;
  color: rgba(255, 182, 193, 0.7);
  animation: floatHeart 8s linear infinite;
  pointer-events: none;
  z-index: 1;
  user-select: none;
}

@keyframes floatHeart {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

.container {
  width: 100%;
  max-width: 480px;
  position: relative;
  z-index: 10;
}

.page {
  display: none;
  background: rgba(255, 255, 255, 0.97);
  border-radius: 28px;
  padding: 45px 30px;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: fadeInUp 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  backdrop-filter: blur(8px);
}

.page.active {
  display: block;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* انیمیشن خروج صفحه (اختیاری برای JS) */
.page.fade-out {
  animation: fadeOut 0.35s ease forwards;
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(-20px) scale(0.96);
  }
}

h1 {
  color: #5a3d8a;
  margin-bottom: 12px;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.3;
}

p {
  color: #666;
  margin-bottom: 28px;
  font-size: 16px;
  line-height: 1.5;
}

/* افکت تایپ */
.typing {
  border-right: 2px solid #764ba2;
  white-space: nowrap;
  overflow: hidden;
  animation: blinkCursor 0.75s step-end infinite;
}

@keyframes blinkCursor {
  50% { border-color: transparent; }
}

/* ورودی‌ها */
input[type="text"],
input[type="date"],
input[type="time"] {
  width: 100%;
  padding: 16px 18px;
  border: 2px solid #e0d4f5;
  border-radius: 16px;
  font-size: 16px;
  margin-bottom: 16px;
  text-align: center;
  outline: none;
  transition: all 0.3s ease;
  background: #faf8ff;
  color: #333;
}

input:focus {
  border-color: #764ba2;
  box-shadow: 0 0 0 4px rgba(118, 75, 162, 0.15);
  background: white;
}

input::placeholder {
  color: #b0a0c8;
}

/* دکمه‌ها */
button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 15px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.35);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.45);
}

button:active {
  transform: translateY(-1px);
}

.btn-group {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 10px;
}

/* دکمه بله */
.btn-yes {
  background: linear-gradient(135deg, #ff6b9d, #c44569);
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.4);
}

.btn-yes:hover {
  box-shadow: 0 8px 22px rgba(255, 107, 157, 0.5);
}

/* دکمه نه (فراری) */
.btn-no {
  background: linear-gradient(135deg, #95a5a6, #7f8c8d);
  box-shadow: 0 4px 12px rgba(127, 140, 141, 0.3);
  position: relative;
  transition: all 0.25s ease;
}

.btn-no:hover {
  transform: none;
}

/* گزینه‌های غذا */
.food-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}

.food-options button {
  width: 100%;
  margin: 0;
  padding: 16px;
  font-size: 17px;
}

/* جعبه لینک */
.link-box {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
  align-items: center;
}

.link-box input {
  flex: 1;
  margin-bottom: 0;
  font-size: 13px;
  padding: 14px;
  text-align: left;
  direction: ltr;
}

.link-box button {
  margin: 0;
  padding: 14px 18px;
  white-space: nowrap;
}

/* راهنما */
.hint {
  color: #764ba2;
  font-size: 14px;
  margin-top: 12px;
  opacity: 0.9;
}

/* صفحه جمع‌بندی */
.summary-box {
  background: linear-gradient(135deg, #f8f4ff, #f0e6ff);
  border-radius: 18px;
  padding: 22px;
  margin: 20px 0;
  text-align: right;
  direction: rtl;
  border: 1px solid #e0d4f5;
}

.summary-box p {
  margin: 10px 0;
  color: #444;
  font-size: 15px;
}

.summary-box strong {
  color: #5a3d8a;
}

/* برای صفحه view */
.admin-list {
  max-height: 400px;
  overflow-y: auto;
  margin-top: 20px;
  text-align: right;
  direction: rtl;
}

.admin-item {
  background: #faf8ff;
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid #e8dff5;
  font-size: 14px;
  line-height: 1.6;
}

.admin-item strong {
  color: #5a3d8a;
}

/* موبایل */
@media (max-width: 480px) {
  .page {
    padding: 35px 22px;
    border-radius: 24px;
  }

  h1 {
    font-size: 22px;
  }

  button {
    padding: 14px 26px;
    font-size: 15px;
  }

  .btn-group {
    gap: 12px;
  }
}
