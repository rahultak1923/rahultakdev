
  const slides = document.querySelectorAll(".testimonial-slide");
  let index = 0;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  document.querySelector(".next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  };

  document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  };

  // Auto slide
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4000);



 
{/* // ===== CURSOR ===== */}
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();
document.querySelectorAll('a, button, .project-card, .service-card, .video-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%,-50%) scale(2.5)'; ring.style.opacity = '0.2'; });
  el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.opacity = '0.5'; });
});

// ===== THEME =====
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + t).classList.add('active');
}

// ===== MOBILE MENU =====
function toggleMobileMenu() { document.getElementById('mobile-menu').classList.toggle('open'); }
function closeMobileMenu() { document.getElementById('mobile-menu').classList.remove('open'); }

// ===== REVEAL OBSERVER =====
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// ===== SKILL BARS =====
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach(bar => {
        const w = bar.getAttribute('data-width');
        setTimeout(() => bar.style.width = w + '%', 300);
      });
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-bars').forEach(s => barObserver.observe(s));

// ===== COUNTERS =====
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + '+';
          if (current >= target) clearInterval(timer);
        }, 40);
      });
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.hero-stats').forEach(s => counterObserver.observe(s));

// ===== PORTFOLIO TABS =====
function filterProjects(cat) {
  document.querySelectorAll('.ptab').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'block';
      card.style.animation = 'fadeInUp 0.4s ease both';
    } else {
      card.style.display = 'none';
    }
  });
}

{/* // ===== CONTACT FORM ===== */}
function handleSubmit() {
  const name = document.getElementById('fname').value;
  const email = document.getElementById('femail').value;
  const msg = document.getElementById('fmessage').value;
  if (!name || !email || !msg) {
    showToast('Please fill all required fields!', true);
    return;
  }
  showToast('Message sent successfully! I\'ll reply within 24h. 🚀');
  ['fname','lname','femail','fsubject','fmessage'].forEach(id => document.getElementById(id).value = '');
}
function showToast(message, error = false) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = message;
  toast.style.borderColor = error ? '#ef4444' : 'var(--accent)';
  toast.querySelector('i').style.color = error ? '#ef4444' : 'var(--accent)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) nav.style.borderBottomColor = 'var(--border)';
  else nav.style.borderBottomColor = 'transparent';
});

// ===== SMOOTH ANCHOR =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});