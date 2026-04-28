/* =====================================================
   SHARED.JS — Global scripts: cursor, transitions,
   theme, navbar, footer, scroll reveal, counters
   ===================================================== */

/* ── THEME ── */
function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  document.querySelectorAll('.th-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('th-' + t);
  if (btn) btn.classList.add('active');
}
(function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('th-' + saved);
    if (btn) btn.classList.add('active');
  });
})();

/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
  if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; }
  rx += (mx - rx) * .1; ry += (my - ry) * .1;
  if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
  requestAnimationFrame(animCursor);
}
animCursor();
document.addEventListener('mouseover', e => {
  if (e.target.closest('a,button,.srv-card,.work-card,.project-card,.video-card,.company-logo-card,.tl-item,.skill-bar')) {
    if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(2.2)';
    if (ring) ring.style.opacity = '.18';
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest('a,button,.srv-card,.work-card,.project-card,.video-card,.company-logo-card,.tl-item,.skill-bar')) {
    if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    if (ring) ring.style.opacity = '.45';
  }
});

/* ── PAGE TRANSITIONS ── */
const overlay = document.getElementById('pg-transition');
// Entry: wipe out on load
window.addEventListener('DOMContentLoaded', () => {
  if (overlay) {
    overlay.classList.add('enter');
    setTimeout(() => {
      overlay.style.transition = 'clip-path .6s cubic-bezier(.77,0,.175,1)';
      overlay.style.clipPath = 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)';
      setTimeout(() => overlay.classList.remove('enter'), 700);
    }, 50);
  }
  buildFooter();
  initScrollReveal();
  initNavHighlight();
});

function navTo(e, href) {
  e.preventDefault();
  if (overlay) {
    overlay.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
    overlay.style.transition = 'clip-path .55s cubic-bezier(.77,0,.175,1)';
    overlay.classList.add('exit');
    requestAnimationFrame(() => {
      overlay.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
      setTimeout(() => window.location.href = href, 570);
    });
  } else {
    window.location.href = href;
  }
}

/* ── MOBILE NAV ── */
let mobileNavOpen = false;
function toggleNav() {
  mobileNavOpen = !mobileNavOpen;
  const ham = document.getElementById('hamburger');
  let mn = document.getElementById('mobile-nav');
  if (!mn) {
    mn = document.createElement('div');
    mn.id = 'mobile-nav';
    mn.className = 'mobile-nav';
    const links = [
      ['index.html','Home'],['about.html','About'],['services.html','Services'],
      ['work.html','Work'],['experience.html','Experience'],['contact.html','Contact'],['lab.html','✦ Lab']
    ];
    links.forEach(([h,l]) => {
      const a = document.createElement('a');
      a.href = h; a.textContent = l;
      a.addEventListener('click', ev => navTo(ev, h));
      mn.appendChild(a);
    });
    document.body.appendChild(mn);
  }
  mn.classList.toggle('open', mobileNavOpen);
  if (ham) ham.classList.toggle('open', mobileNavOpen);
}
function closeMobileNav() {
  mobileNavOpen = false;
  const mn = document.getElementById('mobile-nav');
  const ham = document.getElementById('hamburger');
  if (mn) mn.classList.remove('open');
  if (ham) ham.classList.remove('open');
}

/* ── SCROLL REVEAL ── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right,.reveal-scale,.img-reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        const delay = parseFloat(getComputedStyle(e.target).getPropertyValue('--delay') || 0) * 1000;
        setTimeout(() => e.target.classList.add('visible'), delay);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/* ── SKILL BAR ANIMATION ── */
function initSkillBars() {
  const bars = document.querySelectorAll('.bar-fill');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const w = e.target.getAttribute('data-w');
        setTimeout(() => e.target.style.width = w + '%', 350);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .3 });
  bars.forEach(b => obs.observe(b));
}

/* ── COUNTER ANIMATION ── */
function runCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    let n = 0;
    const step = Math.ceil(target / 50);
    const t = setInterval(() => {
      n = Math.min(n + step, target);
      el.textContent = n + '+';
      if (n >= target) clearInterval(t);
    }, 35);
  });
}

/* ── NAV HIGHLIGHT ── */
function initNavHighlight() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('nav-active');
    } else {
      a.classList.remove('nav-active');
    }
  });
}

/* ── SCROLL NAVBAR ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.borderBottomColor = window.scrollY > 50 ? 'var(--border)' : 'transparent';
});

/* ── TOAST ── */
function showToast(msg, isError = false) {
  const t = document.getElementById('toast');
  const span = document.getElementById('toast-msg');
  if (!t || !span) return;
  span.textContent = msg;
  t.style.borderColor = isError ? '#ef4444' : 'var(--accent)';
  t.querySelector('i').style.color = isError ? '#ef4444' : 'var(--accent)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4200);
}

/* ── BUILD FOOTER ── */
function buildFooter() {
  const f = document.getElementById('footer');
  if (!f) return;
  f.innerHTML = `
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="nav-logo" style="display:inline-flex;align-items:center;gap:9px;font-family:var(--display);font-weight:800;font-size:1.3rem">
        <div class="logo-icon" style="width:34px;height:34px;background:var(--accent-grad);border-radius:9px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 14px var(--glow-strong)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="16 18 22 12 16 6" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><polyline points="8 6 2 12 8 18" stroke="rgba(255,255,255,.6)" stroke-width="2.5" stroke-linecap="round"/></svg>
        </div>
        Rahul<span style="color:var(--accent)">Tak</span>
      </div>
      <p>Full-Stack Engineer & UI/UX Developer based in Jaipur, India. Building scalable, beautiful web experiences.</p>
      <div class="footer-social">
        <a href="https://github.com" target="_blank" class="fsoc"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com" target="_blank" class="fsoc"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://twitter.com" target="_blank" class="fsoc"><i class="fab fa-twitter"></i></a>
        <a href="https://youtube.com" target="_blank" class="fsoc"><i class="fab fa-youtube"></i></a>
        <a href="https://instagram.com" target="_blank" class="fsoc"><i class="fab fa-instagram"></i></a>
        <a href="https://dribbble.com" target="_blank" class="fsoc"><i class="fab fa-dribbble"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Pages</h4>
      <ul>
        <li><a href="index.html" onclick="navTo(event,'index.html')">Home</a></li>
        <li><a href="about.html" onclick="navTo(event,'about.html')">About</a></li>
        <li><a href="services.html" onclick="navTo(event,'services.html')">Services</a></li>
        <li><a href="work.html" onclick="navTo(event,'work.html')">Work</a></li>
        <li><a href="experience.html" onclick="navTo(event,'experience.html')">Experience</a></li>
        <li><a href="lab.html" onclick="navTo(event,'lab.html')">Lab ✦</a></li>
        <li><a href="contact.html" onclick="navTo(event,'contact.html')">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html">Full-Stack Dev</a></li>
        <li><a href="services.html">UI/UX Design</a></li>
        <li><a href="services.html">API Development</a></li>
        <li><a href="services.html">Cloud & DevOps</a></li>
        <li><a href="services.html">Performance</a></li>
        <li><a href="services.html">Consulting</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:rahultak1923@gmail.com">rahultak1923@gmail.com</a></li>
        <li><a href="tel:+919876543210">+91 98765 43210</a></li>
        <li><a href="#">Jaipur, Rajasthan, IN</a></li>
        <li><a href="contact.html">Send a Message</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© ${new Date().getFullYear()} Rahul Tak. Designed & built with <i class="fas fa-heart" style="color:var(--accent)"></i> in Jaipur.</p>
    <p style="font-family:var(--mono);font-size:.72rem;color:var(--text3)">React · Node.js · Tailwind · Bootstrap</p>
  </div>`;
}

/* ── PARALLAX HELPER ── */
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || .3;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}
