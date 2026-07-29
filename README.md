<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Date With Me 💜</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <div id="page-name" class="page active">
      <h1>💜 یه چیزی هست که باید بگم...</h1>
      <p>اسمت رو بگو تا شروع کنیم</p>
      <input type="text" id="nameInput" placeholder="اسمت رو بنویس..." />
      <button onclick="goToQuestion()">بزن بریم 🚀</button>
    </div>

    <div id="page-question" class="page">
      <h1>دوست داری با من بیای بیرون؟ 💕</h1>
      <p>یه جواب صادقانه بده...</p>
      <div class="btn-group">
        <button class="btn-yes" onclick="answerYes()">آره! 💖</button>
        <button class="btn-no" id="noBtn" onmouseover="moveNo()" onclick="moveNo()">نه 😢</button>
      </div>
    </div>

    <div id="page-food" class="page">
      <h1>خوبه! حالا بگو چی دوست داری بخوریم؟ 🍕</h1>
      <p>یه گزینه انتخاب کن:</p>
      <div class="food-options">
        <button onclick="selectFood('پیتزا 🍕')">🍕 پیتزا</button>
        <button onclick="selectFood('برگر 🍔')">🍔 برگر</button>
        <button onclick="selectFood('پاستا 🍝')">🍝 پاستا</button>
        <button onclick="selectFood('سوشی 🍣')">🍣 سوشی</button>
        <button onclick="selectFood('کافه ☕')">☕ کافه</button>
      </div>
    </div>

    <div id="page-date" class="page">
      <h1>کِی وقت داری؟ 📅</h1>
      <p>یه تاریخ و ساعت انتخاب کن:</p>
      <input type="date" id="dateInput" />
      <input type="time" id="timeInput" />
      <button onclick="goToShare()">بعدی 💫</button>
    </div>

    <div id="page-share" class="page">
      <h1>آماده‌ای! 🎉</h1>
      <p>این لینک رو بفرست تا جوابتو ببینم:</p>
      <div class="link-box">
        <input type="text" id="shareLink" readonly />
        <button onclick="copyLink()">کپی 📋</button>
      </div>
      <p class="hint">💜 منتظر جوابت هستم...</p>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="app.js"></script>
</body>
</html>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, sans-serif;
}

body {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 500px;
  position: relative;
}

.page {
  display: none;
  background: white;
  border-radius: 30px;
  padding: 50px 30px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.5s ease;
}

.page.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

h1 {
  color: #5a3d8a;
  margin-bottom: 15px;
  font-size: 24px;
}

p {
  color: #666;
  margin-bottom: 25px;
  font-size: 16px;
}

input[type="text"], input[type="date"], input[type="time"] {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0d4f5;
  border-radius: 15px;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
  outline: none;
  transition: 0.3s;
}

input:focus {
  border-color: #764ba2;
}

button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  margin: 8px;
  transition: 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
}

.btn-group {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-yes {
  background: linear-gradient(135deg, #ff6b9d, #c06c84);
}

.btn-no {
  background: linear-gradient(135deg, #95a5a6, #7f8c8d);
  position: relative;
}

.food-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.food-options button {
  width: 100%;
}

.link-box {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.link-box input {
  flex: 1;
  margin-bottom: 0;
  font-size: 12px;
}

.hint {
  color: #764ba2;
  font-size: 14px;
  }
  const SUPABASE_URL = 'https://ekmgvnadzpbicleexpjb.supabase.co';
const SUPABASE_KEY = 'ztAjB1LzgNEN-9bDF8ynQ_xG-O3Mts';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ===== داده‌های موقت =====
let userData = {};

// ===== رفتن بین صفحات =====
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// ===== مرحله ۱: اسم =====
function goToQuestion() {
  const name = document.getElementById('nameInput').value.trim();
  if (!name) {
    alert('یه اسم بگو لطفاً! 😊');
    return;
  }
  userData.name = name;
  showPage('page-question');
}

// ===== مرحله ۲: سوال (دکمه نه فرار میکنه) =====
function moveNo() {
  const btn = document.getElementById('noBtn');
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);
  btn.style.position = 'fixed';
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
}

function answerYes() {
  showPage('page-food');
}

// ===== مرحله ۳: غذا =====
function selectFood(food) {
  userData.food = food;
  showPage('page-date');
}

// ===== مرحله ۴: تاریخ =====
function goToShare() {
  const date = document.getElementById('dateInput').value;
  const time = document.getElementById('timeInput').value;
  if (!date || !time) {
    alert('تاریخ و ساعت رو بگو! 😊');
    return;
  }
  userData.date = date;
  userData.time = time;
  saveToSupabase();
}

// ===== ذخیره در Supabase =====
async function saveToSupabase() {
  try {
    const linkId = Math.random().toString(36).substring(2, 12);
    const { data, error } = await supabase
      .from('submissions')
      .insert([{ 
        link_id: linkId, 
        name: userData.name,
        food: userData.food,
        date: userData.date,
        time: userData.time
      }]);

    if (error) throw error;

    const link = window.location.origin + '/view.html?id=' + linkId;
    document.getElementById('shareLink').value = link;
    showPage('page-share');
  } catch (err) {
    alert('یه مشکلی پیش اومد: ' + err.message);
  }
}

// ===== کپی لینک =====
function copyLink() {
  const link = document.getElementById('shareLink');
  link.select();
  document.execCommand('copy');
  alert('کپی شد! بفرستش 💜');
}
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>جوابش 💌</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <div id="content" class="page active">
      <h1>در حال بارگذاری...</h1>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script>
    const SUPABASE_URL = 'https://ekmgvnadzpbicleexpjb.supabase.co';
    const SUPABASE_KEY = 'ztAjB1LzgNEN-9bDF8ynQ_xG-O3Mts';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    async function load() {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      if (!id) {
        document.getElementById('content').innerHTML = '<h1>لینک نامعتبره 😕</h1>';
        return;
      }

      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .eq('link_id', id)
        .single();

      if (error || !data) {
        document.getElementById('content').innerHTML = '<h1>پیدا نشد 😢</h1>';
        return;
      }

      document.getElementById('content').innerHTML = `
        <h1>یه نفر جواب داده! 🎉</h1>
        <p>💜 <strong>${data.name}</strong> قبول کرده!</p>
        <p>🍽️ میخواد بره: <strong>${data.food}</strong></p>
        <p>📅 تاریخ: <strong>${data.date}</strong></p>
        <p>⏰ ساعت: <strong>${data.time}</strong></p>
        <p class="hint">حالا فقط کافیه آماده بشی! 💫</p>
      `;
    }

    load();
  </script>
</body>
</html>
