  document.addEventListener('DOMContentLoaded', () => {
      const goBtn   = document.getElementById('goBtn');
      const home    = document.getElementById('home');
      const index   = document.getElementById('index');
      const bgAudio = document.getElementById('bgAudio');

      goBtn.addEventListener('click', () => {
        // bodyni style o'zgartirish
        document.body.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';
          // 1️⃣ Ekranni almashtirish
          home.classList.add('hidden');
          index.classList.remove('hidden');

          // 2️⃣ Audio ni boshlab yuborish (foydalanuvchi bosganligi tufayli ruxsat etiladi)
          bgAudio.play().catch(err => console.warn('Audio play error:', err));

          // 3️⃣ Rasm animatsiyalarini qo‘shish
          document.querySelectorAll('#index .image-gallery img').forEach((img, i) => {
              img.classList.add('wow','animate__animated','animate__slow');
              const fade = i % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight';
              img.classList.add(fade);
              img.setAttribute('data-wow-delay', `${i + 3}s`);
              img.setAttribute('data-wow-duration', '3s');
          });

          new WOW().init();
      });
  });
document.addEventListener('DOMContentLoaded', () => {
  // ...existing code...

  // Ultra smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        ultraSmoothScrollTo(targetId, 2000); // 2 sekundda silliq scroll
      }
    });
  });
});

// Ultra smooth scroll function
function ultraSmoothScrollTo(selector, duration = 2000) {
  const target = document.querySelector(selector);
  if (!target) return;

  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + window.scrollY;
  const distance = endY - startY;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Ease in-out
    const ease = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}



  document.getElementById('goBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'muslima' && password === 'muslima') {
      document.getElementById('home').classList.add('hidden');
      document.getElementById('index').classList.remove('hidden');
      document.getElementById('bgAudio').play();
    } else {
      alert('Noto\'g\'ri login yoki parol!');
      location.reload();
    } 
  });