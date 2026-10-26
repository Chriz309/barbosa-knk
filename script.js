/* =========================================================
   Barbosa K&K — shared behaviour for every page
   ========================================================= */

/* >>> Paste your Web3Forms access key here (get one free at https://web3forms.com) <<< */
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const WHATSAPP_NUMBER = "27655591257";
const CONTACT_EMAIL = "barbosaKnK@gmail.com";

document.documentElement.classList.remove('no-js');

/* ---------- Mobile navigation ---------- */
(function () {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('navLinks');
  if (!btn || !nav) return;
  const setOpen = open => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? '✕' : '☰';
  };
  btn.addEventListener('click', e => { e.stopPropagation(); setOpen(!nav.classList.contains('open')); });
  document.addEventListener('click', e => { if (!nav.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
})();

/* ---------- Header shadow + back-to-top ---------- */
(function () {
  const header = document.querySelector('.site-header');
  const topBtn = document.getElementById('backToTop');
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 20);
    if (topBtn) topBtn.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ---------- Scroll reveal ---------- */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('visible')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ---------- Hero slideshow (home) ---------- */
(function () {
  const slides = document.querySelectorAll('.hero-slides img');
  if (slides.length < 2) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 6500);
})();

/* ---------- Count-up numbers ---------- */
(function () {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;
  const run = el => {
    const target = +el.dataset.count, dur = 1400, start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (el.dataset.suffix || '');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) { nums.forEach(n => n.textContent = n.dataset.count); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.5 });
  nums.forEach(n => io.observe(n));
})();

/* ---------- Volunteer: summer / winter routine ---------- */
function toggleSeason(season) {
  ['winter', 'summer'].forEach(s => {
    const on = s === season;
    const b = document.getElementById(s + 'Btn');
    const t = document.getElementById(s + 'Schedule');
    if (b) { b.classList.toggle('active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); }
    if (t) t.classList.toggle('active', on);
  });
}
(function () {
  // Default to the current South African season (Oct–Mar = summer)
  if (!document.getElementById('winterSchedule')) return;
  const m = new Date().getMonth();
  toggleSeason(m >= 9 || m <= 2 ? 'summer' : 'winter');
})();

/* ---------- Volunteer: cost estimator ---------- */
(function () {
  const box = document.getElementById('estimator');
  if (!box) return;
  const rates = { sa: 700, intl: 800 };
  let type = 'sa';
  const range = document.getElementById('estDays');
  const daysOut = document.getElementById('estDaysOut');
  const totalOut = document.getElementById('estTotal');
  const noteOut = document.getElementById('estNote');
  const applyBtn = document.getElementById('estApply');
  const fmt = n => 'R' + n.toLocaleString('en-ZA').replace(/,/g, ' ');

  function update() {
    const days = +range.value;
    const total = days * rates[type];
    const weeks = days % 7 === 0 ? ` (${days / 7} week${days > 7 ? 's' : ''})` : '';
    daysOut.textContent = days + ' days' + weeks;
    totalOut.textContent = fmt(total);
    noteOut.textContent = type === 'intl'
      ? `${fmt(rates.intl)} per day · 50% deposit of ${fmt(total / 2)} secures your placement`
      : `${fmt(rates.sa)} per day · full payment confirms your dates`;
    const label = type === 'intl' ? 'an international' : 'a South African';
    applyBtn.href = `contact.html?topic=Volunteer&msg=${encodeURIComponent(`Hello Barbosa K&K, I'm interested in the volunteer programme as ${label} volunteer for about ${days} days. My preferred dates are: `)}`;
  }
  box.querySelectorAll('.seg button').forEach(b => b.addEventListener('click', () => {
    type = b.dataset.type;
    box.querySelectorAll('.seg button').forEach(x => x.classList.toggle('active', x === b));
    update();
  }));
  range.addEventListener('input', update);
  update();
})();

/* ---------- Photo gallery lightbox ---------- */
(function () {
  const items = Array.from(document.querySelectorAll('.gallery button'));
  const lb = document.getElementById('lightbox');
  if (!items.length || !lb) return;
  const img = lb.querySelector('img');
  const count = lb.querySelector('.lb-count');
  let i = 0, last = null;
  const show = n => {
    i = (n + items.length) % items.length;
    const src = items[i].querySelector('img');
    img.src = src.src; img.alt = src.alt;
    count.textContent = `${i + 1} / ${items.length}`;
  };
  const close = () => { lb.classList.remove('show'); document.body.style.overflow = ''; if (last) last.focus(); };
  items.forEach((b, n) => b.addEventListener('click', () => {
    last = b; show(n); lb.classList.add('show'); document.body.style.overflow = 'hidden'; lb.querySelector('.lb-close').focus();
  }));
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', () => show(i - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(i + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('show')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();

/* ---------- Contact form ---------- */
(function () {
  const form = document.getElementById('inquiryForm');
  if (!form) return;
  const status = document.getElementById('formStatus');
  const params = new URLSearchParams(location.search);
  const topic = params.get('topic');
  const msg = params.get('msg');
  const select = document.getElementById('topic');
  const message = document.getElementById('message');

  if (topic && select && [...select.options].some(o => o.value === topic)) select.value = topic;
  if (msg) message.value = msg;
  else if (topic) message.value = `Hello Barbosa K&K, I would like to enquire about: ${select.options[select.selectedIndex].text}.`;

  form.querySelector('input[name="access_key"]').value = WEB3FORMS_ACCESS_KEY;

  const showStatus = (cls, html) => { status.className = 'form-status show ' + cls; status.innerHTML = html; };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    data.set('subject', `Website enquiry: ${data.get('inquiry_type')} – ${data.get('first_name')} ${data.get('last_name')}`);
    const fallback = `Please message us on <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">WhatsApp</a> or email <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`;

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.includes('YOUR_')) {
      showStatus('err', `Our online form isn't connected yet. ${fallback}`);
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { Accept: 'application/json' }, body: data });
      const json = await res.json();
      if (json.success) {
        form.reset();
        showStatus('ok', `Thank you, ${data.get('first_name')}! Your message has been sent. We'll get back to you as soon as possible.`);
      } else {
        showStatus('err', `Sorry, something went wrong sending your message. ${fallback}`);
      }
    } catch (err) {
      showStatus('err', `We couldn't send your message right now. ${fallback}`);
    } finally {
      btn.disabled = false; btn.textContent = 'Send Enquiry';
    }
  });
})();

/* ---------- Footer year ---------- */
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
