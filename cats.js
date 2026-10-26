/* =========================================================
   Barbosa K&K — cat database
   To add a photo: put the file in /images and set img: "images/Name.jpg".
   "pos" (optional) moves the crop on the card, e.g. "50% 30%" = centre, upper part.
   ========================================================= */
const catDatabase = {
  cheetahs: {
    title: "Our Cheetahs",
    single: "Cheetah",
    emoji: "🐆",
    desc: "Our flagship species and the central focus of our ethical re-wilding work. Renowned for their grace, agility and sensitive nature, our cheetahs live in spacious natural bush camps designed to encourage instinctive behaviour.",
    facts: ["Acinonyx jubatus", "IUCN status: Vulnerable", "Fastest land animal on Earth"],
    bgClass: "bg-cheetah",
    cover: "images/21.jpeg",
    members: [
      { name: "Katabi", gender: "Male", img: "", trait: "Gentle and observant male, son of Katja." },
      { name: "Chase", gender: "Female", img: "images/Chase.jpg", pos: "60% 60%", trait: "She has a short tail. Her tail bone died when she was a cub, so it stopped growing." },
      { name: "Katja", gender: "Female", img: "", trait: "Our most talkative cheetah at feeding time, and also the wildest. Mother of Katabi and Keisha." },
      { name: "Kassie", gender: "Male", img: "images/Kassie.jpg", pos: "55% 60%", trait: "His tail broke when he was a cub after his mom sat on it. It grew skew, and he now uses it as his own play toy." },
      { name: "Max", gender: "Male", img: "", trait: "The tip of his tail is fluffier than the other cheetahs', making it look like a white 'pom-pom'." },
      { name: "Keisha", gender: "Female", img: "", trait: "Smaller than Max. A highly inquisitive and agile daughter of Katja." }
    ]
  },
  caracals: {
    title: "Our Caracals",
    single: "Caracal",
    emoji: "🐱",
    desc: "Recognisable by their striking tufted ears, reddish coats and phenomenal jumping ability. Our caracal enclosures provide dense brush shelter and high perches that match their natural habits.",
    facts: ["Caracal caracal", "IUCN status: Least Concern", "Can leap about 3 m into the air"],
    bgClass: "bg-caracal",
    cover: "images/2.jpeg",
    members: [
      { name: "Kane", gender: "Male", img: "images/Kane.jpg", pos: "50% 40%", trait: "Shy, but our friendliest caracal." },
      { name: "Kitsie", gender: "Female", img: "", trait: "The youngest sister of Middle Child and Kazana, with a smaller, more petite face than her sisters." },
      { name: "Kazana", gender: "Female", img: "", trait: "The oldest sister of Middle Child and Kitsie." },
      { name: "Middle Child", gender: "Female", img: "", trait: "Has an older sister, Kazana, and a younger sister, Kitsie." },
      { name: "Kara", gender: "Female", img: "", trait: "Also known as 'Cranky Boots' for being the crankiest of the bunch. Grandmother of Kitsie, Kazana and Middle Child." },
      { name: "Kanae", gender: "Female", img: "", trait: "Kara's daughter and the mother of Kitsie, Kazana and Middle Child." },
      { name: "Mia", gender: "Female", img: "", trait: "Spirited daughter of Lulu." },
      { name: "Lulu", gender: "Female", img: "", trait: "Mia's protective and poised mother." }
    ]
  },
  servals: {
    title: "Our Servals",
    single: "Serval",
    emoji: "🐾",
    desc: "Servals have the longest legs and largest ears relative to body size of any cat. Our servals enjoy tall savannah grass settings that stimulate their hearing and jumping agility.",
    facts: ["Leptailurus serval", "IUCN status: Least Concern", "Hunts mainly by sound"],
    bgClass: "bg-serval",
    cover: "images/14.jpg",
    members: [
      { name: "Kovu", gender: "Male", img: "images/Kovu.jpg", pos: "45% 45%", trait: "Alert, observant and a prominent presence at Barbosa K&K." },
      { name: "Kai", gender: "Male", img: "images/Kai.jpg", pos: "40% 55%", trait: "Easy to recognise by his bent tail." },
      { name: "Kera", gender: "Female", img: "", trait: "Graceful, sleek hunter with a calm composure." },
      { name: "Zea", gender: "Female", img: "", trait: "Quiet, watchful and highly attuned to the early-morning feeding rounds." },
      { name: "Chase", gender: "Male", img: "", trait: "His left eye is smaller than his right eye." },
      { name: "Kian", gender: "Male", img: "", trait: "Energetic and quick-footed during feeding routines." },
      { name: "Zoe", gender: "Female", img: "", trait: "Inquisitive explorer of her natural grass enclosure." },
      { name: "Pheonix", gender: "Male", img: "images/Pheonix.jpg", pos: "50% 35%", trait: "A bulkier build than his companion Kre." },
      { name: "Kre", gender: "Male", img: "", trait: "Agile, slender and very swift." },
      { name: "Kita", gender: "Female", img: "", trait: "Daughter of Kiara. Playful and a fast learner." },
      { name: "Kiara", gender: "Female", img: "images/Kiara 4.jpg", pos: "50% 30%", trait: "Mother of Kita. A wise and confident resident." }
    ]
  },
  ocelots: {
    title: "Our Ocelots",
    single: "Ocelot",
    emoji: "🌿",
    desc: "Masters of camouflage with magnificent rosette-patterned coats. We provide enriched treetop canopies and sheltered hideouts that support their climbing instincts.",
    facts: ["Leopardus pardalis", "IUCN status: Least Concern", "Native to the Americas"],
    bgClass: "bg-ocelot",
    cover: "images/10.jpeg",
    members: [
      { name: "Moka", gender: "Male", img: "images/Moka 3.jpg", pos: "40% 60%", trait: "Confident climber who loves watching visitors from the upper branches." },
      { name: "Mara", gender: "Female", img: "", trait: "Stealthy, serene and fond of secluded canopy spots." },
      { name: "Minka", gender: "Female", img: "", trait: "Playful nature and distinctive coat rosettes." },
      { name: "Maya", gender: "Female", img: "images/Maya.jpg", pos: "40% 50%", trait: "Curious and bright-eyed resident." },
      { name: "Manu", gender: "Male", img: "images/Manu.jpg", pos: "82% 30%", trait: "Strong, tree-loving male with great climbing agility." },
      { name: "Mafiki", gender: "Male", img: "", trait: "Inquisitive and playful male with a calm disposition." }
    ]
  }
};

/* ---------- Meet Our Cats page ---------- */
(function () {
  const grid = document.getElementById('catGridContainer');
  if (!grid) return;

  const keys = Object.keys(catDatabase);
  let currentCategory = 'cheetahs';
  let visible = [];      // indices currently shown (after search)
  let modalIndex = -1;   // position inside `visible`
  let lastFocus = null;

  const tabs = document.querySelectorAll('.cat-tab-btn');
  const search = document.getElementById('catSearch');
  const intro = document.getElementById('catCategoryIntro');
  const modal = document.getElementById('catModal');

  // tab counts
  tabs.forEach(btn => {
    const c = btn.querySelector('.tab-count');
    if (c) c.textContent = catDatabase[btn.dataset.cat].members.length;
  });

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }

  function render() {
    const data = catDatabase[currentCategory];
    const q = (search && search.value.trim().toLowerCase()) || '';

    tabs.forEach(b => {
      const on = b.dataset.cat === currentCategory;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });

    intro.className = 'cat-category-intro ' + data.bgClass;
    document.getElementById('catCategoryTitle').textContent = data.title;
    document.getElementById('catCategoryDesc').textContent = data.desc;
    document.getElementById('catFacts').innerHTML = data.facts.map(f => `<span>${escapeHtml(f)}</span>`).join('');

    visible = data.members
      .map((cat, i) => i)
      .filter(i => !q || (data.members[i].name + ' ' + data.members[i].trait).toLowerCase().includes(q));

    grid.innerHTML = '';
    if (!visible.length) {
      grid.innerHTML = `<p class="cat-empty">No ${data.title.replace('Our ', '').toLowerCase()} match "${escapeHtml(q)}".</p>`;
      return;
    }

    visible.forEach((idx, n) => {
      const cat = data.members[idx];
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'cat-card';
      card.style.animationDelay = (n * 0.04) + 's';
      card.setAttribute('aria-label', `View ${cat.name}'s profile`);
      card.addEventListener('click', () => openModal(n, card));

      const imageHtml = cat.img
        ? `<img src="${cat.img}" alt="${escapeHtml(cat.name)} the ${data.single.toLowerCase()}" loading="lazy" style="object-position:${cat.pos || 'center'}" />`
        : `<div class="cat-placeholder"><span class="initial">${escapeHtml(cat.name.charAt(0))}</span><span>Photo coming soon</span></div>`;

      card.innerHTML = `
        <div class="cat-card-img-wrap">
          ${imageHtml}
          <span class="cat-badge">${cat.gender === 'Male' ? '♂' : '♀'} ${cat.gender}</span>
        </div>
        <div class="cat-card-details">
          <h3>${escapeHtml(cat.name)}</h3>
          <p class="cat-preview-trait">${escapeHtml(cat.trait)}</p>
          <span class="cat-view-btn">View Profile &rarr;</span>
        </div>`;
      grid.appendChild(card);
    });
  }

  function setCategory(key, updateHash) {
    if (!catDatabase[key]) return;
    currentCategory = key;
    if (search) search.value = '';
    render();
    if (updateHash) history.replaceState(null, '', '#' + key);
  }

  function fillModal() {
    const data = catDatabase[currentCategory];
    const cat = data.members[visible[modalIndex]];
    const wrap = document.getElementById('modalImgWrap');
    wrap.innerHTML = cat.img
      ? `<img src="${cat.img}" alt="${escapeHtml(cat.name)} the ${data.single.toLowerCase()}" />`
      : `<div class="cat-placeholder modal-placeholder"><span class="initial">${escapeHtml(cat.name.charAt(0))}</span><span>Photo coming soon</span></div>`;
    document.getElementById('modalCatName').textContent = cat.name;
    document.getElementById('modalCatCategory').textContent = data.emoji + ' ' + data.single;
    document.getElementById('modalCatGender').textContent = `Gender: ${cat.gender}`;
    document.getElementById('modalCatTrait').textContent = cat.trait;
    document.getElementById('modalCount').textContent = `${modalIndex + 1} of ${visible.length}`;
  }

  function openModal(n, trigger) {
    modalIndex = n;
    lastFocus = trigger || document.activeElement;
    fillModal();
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  }

  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  function step(d) {
    modalIndex = (modalIndex + d + visible.length) % visible.length;
    fillModal();
  }

  tabs.forEach(b => b.addEventListener('click', () => setCategory(b.dataset.cat, true)));
  if (search) search.addEventListener('input', render);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  document.getElementById('modalPrev').addEventListener('click', () => step(-1));
  document.getElementById('modalNext').addEventListener('click', () => step(1));
  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('show')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  // Start on the category in the URL (e.g. cats.html#servals) and optionally open a cat (?cat=Kovu)
  const hashKey = location.hash.replace('#', '');
  setCategory(keys.includes(hashKey) ? hashKey : 'cheetahs', false);
  const wanted = new URLSearchParams(location.search).get('cat');
  if (wanted) {
    const members = catDatabase[currentCategory].members;
    const idx = members.findIndex(m => m.name.toLowerCase() === wanted.toLowerCase());
    const n = visible.indexOf(idx);
    if (n > -1) openModal(n, null);
  }
  window.addEventListener('hashchange', () => {
    const k = location.hash.replace('#', '');
    if (keys.includes(k)) setCategory(k, false);
  });
})();
