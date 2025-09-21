// Guest list with ceremony flag
const guestList = [
  { "name": "Aaron Electrician", "ceremony": false },
  { "name": "Abbie Filmer", "ceremony": true },
  { "name": "Abish Khatri", "ceremony": true },
  { "name": "Adam kells", "ceremony": true },
  { "name": "Adam Moore", "ceremony": true },
  { "name": "Aisha McPherson", "ceremony": true },
  { "name": "Aleyah Campbell", "ceremony": true },
  { "name": "Andy Jashan", "ceremony": false },
  { "name": "Armani Wright", "ceremony": true },
  { "name": "Aston England", "ceremony": true },
  { "name": "Beau Narrabean", "ceremony": false },
  { "name": "Ben England", "ceremony": false },
  { "name": "Ben Perth", "ceremony": false },
  { "name": "Benso", "ceremony": false },
  { "name": "Bidu", "ceremony": true },
  { "name": "Blake clearhiam", "ceremony": false },
  { "name": "Blake moller", "ceremony": false },
  { "name": "Blake moon", "ceremony": false },
  { "name": "Brighton Kells", "ceremony": true },
  { "name": "Brock Wright", "ceremony": false },
  { "name": "Brooke Hartley", "ceremony": true },
  { "name": "Calum Hartop", "ceremony": true },
  { "name": "Carer one", "ceremony": true },
  { "name": "Carer two", "ceremony": true },
  { "name": "Cem Or", "ceremony": true },
  { "name": "Charles Gialanze", "ceremony": true },
  { "name": "Charlie Gialanze", "ceremony": true },
  { "name": "Christie Gialanze", "ceremony": true },
  { "name": "Clifford Blake", "ceremony": true },
  { "name": "Colin Sieder", "ceremony": true },
  { "name": "Connor Salmond", "ceremony": true },
  { "name": "Corey Taylor", "ceremony": true },
  { "name": "Corey’s Girlfriend", "ceremony": true },
  { "name": "Dallas Bullock", "ceremony": false },
  { "name": "Daniel Kells", "ceremony": true },
  { "name": "David gialanze", "ceremony": true },
  { "name": "Dennis Gialanze", "ceremony": true },
  { "name": "Dennis Or", "ceremony": true },
  { "name": "Divya", "ceremony": true },
  { "name": "Dom Ayer’s", "ceremony": false },
  { "name": "Donna Dailey", "ceremony": false },
  { "name": "Dyl Luka", "ceremony": false },
  { "name": "Dylan McPherson", "ceremony": true },
  { "name": "Ebben McPherson", "ceremony": true },
  { "name": "Elena Gialanze", "ceremony": true },
  { "name": "Evette Mckecknie", "ceremony": true },
  { "name": "Felicity blacke smith", "ceremony": false },
  { "name": "Fransisco Chico", "ceremony": false },
  { "name": "Gary Kells", "ceremony": true },
  { "name": "Georgina Miller Molloy", "ceremony": true },
  { "name": "Hacer Or", "ceremony": true },
  { "name": "Hallie Kells", "ceremony": true },
  { "name": "Harley Reece", "ceremony": false },
  { "name": "Holly Nilsson", "ceremony": false },
  { "name": "Hope Kells", "ceremony": true },
  { "name": "Huss Roumi", "ceremony": false },
  { "name": "Ilona Kells", "ceremony": false },
  { "name": "Imogen Cobb", "ceremony": true },
  { "name": "Imogen Cobb boyfriend", "ceremony": true },
  { "name": "Irene Singh", "ceremony": false },
  { "name": "Irene’s Singh Hubby", "ceremony": false },
  { "name": "Jack McCann", "ceremony": false },
  { "name": "Jacob Dev", "ceremony": false },
  { "name": "Jacob maladondo", "ceremony": false },
  { "name": "Jade Kells", "ceremony": true },
  { "name": "Jai Wright", "ceremony": false },
  { "name": "Jake Coglan", "ceremony": false },
  { "name": "Jake Durban", "ceremony": true },
  { "name": "Jake Gialanze", "ceremony": true },
  { "name": "Jako Craig", "ceremony": false },
  { "name": "Jamie Geelan", "ceremony": true },
  { "name": "Jamie Seider", "ceremony": true },
  { "name": "Jasmine Kells", "ceremony": true },
  { "name": "Jaxson Moore", "ceremony": true },
  { "name": "Jenny Brady", "ceremony": true },
  { "name": "Jenny gialanze", "ceremony": true },
  { "name": "Jessie Donna’s girl", "ceremony": false },
  { "name": "Jessie Sapsed", "ceremony": false },
  { "name": "Jimmy McPherson", "ceremony": false },
  { "name": "John mailei", "ceremony": false },
  { "name": "Jorge Miranda", "ceremony": true },
  { "name": "Josh Caldwell", "ceremony": false },
  { "name": "Joshua Petsalis", "ceremony": false },
  { "name": "Joshua Wright", "ceremony": false },
  { "name": "Josie Kells", "ceremony": true },
  { "name": "Katie Frost", "ceremony": true },
  { "name": "Kelcie Alannah", "ceremony": false },
  { "name": "Kiara McPherson", "ceremony": true },
  { "name": "Kim Dental", "ceremony": false },
  { "name": "Kim’s Hubby", "ceremony": false },
  { "name": "Laylah Cotteral", "ceremony": true },
  { "name": "Leilah rose", "ceremony": false },
  { "name": "Leon Darrel", "ceremony": false },
  { "name": "Les Hartop", "ceremony": true },
  { "name": "Lex Hartop", "ceremony": true },
  { "name": "Liam Ayers", "ceremony": false },
  { "name": "Lincoln", "ceremony": true },
  { "name": "Luca Hugo brother", "ceremony": false },
  { "name": "Lukas Weizner", "ceremony": true },
  { "name": "Luke Caldwell", "ceremony": false },
  { "name": "Luke Seider", "ceremony": false },
  { "name": "Luke Wright", "ceremony": true },
  { "name": "Lydia Nugent", "ceremony": true },
  { "name": "Marcus Cottrell", "ceremony": true },
  { "name": "Maria Pullicino", "ceremony": true },
  { "name": "Mariah Kells", "ceremony": true },
  { "name": "Mark Coulduck", "ceremony": true },
  { "name": "Mary Gialanze", "ceremony": true },
  { "name": "Mary Hartop", "ceremony": true },
  { "name": "Max bove", "ceremony": false },
  { "name": "Max coglan", "ceremony": false },
  { "name": "Megan Hartop", "ceremony": true },
  { "name": "Milan P", "ceremony": true },
  { "name": "Minn England", "ceremony": true },
  { "name": "Nathan van Burren", "ceremony": true },
  { "name": "Nick Scuba", "ceremony": false },
  { "name": "Oakley Wright", "ceremony": true },
  { "name": "Redmond Hartop", "ceremony": true },
  { "name": "Renoir (Blakes)", "ceremony": false },
  { "name": "Richard Godsell", "ceremony": true },
  { "name": "Riley Nicols", "ceremony": false },
  { "name": "Riza T", "ceremony": true },
  { "name": "Rob Nowra", "ceremony": true },
  { "name": "Ryder Cottrell", "ceremony": true },
  { "name": "Sam gialanze", "ceremony": true },
  { "name": "Sammy wigens", "ceremony": false },
  { "name": "Sarah hagan", "ceremony": false },
  { "name": "Shaniia Kells", "ceremony": true },
  { "name": "Sharon Seider", "ceremony": true },
  { "name": "Shawniece Higgins", "ceremony": false },
  { "name": "Shell Lees", "ceremony": false },
  { "name": "Shells kid one", "ceremony": false },
  { "name": "Shells kid two", "ceremony": false },
  { "name": "Skye Kells", "ceremony": true },
  { "name": "Skye Wright", "ceremony": false },
  { "name": "Sophie Hartop", "ceremony": true },
  { "name": "Stan H", "ceremony": true },
  { "name": "Sueann Peterson", "ceremony": false },
  { "name": "Terry Mckecknie", "ceremony": true },
  { "name": "Theo Chikomba", "ceremony": true },
  { "name": "Tye Koori", "ceremony": false },
  { "name": "Victor French", "ceremony": false },
  { "name": "Wendy Ludlow", "ceremony": false },
  { "name": "Wendy Wright", "ceremony": false },
  { "name": "Will Lydia’s Man", "ceremony": true },
  { "name": "Wyatt Campbell", "ceremony": true },
  { "name": "Zac gialanze", "ceremony": true },
  { "name": "Zac Keith", "ceremony": false }
];


 // Replace with your Google Sheets Apps Script endpoint URL
    const GS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzaIX7mykTqWOGqAlzeqhoJFEppmdwR_MTvgOICh0mePYXRbAVJrdZU9-E4vF7okOo/exec';

async function sendRsvpToSheets(entry) {
  try {
    await fetch(GS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
  } catch (err) {
    console.error('Failed to send RSVP to Google Sheets', err);
  }
}

async function fetchRsvpsFromSheets() {
  try {
    const resp = await fetch(GS_ENDPOINT);
    if (resp.ok) {
      const data = await resp.json();
      return Array.isArray(data) ? data : [];
    }
  } catch (err) {
    console.error('Failed to fetch RSVPs from Google Sheets', err);
  }
  return [];
}

// Timeline data
let timelineEvents = [
  {
    time: "3:30–4:00 PM",
    title: "Shuttle Service",
    desc: "Continuous shuttle trips from Nowra Entertainment Centre to Figbird Cottage.",
    icon: "🚌",
    chip: { text: "Shuttle pick‑up", url: "https://www.google.com/maps?q=Nowra+Entertainment+Centre+NSW+Australia" }
  },
  {
    time: "4:00 PM",
    title: "Ceremony",
    desc: "Join us at Figbird Cottage as we exchange our vows.",
    icon: "💍",
    chip: { text: "Figbird Cottage", url: "https://www.google.com/maps?q=Figbird+Cottage+Terara+NSW+Australia" }
  },
  {
    time: "5:00 PM",
    title: "Canapés & Garden Drinks",
    desc: "Relax with canapés and drinks in the gardens.",
    icon: "🍹"
  },
  {
    time: "6:00 PM",
    title: "Dinner",
    desc: "Enjoy a delicious dinner with us.",
    icon: "🍽️"
  },
  {
    time: "8:00 PM",
    title: "Cake & First Dance",
    desc: "Join us for our first dance and cake cutting.",
    icon: "🎂"
  },
  {
    time: "10:45 PM",
    title: "Farewell",
    desc: "Say goodnight and thank you for celebrating with us.",
    icon: "✨"
  },
  {
    time: "11:00 PM",
    title: "Late‑night Shuttle",
    desc: "Free shuttles depart for Nowra and local drop‑offs.",
    icon: "🚌"
  }
];

/*
 * ========================================================================
 * Premium enhancements
 *
 * The functions below add extra polish and functionality to the wedding
 * invite.  Features include a scroll progress bar, countdown timer, smooth
 * reveal animations on scroll, a mobile navigation toggle, a lightbox for
 * gallery images, a persistent guestbook, and admin tools for managing
 * guestbook entries.  Each function is initialized on DOMContentLoaded.
 */

// Progress bar fills according to scroll position
function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  function update() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = height > 0 ? (scrollTop / height) * 100 : 0;
    bar.style.width = percent + '%';
  }
  update();
  window.addEventListener('scroll', update);
}

// Countdown timer to the big day
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  // Wedding date/time in local time (Nowra, NSW).  Adjust if the actual
  // ceremony time differs from 4:00 PM.  Using a time gives a more
  // accurate countdown.  The user can edit the date via the data-edit-id
  // attribute in the HTML if needed.
  const target = new Date('2026-02-21T16:00:00');
  function pad(n) { return n.toString().padStart(2, '0'); }
  function update() {
    const now = new Date();
    let diff = target - now;
    if (diff <= 0) {
      el.textContent = 'It’s time to celebrate!';
      clearInterval(intervalId);
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);
    el.textContent = `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  }
  update();
  const intervalId = setInterval(update, 1000);
}

// Scroll animation reveals sections as they enter the viewport
function initScrollAnimations() {
  const sections = document.querySelectorAll('.section');
  if (!('IntersectionObserver' in window)) {
    sections.forEach(s => s.classList.add('animate'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(sec => {
    observer.observe(sec);
  });
}

// Mobile navigation toggle for small screens
function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (!navToggle || !navLinks) return;
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close the nav when a link is clicked (handy for one-page navigation)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  });
}

// Lightbox for gallery images
function initGalleryLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const imgEl = document.getElementById('lightboxImage');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const imgs = Array.from(document.querySelectorAll('.gallery-grid img'));
  if (!overlay || !imgEl || imgs.length === 0) return;
  let currentIndex = 0;
  function show(index) {
    if (index < 0 || index >= imgs.length) return;
    currentIndex = index;
    imgEl.src = imgs[currentIndex].src;
    overlay.classList.remove('hidden');
  }
  function hide() {
    overlay.classList.add('hidden');
  }
  imgs.forEach((img, idx) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      show(idx);
    });
  });
  if (closeBtn) closeBtn.addEventListener('click', hide);
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) hide();
    });
  }
  if (prevBtn) prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    show((currentIndex - 1 + imgs.length) % imgs.length);
  });
  if (nextBtn) nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    show((currentIndex + 1) % imgs.length);
  });
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('hidden')) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      show((currentIndex - 1 + imgs.length) % imgs.length);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      show((currentIndex + 1) % imgs.length);
    }
  });
}

// Guestbook front‑end for guests
function initGuestbook() {
  const form = document.getElementById('guestbookForm');
  const entriesEl = document.getElementById('guestbookEntries');
  if (!form || !entriesEl) return;
  function loadEntries() {
    let entries = [];
    try {
      entries = JSON.parse(localStorage.getItem('guestbook') || '[]');
    } catch (e) {
      entries = [];
    }
    entriesEl.innerHTML = '';
    if (entries.length === 0) return;
    entries.forEach(entry => {
      const li = document.createElement('li');
      li.className = 'guestbook-entry';
      const strong = document.createElement('strong');
      strong.textContent = entry.name + ': ';
      li.appendChild(strong);
      li.appendChild(document.createTextNode(entry.message));
      entriesEl.appendChild(li);
    });
  }
  loadEntries();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('guestbookName').value.trim();
    const message = document.getElementById('guestbookMessage').value.trim();
    if (!name || !message) return;
    let entries = [];
    try {
      entries = JSON.parse(localStorage.getItem('guestbook') || '[]');
    } catch (err) {
      entries = [];
    }
    entries.push({ name, message, timestamp: new Date().toISOString() });
    localStorage.setItem('guestbook', JSON.stringify(entries));
    form.reset();
    loadEntries();
  });
}

// Guestbook tools for admin view
function initAdminGuestbook() {
  const exportBtn = document.getElementById('exportGuestbookBtn');
  const clearBtn = document.getElementById('clearGuestbookBtn');
  const listEl = document.getElementById('adminGuestbookList');
  const toggleBtn = document.getElementById('toggleGuestbookAdminBtn');
  if (!exportBtn || !clearBtn) return;
  function loadEntries() {
    let entries = [];
    try {
      entries = JSON.parse(localStorage.getItem('guestbook') || '[]');
    } catch (e) {
      entries = [];
    }
    if (!listEl) return;
    listEl.innerHTML = '';
    entries.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `${entry.name} – ${entry.message}`;
      listEl.appendChild(li);
    });
  }
  loadEntries();
  if (toggleBtn && listEl) {
    toggleBtn.addEventListener('click', () => {
      if (listEl.classList.contains('hidden')) {
        loadEntries();
      }
      listEl.classList.toggle('hidden');
    });
  }
  exportBtn.addEventListener('click', () => {
    let entries = [];
    try {
      entries = JSON.parse(localStorage.getItem('guestbook') || '[]');
    } catch (e) {
      entries = [];
    }
    let csv = 'Name,Message,Timestamp\n';
    entries.forEach(entry => {
      const name = entry.name.replace(/"/g, '""');
      const msg = entry.message.replace(/"/g, '""');
      csv += `"${name}","${msg}","${entry.timestamp}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'guestbook.csv';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
  clearBtn.addEventListener('click', () => {
    if (!confirm('Are you sure you want to clear all guestbook entries?')) return;
    localStorage.removeItem('guestbook');
    if (listEl) listEl.innerHTML = '';
    const frontList = document.getElementById('guestbookEntries');
    if (frontList) frontList.innerHTML = '';
  });
}

// Helpers to load timeline into the DOM
function loadTimeline() {
  const container = document.querySelector('.timeline');
  if (!container) return;
  // Clear existing timeline items so it can be re-rendered when events change
  container.innerHTML = '';
  timelineEvents.forEach(event => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    const time = document.createElement('div');
    time.className = 'timeline-time';
    time.textContent = `${event.icon} ${event.time}`;
    const title = document.createElement('div');
    title.className = 'timeline-title';
    title.textContent = event.title;
    const desc = document.createElement('div');
    desc.className = 'timeline-desc';
    desc.textContent = event.desc;
    item.appendChild(time);
    item.appendChild(title);
    item.appendChild(desc);
    if (event.chip) {
      const chip = document.createElement('a');
      chip.className = 'timeline-chip';
      const url = (event.chip.url || '').trim();
      // Only set the href if it appears to be an http(s) URL; otherwise fall back to a hash to prevent javascript: injection
      if (/^https?:\/\//i.test(url)) {
        chip.href = url;
      } else {
        chip.href = '#';
      }
      chip.target = '_blank';
      chip.rel = 'noopener noreferrer';
      chip.textContent = event.chip.text;
      item.appendChild(chip);
    }
    container.appendChild(item);
  });
}

// RSVP logic
function createGuestRow(selectedName = '') {
  // Container for this guest row (vertical layout)
  const row = document.createElement('div');
  row.className = 'guest-row';

  // Top row containing select and remove button
  const mainDiv = document.createElement('div');
  mainDiv.className = 'guest-row-main';
  row.appendChild(mainDiv);

  const select = document.createElement('select');
  select.required = true;
  // Default option
  const defaultOpt = document.createElement('option');
  defaultOpt.value = '';
  defaultOpt.textContent = 'Select guest';
  defaultOpt.disabled = true;
  defaultOpt.selected = !selectedName;
  select.appendChild(defaultOpt);
  // Populate all guests and mark selected one
  guestList.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g.name;
    opt.textContent = g.name;
    if (g.name === selectedName) opt.selected = true;
    select.appendChild(opt);
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = '×';
  removeBtn.addEventListener('click', () => {
    row.remove();
    updateShuttleVisibility();
    updateGuestDetailsVisibility();
    // When a row is removed, update option availability
    updateSelectOptions();
  });

  mainDiv.appendChild(select);
  mainDiv.appendChild(removeBtn);

  // Per‑guest details container (hidden by default for single guest)
  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'guest-details';

  // Dietary input
  const dietInput = document.createElement('input');
  dietInput.type = 'text';
  dietInput.className = 'diet-input';
  dietInput.placeholder = 'Dietary requirements (optional)';
  detailsDiv.appendChild(dietInput);

  // Reception shuttle option (only for reception‑only guests)
  const shuttle1Container = document.createElement('div');
  const shuttle1Checkbox = document.createElement('input');
  shuttle1Checkbox.type = 'checkbox';
  shuttle1Checkbox.className = 'shuttle1-checkbox';
  const shuttle1Label = document.createElement('label');
  shuttle1Label.appendChild(shuttle1Checkbox);
  shuttle1Label.appendChild(document.createTextNode(' Reception shuttle'));
  shuttle1Container.appendChild(shuttle1Label);
  detailsDiv.appendChild(shuttle1Container);

  // Late-night shuttle option with drop-off address
  const lateContainer = document.createElement('div');
  const lateCheckbox = document.createElement('input');
  lateCheckbox.type = 'checkbox';
  lateCheckbox.className = 'late-checkbox';
  const lateLabel = document.createElement('label');
  lateLabel.appendChild(lateCheckbox);
  lateLabel.appendChild(document.createTextNode(' Late-night shuttle'));
  lateContainer.appendChild(lateLabel);
  // Drop-off input
  const dropoffInput = document.createElement('input');
  dropoffInput.type = 'text';
  dropoffInput.className = 'dropoff-input';
  dropoffInput.placeholder = 'Drop-off address (optional)';
  dropoffInput.classList.add('hidden');
  lateContainer.appendChild(dropoffInput);
  lateCheckbox.addEventListener('change', () => {
    if (lateCheckbox.checked) {
      dropoffInput.classList.remove('hidden');
    } else {
      dropoffInput.classList.add('hidden');
      dropoffInput.value = '';
    }
  });
  detailsDiv.appendChild(lateContainer);

  row.appendChild(detailsDiv);

  // Helper to show/hide reception shuttle option based on selected guest
  function updateRowShuttleVisibility() {
    const val = select.value;
    const guest = guestList.find(g => g.name === val);
    if (guest && !guest.ceremony) {
      shuttle1Container.classList.remove('hidden');
    } else {
      shuttle1Checkbox.checked = false;
      shuttle1Container.classList.add('hidden');
    }
  }
  // Initialise shuttle visibility
  updateRowShuttleVisibility();

  // Listen for changes on select to update shuttle visibility and refresh options
  select.addEventListener('change', () => {
    updateShuttleVisibility();
    updateRowShuttleVisibility();
    updateGuestDetailsVisibility();
    updateSelectOptions();
  });

  return row;
}

function updateShuttleVisibility() {
  // Determine if any selected guest is reception-only (ceremony flag false)
  const rows = document.querySelectorAll('.guest-row select');
  let showShuttle1 = false;
  rows.forEach(sel => {
    const val = sel.value;
    if (!val) return;
    const guest = guestList.find(g => g.name === val);
    if (guest && !guest.ceremony) {
      showShuttle1 = true;
    }
  });
  const container = document.getElementById('shuttle1Container');
  // Reset shuttle1 checkbox when hiding
  const shuttle1Checkbox = document.getElementById('shuttle1');
  if (showShuttle1) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
    if (shuttle1Checkbox) shuttle1Checkbox.checked = false;
  }
}

// Disable options for guests who have already RSVPed or are selected in other rows.
// This function iterates over all guest selectors and disables names that
// should not be selectable. Responded names (saved in localStorage) remain
// visible but are disabled, and names already chosen in another row are
// disabled in all other selectors. When a row is removed or added this
// function should be called to refresh the available options.
function updateSelectOptions() {
  // Gather names that have already responded (persisted in local storage)
  let responded = new Set();
  try {
    const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
    rsvps.forEach(entry => {
      entry.names.forEach(name => responded.add(name));
    });
  } catch (e) {
    responded = new Set();
  }
  // Gather currently selected names within the form
  const selects = document.querySelectorAll('.guest-row select');
  const selectedNames = new Set();
  selects.forEach(sel => {
    if (sel.value) selectedNames.add(sel.value);
  });
  // Update each option accordingly
  selects.forEach(sel => {
    const currentVal = sel.value;
    sel.querySelectorAll('option').forEach(opt => {
      // skip placeholder option
      if (opt.value === '') return;
      const name = opt.value;
      // responded names or names selected in other rows (not current)
      if (responded.has(name) || (selectedNames.has(name) && name !== currentVal)) {
        opt.disabled = true;
      } else {
        opt.disabled = false;
      }
    });
  });
}

// Toggle per‑guest detail visibility and global field visibility based on number of guests
function updateGuestDetailsVisibility() {
  const rows = document.querySelectorAll('.guest-row');
  const single = rows.length <= 1;
  // Show/hide per‑guest details
  rows.forEach(row => {
    const details = row.querySelector('.guest-details');
    if (!details) return;
    if (single) {
      details.classList.add('hidden');
    } else {
      details.classList.remove('hidden');
    }
  });
  // Hide global diet and shuttle groups if multiple guests
  // Diet group: find parent .form-group of the diet input
  const dietInput = document.getElementById('diet');
  if (dietInput) {
    const group = dietInput.closest('.form-group');
    if (group) {
      if (single) {
        group.classList.remove('hidden');
      } else {
        group.classList.add('hidden');
        // Clear value so it doesn't persist
        dietInput.value = '';
      }
    }
  }
  // Late shuttle group: includes checkbox and drop-off container
  const lateShuttleInput = document.getElementById('lateShuttle');
  if (lateShuttleInput) {
    const group = lateShuttleInput.closest('.form-group');
    if (group) {
      if (single) {
        group.classList.remove('hidden');
      } else {
        group.classList.add('hidden');
        // Reset
        lateShuttleInput.checked = false;
        const dropoff = document.getElementById('dropoff');
        if (dropoff) dropoff.value = '';
        const addr = document.getElementById('lateShuttleAddress');
        if (addr) addr.classList.add('hidden');
      }
    }
  }
  // Shuttle1 container (reception shuttle) global
  const shuttle1Container = document.getElementById('shuttle1Container');
  if (shuttle1Container) {
    if (single) {
      // Determine if any selected guest is reception-only and global container should show
      updateShuttleVisibility();
    } else {
      shuttle1Container.classList.add('hidden');
      const cb = document.getElementById('shuttle1');
      if (cb) cb.checked = false;
    }
  }
}

function handleBringGuestToggle() {
  const bringGuest = document.querySelector('input[name="bringGuest"]:checked').value;
  const addBtn = document.getElementById('addGuestBtn');
  const guestContainer = document.getElementById('guestListContainer');
  if (bringGuest === 'yes') {
    addBtn.classList.remove('hidden');
    // ensure at least 2 rows
    if (guestContainer.children.length < 2) {
      guestContainer.appendChild(createGuestRow());
    }
  } else {
    addBtn.classList.add('hidden');
    // remove extra rows beyond first
    while (guestContainer.children.length > 1) {
      guestContainer.removeChild(guestContainer.lastElementChild);
    }
  }
  updateShuttleVisibility();
  updateGuestDetailsVisibility();
  // Refresh option availability whenever bring guest toggle changes
  updateSelectOptions();
}

function handleLateShuttleToggle() {
  const checked = document.getElementById('lateShuttle').checked;
  const addressContainer = document.getElementById('lateShuttleAddress');
  if (checked) {
    addressContainer.classList.remove('hidden');
  } else {
    addressContainer.classList.add('hidden');
    document.getElementById('dropoff').value = '';
  }
}

function handleAddGuest() {
  const container = document.getElementById('guestListContainer');
  container.appendChild(createGuestRow());
  updateGuestDetailsVisibility();
  // Update option availability after adding a new row
  updateSelectOptions();
}

function getRsvps() {
  return JSON.parse(localStorage.getItem('rsvps') || '[]');
}


/**
 * Upload the current RSVPs array to GitHub as rsvps.json. This function
 * mirrors uploadSiteSettings() but writes the RSVP entries instead. A
 * personal access token must be stored under the key `githubToken` in
 * localStorage for this to work. If no token is present, the upload is
 * skipped. Errors are logged but do not interrupt the user flow.
 */
async function uploadRsvps() {
  const token = localStorage.getItem('githubToken');
  if (!token) {
    return; // no token, skip upload
  }
  const owner = 'zacgialanze';
  const repo = 'newnew-site';
  const path = 'rsvps.json';
  try {
    // Fetch current file SHA
    const getResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: {
        'Authorization': 'token ' + token,
        'Accept': 'application/vnd.github+json'
      }
    });
    let sha;
    if (getResp.ok) {
      const getData = await getResp.json();
      sha = getData.sha;
    }
    // Prepare new content
    const rsvps = getRsvps();
    const json = JSON.stringify(rsvps, null, 2);
    const content = btoa(unescape(encodeURIComponent(json)));
    const payload = {
      message: 'Update RSVP entries via site',
      content: content
    };
    if (sha) payload.sha = sha;
    const putResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': 'token ' + token,
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify(payload)
    });
    if (!putResp.ok) {
      console.error('Failed to upload RSVPs:', putResp.status);
    }
  } catch (e) {
    console.error('Error uploading RSVPs', e);
  }
}


function saveRsvps(rsvps) {
  try {
    localStorage.setItem('rsvps', JSON.stringify(rsvps));
  } catch (e) {
    console.warn('Could not save RSVPs:', e);
  }

  // Send the most recent RSVP to Google Sheets
  const last = rsvps[rsvps.length - 1];
  if (last) {
    sendRsvpToSheets(last);
  }

  // Persist RSVPs to GitHub when a token is present
  try {
    uploadRsvps();
  } catch (err) {
    console.error('Failed to upload RSVPs', err);
  }

  // Confetti celebration (robust loader)
  (function fireConfetti() {
    try {
      if (window.confetti) {
        window.confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
        return;
      }
    } catch (e) {}
    try {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
      s.onload = function () {
        try { window.confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } }); } catch (e) {}
      };
      document.head.appendChild(s);
    } catch (e) {
      console.warn('Confetti failed to load:', e);
    }
  })();
}



function handleFormSubmit(event) {
  event.preventDefault();
  const names = [];
  document.querySelectorAll('.guest-row select').forEach(sel => {
    if (sel.value) names.push(sel.value);
  });
  if (names.length === 0) {
    alert('Please select at least one guest');
    return;
  }
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const bringGuest = document.querySelector('input[name="bringGuest"]:checked').value;
  const song = document.getElementById('song').value.trim();
  const message = document.getElementById('message').value.trim();

  // Build per‑guest details if multiple guests; for a single guest, we still capture row‑level fields if visible
  const guestsDetails = [];
  document.querySelectorAll('.guest-row').forEach(row => {
    const sel = row.querySelector('select');
    const name = sel && sel.value ? sel.value : '';
    if (!name) return;
    const dietInput = row.querySelector('.diet-input');
    const dietVal = dietInput ? dietInput.value.trim() : '';
    const shuttle1Checkbox = row.querySelector('.shuttle1-checkbox');
    const shuttle1Val = shuttle1Checkbox ? shuttle1Checkbox.checked : false;
    const lateCheckbox = row.querySelector('.late-checkbox');
    const lateVal = lateCheckbox ? lateCheckbox.checked : false;
    const dropoffInput = row.querySelector('.dropoff-input');
    const dropoffVal = dropoffInput ? dropoffInput.value.trim() : '';
    guestsDetails.push({ name, diet: dietVal, shuttle1: shuttle1Val, lateShuttle: lateVal, dropoff: dropoffVal });
  });

  // Aggregate details for backwards compatibility in admin display
  let dietAggregate = '';
  let shuttle1 = false;
  let lateShuttle = false;
  let dropoffAggregate = '';
  if (guestsDetails.length > 0) {
    dietAggregate = guestsDetails.map(g => g.diet).filter(Boolean).join('; ');
    shuttle1 = guestsDetails.some(g => g.shuttle1);
    lateShuttle = guestsDetails.some(g => g.lateShuttle);
    dropoffAggregate = guestsDetails.map(g => g.dropoff).filter(Boolean).join('; ');
  } else {
    // Fallback to global fields if no per‑guest details collected
    const dietGlobal = document.getElementById('diet');
    dietAggregate = dietGlobal ? dietGlobal.value.trim() : '';
    const lateGlobal = document.getElementById('lateShuttle');
    lateShuttle = lateGlobal ? lateGlobal.checked : false;
    const dropoffGlobal = document.getElementById('dropoff');
    dropoffAggregate = dropoffGlobal ? dropoffGlobal.value.trim() : '';
    // Determine shuttle1 global
    let anyReceptionOnly = false;
    names.forEach(name => {
      const g = guestList.find(p => p.name === name);
      if (g && !g.ceremony) {
        anyReceptionOnly = true;
      }
    });
    if (anyReceptionOnly) {
      const shuttle1Cb = document.getElementById('shuttle1');
      if (shuttle1Cb && shuttle1Cb.checked) shuttle1 = true;
    }
  }

  const rsvps = getRsvps();
  const newEntry = {
    id: Date.now(),
    names,
    attendance,
    bringGuest,
    shuttle1,
    lateShuttle,
    dropoff: dropoffAggregate,
    song,
    diet: dietAggregate,
    message,
    guestsDetails,
    timestamp: new Date().toISOString()
  };
  rsvps.push(newEntry);
  saveRsvps(rsvps);
  // Reset form
  document.getElementById('rsvpForm').reset();
  // Remove any existing guest selection rows and rebuild a fresh row
  const guestContainer = document.getElementById('guestListContainer');
  // Clear all rows so the next row will rebuild options excluding responded names
  while (guestContainer.firstChild) {
    guestContainer.removeChild(guestContainer.firstChild);
  }
  // Append a new guest row which will exclude already responded names
  guestContainer.appendChild(createGuestRow());
  // Hide the add guest button by default until bringGuest is toggled to yes
  document.getElementById('addGuestBtn').classList.add('hidden');
  // Reset conditional visibility
  updateShuttleVisibility();
  handleLateShuttleToggle();
  // Reset bring guest toggle (default no); ensures correct UI state
  document.querySelector('input[name="bringGuest"][value="no"]').checked = true;
  handleBringGuestToggle();
  // Confirmation: show a simple message under the form and pop up confetti
  const conf = document.getElementById('rsvpConfirmation');
  if (conf) {
    conf.textContent = 'Thank you! Your RSVP has been recorded.';
    conf.classList.remove('hidden');
  }
  renderAdmin();
  // Show the celebratory popup with confetti. The Everest Love Run game is on a
  // separate page, so we call this immediately.
  if (typeof window.showRsvpConfirmation === 'function') {
    window.showRsvpConfirmation();
  }
}

// Admin logic
function renderAdmin() {
  const adminContent = document.getElementById('adminContent');
  if (!adminContent || adminContent.classList.contains('hidden')) return;
  const rsvps = getRsvps();
  // Prepare data
  let declined = [];
  let shuttle1Roster = [];
  let shuttle2Roster = [];
  let songList = [];
  const respondedNames = new Set();
  // RSVP entries container
  const entriesContainer = document.getElementById('rsvpEntries');
  if (entriesContainer) entriesContainer.innerHTML = '';
  rsvps.forEach(entry => {
    // Track responded names
    entry.names.forEach(name => respondedNames.add(name));
    // Populate RSVP entries box. Each entry is rendered as a collapsible card
    // containing a header with summary information and a details section that
    // expands on click. This reduces vertical space when there are many groups.
    if (entriesContainer) {
      const entryDiv = document.createElement('div');
      // Start collapsed to save space
      entryDiv.className = 'entry-box collapsed';
      // Header summarising the RSVP entry
      const header = document.createElement('div');
      header.className = 'entry-header';
      // Summarise names: if more than two, display first two and count of remaining
      const namesSpan = document.createElement('span');
      namesSpan.className = 'group-names';
      if (entry.names.length > 2) {
        const displayed = entry.names.slice(0, 2).join(', ');
        namesSpan.textContent = `${displayed} + ${entry.names.length - 2} more`;
      } else {
        namesSpan.textContent = entry.names.join(', ');
      }
      header.appendChild(namesSpan);
      // Build a summary line with key data points
      const summary = document.createElement('div');
      summary.className = 'summary';
      // Attendance
      const attendSpan = document.createElement('span');
      attendSpan.textContent = entry.attendance === 'yes' ? 'Attending' : 'Declined';
      summary.appendChild(attendSpan);
      // Guest count
      const countSpan = document.createElement('span');
      countSpan.textContent = `${entry.names.length} guest${entry.names.length > 1 ? 's' : ''}`;
      summary.appendChild(countSpan);
      // Reception shuttle summary
      const sh1Span = document.createElement('span');
      sh1Span.textContent = `Reception shuttle: ${entry.shuttle1 ? 'Yes' : 'No'}`;
      summary.appendChild(sh1Span);
      // Late-night shuttle summary
      const lateSpan = document.createElement('span');
      lateSpan.textContent = `Late shuttle: ${entry.lateShuttle ? 'Yes' : 'No'}`;
      summary.appendChild(lateSpan);
      header.appendChild(summary);
      // Toggle arrow
      const toggle = document.createElement('span');
      toggle.className = 'entry-toggle';
      toggle.textContent = '▾';
      header.appendChild(toggle);
      // Click to toggle collapse
      header.addEventListener('click', () => {
        entryDiv.classList.toggle('collapsed');
      });
      entryDiv.appendChild(header);
      // Details section: replicate aggregated list and per‑guest table
      const details = document.createElement('div');
      details.className = 'entry-details';
      // Aggregated list
      const list = document.createElement('ul');
      // Attendance
      const liAttend = document.createElement('li');
      liAttend.innerHTML = `<strong>Attendance:</strong> ${entry.attendance === 'yes' ? 'Yes' : 'No'}`;
      list.appendChild(liAttend);
      // Total guests count
      const liCount = document.createElement('li');
      liCount.innerHTML = `<strong>Number of Guests:</strong> ${entry.names.length}`;
      list.appendChild(liCount);
      // Reception shuttle (aggregated)
      const liShuttle1 = document.createElement('li');
      liShuttle1.innerHTML = `<strong>Reception Shuttle:</strong> ${entry.shuttle1 ? 'Yes' : 'No'}`;
      list.appendChild(liShuttle1);
      // Late-night shuttle (aggregated) and drop-off
      const liLate = document.createElement('li');
      let lateText = entry.lateShuttle ? 'Yes' : 'No';
      if (entry.lateShuttle && entry.dropoff) lateText += ` (Drop-off: ${entry.dropoff})`;
      liLate.innerHTML = `<strong>Late-night Shuttle:</strong> ${lateText}`;
      list.appendChild(liLate);
      // Song suggestion
      if (entry.song) {
        const liSong = document.createElement('li');
        liSong.innerHTML = `<strong>Song Suggestion:</strong> ${entry.song}`;
        list.appendChild(liSong);
      }
      // Dietary requirements (aggregated)
      if (entry.diet) {
        const liDiet = document.createElement('li');
        liDiet.innerHTML = `<strong>Dietary:</strong> ${entry.diet}`;
        list.appendChild(liDiet);
      }
      // Personal message
      if (entry.message) {
        const liMsg = document.createElement('li');
        liMsg.innerHTML = `<strong>Message:</strong> ${entry.message}`;
        list.appendChild(liMsg);
      }
      details.appendChild(list);
      // Per‑guest table if details exist. Show each guest’s name, diet and shuttle selections.
      if (Array.isArray(entry.guestsDetails) && entry.guestsDetails.length > 0) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const thr = document.createElement('tr');
        ['Name', 'Diet', 'Reception Shuttle', 'Late-night Shuttle', 'Drop-off'].forEach(headTxt => {
          const th = document.createElement('th');
          th.textContent = headTxt;
          thr.appendChild(th);
        });
        thead.appendChild(thr);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        entry.guestsDetails.forEach(gd => {
          const tr = document.createElement('tr');
          // Name
          const tdName = document.createElement('td');
          tdName.textContent = gd.name || '';
          tr.appendChild(tdName);
          // Diet
          const tdDiet = document.createElement('td');
          tdDiet.textContent = gd.diet || '-';
          tr.appendChild(tdDiet);
          // Reception shuttle
          const tdSh1 = document.createElement('td');
          tdSh1.textContent = gd.shuttle1 ? 'Yes' : 'No';
          tr.appendChild(tdSh1);
          // Late‑night shuttle
          const tdLate = document.createElement('td');
          tdLate.textContent = gd.lateShuttle ? 'Yes' : 'No';
          tr.appendChild(tdLate);
          // Drop‑off
          const tdDrop = document.createElement('td');
          tdDrop.textContent = gd.dropoff || '-';
          tr.appendChild(tdDrop);
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        details.appendChild(table);
      }
      entryDiv.appendChild(details);
      entriesContainer.appendChild(entryDiv);
    }
    // Build rosters and lists
    if (entry.attendance === 'yes') {
      // Use per‑guest details if present
      if (Array.isArray(entry.guestsDetails) && entry.guestsDetails.length > 0) {
        entry.guestsDetails.forEach(gd => {
          const gObj = guestList.find(p => p.name === gd.name);
          // reception shuttle roster: only for reception‑only guests
          if (gd.shuttle1 && gObj && !gObj.ceremony) {
            shuttle1Roster.push(gd.name);
          }
          if (gd.lateShuttle) {
            const text = gd.dropoff ? `${gd.name} (${gd.dropoff})` : gd.name;
            shuttle2Roster.push(text);
          }
        });
      } else {
        // Fallback to aggregated flags
        if (entry.shuttle1) {
          shuttle1Roster = shuttle1Roster.concat(entry.names.filter(name => {
            const g = guestList.find(p => p.name === name);
            return g && !g.ceremony;
          }));
        }
        if (entry.lateShuttle) {
          const namesWithAddress = entry.names.map(name => entry.dropoff ? `${name} (${entry.dropoff})` : name);
          shuttle2Roster = shuttle2Roster.concat(namesWithAddress);
        }
      }
    } else if (entry.attendance === 'no') {
      declined = declined.concat(entry.names);
    }
    if (entry.song) {
      const nameString = entry.names.join(' & ');
      songList.push(`${nameString}: ${entry.song}`);
    }
  });
  // Determine pending RSVPs (not responded)
  const pending = guestList
    .filter(g => !respondedNames.has(g.name))
    .map(g => g.name)
    .sort((a,b) => a.localeCompare(b));
  // Sort lists alphabetically
  declined.sort((a,b) => a.localeCompare(b));
  shuttle1Roster.sort((a,b) => a.localeCompare(b));
  shuttle2Roster.sort((a,b) => a.localeCompare(b));
  songList.sort();
  // Populate declined list
  const declinedList = document.getElementById('declinedList');
  if (declinedList) {
    declinedList.innerHTML = '';
    declined.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      declinedList.appendChild(li);
    });
  }
  // Populate pending (remaining) list
  const pendingList = document.getElementById('pendingList');
  if (pendingList) {
    pendingList.innerHTML = '';
    pending.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      pendingList.appendChild(li);
    });
  }
  // Populate shuttle rosters
  const shuttle1List = document.getElementById('shuttle1List');
  if (shuttle1List) {
    shuttle1List.innerHTML = '';
    shuttle1Roster.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      shuttle1List.appendChild(li);
    });
  }
  const shuttle2List = document.getElementById('shuttle2List');
  if (shuttle2List) {
    shuttle2List.innerHTML = '';
    shuttle2Roster.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      shuttle2List.appendChild(li);
    });
  }
  // Populate songs list
  const songsListEl = document.getElementById('songsList');
  if (songsListEl) {
    songsListEl.innerHTML = '';
    songList.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      songsListEl.appendChild(li);
    });
  }

  // Populate game high scores list
  const highScoresListEl = document.getElementById('highScoresList');
  if (highScoresListEl) {
    highScoresListEl.innerHTML = '';
    let highScores = [];
    try {
      highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    } catch (e) {
      highScores = [];
    }
    highScores.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = entry.names + ': ' + entry.score;
      highScoresListEl.appendChild(li);
    });
  }
  // Raw entries (hidden element) if exists
  const rawPre = document.getElementById('rawEntries');
  if (rawPre) {
    rawPre.textContent = JSON.stringify(rsvps, null, 2);
  }
}

function handleAdminLogin() {
  const pass = document.getElementById('sitePassword').value;
  const key = document.getElementById('adminKey').value;
  const error = document.getElementById('adminError');

  if (pass === 'love' && key === 'evol') {
    document.getElementById('adminLogin').classList.add('hidden');
    document.getElementById('adminContent').classList.remove('hidden');
    error.classList.add('hidden');
    renderAdmin();

    fetchRsvpsFromSheets().then(data => {
      // Only update if there are actual RSVPs to import
      if (Array.isArray(data) && data.length > 0) {
        localStorage.setItem('rsvps', JSON.stringify(data));
        renderAdmin();
      }
    });
  } else {
    // Show an explicit error message when credentials do not match
    error.textContent = 'Incorrect password or key.';
    error.classList.remove('hidden');
  }
}


    // Initialize the unified content editor. This replaces the old details editor.
    if (typeof initContentEditor === 'function') {
      initContentEditor();
    }
    // Initialise the program timeline editor (hybrid row editor)
    if (typeof initProgramEditor === 'function') {
      initProgramEditor();
    }
    // Hook up Add Event button to insert a new blank row
    const addEventBtn = document.getElementById('addEventBtn');
    if (addEventBtn && typeof addEventRow === 'function') {
      addEventBtn.removeEventListener('click', addEventRow);
      addEventBtn.addEventListener('click', addEventRow);
    }
    // Hook up the Save All button to commit content, program and design changes
    const saveAllBtn = document.getElementById('saveAllBtn');
    if (saveAllBtn && typeof saveAllChanges === 'function') {
      saveAllBtn.removeEventListener('click', saveAllChanges);
      saveAllBtn.addEventListener('click', saveAllChanges);
    }

    // Persist GitHub personal access token into localStorage if provided. This
    // allows the site to push updates back to the repository via the GitHub
    // API when saving changes. The token is stored only in the current
    // browser; it is not transmitted elsewhere by the application. See the
    // README for details on generating a PAT.
    const tokenInput = document.getElementById('githubToken');
    if (tokenInput && tokenInput.value) {
      try {
        localStorage.setItem('githubToken', tokenInput.value);
      } catch (e) {
        console.error('Failed to store GitHub token', e);
      }
    }
    // Load RSVP entries from the shared rsvps.json file when logging in. This
    // synchronises RSVP data across devices. We append a cache‑busting
    // parameter to force the CDN to fetch the latest file. If the fetch
    // succeeds and returns an array, we update localStorage and refresh the
    // admin view so the latest RSVPs appear. Network errors or missing files
    // are ignored to preserve local data.
    try {
      fetch('rsvps.json?v=' + Date.now())
        .then(resp => resp.ok ? resp.json() : null)
        .then(data => {
          if (Array.isArray(data)) {
            localStorage.setItem('rsvps', JSON.stringify(data));
            // re-render the admin panel with the updated RSVPs
            renderAdmin();
          }
        })
        .catch(() => { /* ignore fetch errors */ });
    } catch (e) {
      console.warn('Failed to fetch remote RSVPs', e);
    }
    // Also hide or detach any legacy save buttons (details/program) if present. This prevents duplicate saves.
    const oldDetailsBtn = document.getElementById('saveDetailsBtn');
    if (oldDetailsBtn) {
      oldDetailsBtn.style.display = 'none';
      oldDetailsBtn.removeEventListener('click', saveDetails);
    }
    const oldProgramBtn = document.getElementById('saveProgramBtn');
    if (oldProgramBtn) {
      oldProgramBtn.style.display = 'none';
      oldProgramBtn.removeEventListener('click', saveProgramEvents);
    }
    // Hide legacy Save Settings button from designer tools; saving is handled via Save All
    const settingsBtn = document.getElementById('saveSettingsBtn');
    if (settingsBtn) {
      settingsBtn.style.display = 'none';
      settingsBtn.removeEventListener('click', saveSiteSettings);
    }
    // Removed stray else block that previously displayed login errors.

function exportCsv() {
  const rsvps = getRsvps();
  if (!rsvps.length) {
    alert('No RSVPs to export');
    return;
  }
  const headers = ['Names','Attendance','BringGuest','Shuttle1','LateShuttle','Dropoff','Song','Message','Timestamp'];
  const rows = rsvps.map(entry => {
    return [
      entry.names.join(' & '),
      entry.attendance,
      entry.bringGuest,
      entry.shuttle1,
      entry.lateShuttle,
      entry.dropoff || '',
      entry.song || '',
      entry.message || '',
      entry.timestamp
    ].map(val => `"${String(val).replace(/"/g,'""')}"`).join(',');
  });
  const csvContent = headers.join(',') + '\n' + rows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'rsvps.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Export song suggestions as a CSV containing the names (group) and the song
// suggestion. This allows the couple or DJ to easily collate requests.
function exportSongsCsv() {
  const rsvps = getRsvps();
  const rows = [];
  rsvps.forEach(entry => {
    if (entry.song) {
      rows.push([
        entry.names.join(' & '),
        entry.song
      ]);
    }
  });
  if (!rows.length) {
    alert('No song suggestions to export');
    return;
  }
  const headers = ['Names','Song'];
  const csvContent = headers.join(',') + '\n' + rows.map(row => row.map(val => {
    return '"' + String(val).replace(/"/g,'""') + '"';
  }).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'song_suggestions.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  // Also open the CSV content in a new window/tab so it can be viewed without
  // requiring spreadsheet software. This uses a data URL to render the CSV
  // directly in the browser.
  const viewUrl = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
  window.open(viewUrl, '_blank');
}

// Export shuttle rosters as a CSV. Each row contains a guest name and their
// selections for reception shuttle, late‑night shuttle and drop‑off address.
// If per‑guest details are available they are used; otherwise aggregated flags
// and a common drop‑off are applied to each name.
function exportShuttlesCsv() {
  const rsvps = getRsvps();
  const rows = [];
  rsvps.forEach(entry => {
    // Only export attendees
    if (entry.attendance !== 'yes') return;
    if (Array.isArray(entry.guestsDetails) && entry.guestsDetails.length > 0) {
      entry.guestsDetails.forEach(gd => {
        // Skip guests who are not using any shuttle
        const usesReception = !!gd.shuttle1;
        const usesLate = !!gd.lateShuttle;
        if (!usesReception && !usesLate) return;
        rows.push([
          gd.name,
          usesReception ? 'Yes' : 'No',
          usesLate ? 'Yes' : 'No',
          gd.dropoff || ''
        ]);
      });
    } else {
      // Fallback: use aggregated flags for each guest name
      entry.names.forEach(name => {
        // Skip if neither shuttle is selected for this group
        const usesReception = !!entry.shuttle1;
        const usesLate = !!entry.lateShuttle;
        if (!usesReception && !usesLate) return;
        rows.push([
          name,
          usesReception ? 'Yes' : 'No',
          usesLate ? 'Yes' : 'No',
          entry.dropoff || ''
        ]);
      });
    }
  });
  if (!rows.length) {
    alert('No shuttle information to export');
    return;
  }
  const headers = ['Name','Reception Shuttle','Late-night Shuttle','Drop-off'];
  const csvContent = headers.join(',') + '\n' + rows.map(row => row.map(val => {
    return '"' + String(val).replace(/"/g,'""') + '"';
  }).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'shuttle_roster.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  // Also open the CSV content in a new window/tab so it can be viewed without
  // requiring spreadsheet software.
  const viewUrl = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
  window.open(viewUrl, '_blank');
}

function clearRsvps() {
  if (!confirm('Are you sure you want to clear all RSVPs?')) return;
  localStorage.removeItem('rsvps');
  renderAdmin();
}

// Simple Everest Love Run game
let gameInterval;
let gameRunning = false;
let player;
let hearts;
let score;
// Array to hold additional decorative elements like climbers, birds and animals
let decorations;

// Background image for the Everest scene
// Use a higher resolution image to give the impression of actually climbing Mt Everest.
let everestImg;
let everestLoaded = false;

// Additional background images for later stages
// UK flag (represents flying over the UK) and Australia flag
let ukImg;
let ukLoaded = false;
let ausImg;
let ausLoaded = false;

// Stage control variables
// stageIndex: 0 = Everest climb, 1 = flying over the UK, 2 = flying over Australia
let stageIndex;
// elapsedTime tracks the time spent in the current stage (milliseconds)
let elapsedTime;
// backgroundOffsetY controls vertical scrolling of the current background
let backgroundOffsetY;
// Durations for each stage in milliseconds
// Durations for each stage in milliseconds. Shorter durations allow players to experience
// all stages without needing to survive too long. Feel free to adjust these values.
const stageDurations = [15000, 10000, 10000];

// Helper to draw a gradient background reminiscent of Mt Everest (blue sky fading to white snow)
function drawEverestBackground(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  // sky at the top
  gradient.addColorStop(0, '#87CEEB'); // sky blue
  gradient.addColorStop(0.5, '#b3d9ff');
  // snowy base at the bottom
  gradient.addColorStop(1, '#ffffff');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

// Helper to draw a yellow Ford Transit van. When wings=true, small wings are added to imply flight.
function drawVan(ctx, x, y, w, h, wings = false) {
  // Body of the van
  ctx.fillStyle = '#FFD700'; // bright yellow
  ctx.fillRect(x, y, w, h);
  // Windows
  ctx.fillStyle = '#BBDEFB';
  const windowHeight = h * 0.5;
  const windowWidth = w * 0.25;
  ctx.fillRect(x + w * 0.1, y + h * 0.15, windowWidth, windowHeight);
  ctx.fillRect(x + w * 0.45, y + h * 0.15, windowWidth, windowHeight);
  // Wheels
  ctx.fillStyle = '#333';
  const wheelRadius = h * 0.25;
  ctx.beginPath();
  ctx.arc(x + w * 0.2, y + h + wheelRadius * 0.1, wheelRadius, 0, Math.PI * 2);
  ctx.arc(x + w * 0.8, y + h + wheelRadius * 0.1, wheelRadius, 0, Math.PI * 2);
  ctx.fill();
  // Wings if flying
  if (wings) {
    ctx.fillStyle = '#E0E0E0';
    // left wing
    ctx.beginPath();
    ctx.moveTo(x + w * 0.25, y);
    ctx.lineTo(x + w * 0.15, y - h * 0.5);
    ctx.lineTo(x + w * 0.35, y);
    ctx.closePath();
    ctx.fill();
    // right wing
    ctx.beginPath();
    ctx.moveTo(x + w * 0.75, y);
    ctx.lineTo(x + w * 0.65, y - h * 0.5);
    ctx.lineTo(x + w * 0.85, y);
    ctx.closePath();
    ctx.fill();
  }
}

function startGame() {
  if (gameRunning) return;
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  // Load Everest background image on first play
  if (!everestImg) {
    everestImg = new Image();
    // Once loaded set the flag so the image is used for scrolling
    everestImg.onload = function () {
      everestLoaded = true;
    };
    // Use the new high‑resolution Everest photo to provide an authentic climbing feel
    everestImg.src = 'images/mount_everest.jpg';
  }
  // Load UK and Australia backgrounds on first play
  if (!ukImg) {
    ukImg = new Image();
    ukImg.onload = function () {
      ukLoaded = true;
    };
    ukImg.src = 'images/uk_flag.png';
  }
  if (!ausImg) {
    ausImg = new Image();
    ausImg.onload = function () {
      ausLoaded = true;
    };
    ausImg.src = 'images/australia_flag.png';
  }
  // Initialize stage control variables
  stageIndex = 0;
  elapsedTime = 0;
  backgroundOffsetY = 0;
  // player object: represent a yellow Ford Transit van (wider than tall)
  player = { x: width / 2 - 30, y: height - 60, w: 60, h: 30, speed: 5 };
  hearts = [];
  // Clear previous decorations and reset
  decorations = [];
  score = 0;
  gameRunning = true;
  // controls
  const keys = { left: false, right: false };
  function keyDown(e) {
    if (e.key === 'ArrowLeft') keys.left = true;
    if (e.key === 'ArrowRight') keys.right = true;
  }
  function keyUp(e) {
    if (e.key === 'ArrowLeft') keys.left = false;
    if (e.key === 'ArrowRight') keys.right = false;
  }
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);
  // spawn hearts
  function spawnHeart() {
    const heart = {
      x: Math.random() * (width - 20),
      y: -20,
      size: 24 + Math.random() * 10,
      speed: 1.5 + Math.random() * 2
    };
    hearts.push(heart);
  }
  // collision detection
  function intersects(a, b) {
    return !(a.x > b.x + b.size || a.x + a.w < b.x || a.y > b.y + b.size || a.y + a.h < b.y);
  }
  let lastSpawn = 0;
  // Wait a short grace period before spawning the first hearts so the player has time to begin moving.
  const heartSpawnDelay = 2000; // milliseconds
  // Additionally, wait a bit longer before enabling collision detection so the first few hearts don't immediately end the game.
  const collisionDelay = 3000; // milliseconds
  // track previous timestamp to compute delta time for stage transitions
  let prevTimestamp = 0;

  // Track last time a decorative element was spawned
  let lastDecorationSpawn = 0;
  // Intervals for decoration spawning per stage (in ms). Adjust to control density of extra visuals.
  const decorationIntervals = [1200, 1400, 1400];

  /**
   * Spawn a decorative emoji element to add life to the background. Each stage
   * has its own set of appropriate icons: climbers and mountains on Everest,
   * birds and UK‑themed icons when flying over Britain, and Aussie wildlife
   * for the final stage. Decorations are not hazardous – they simply drift
   * downward alongside the hearts.
   */
  function spawnDecoration() {
    const emojiSets = [
      // Stage 0: Everest climb – climbers, mountains and compasses
      ['🧗', '🧗‍♂️', '🧗‍♀️', '🏔️', '🧭'],
      // Stage 1: UK flight – birds, planes, bridges and castles
      ['🕊️', '🦅', '✈️', '🏰', '🌉'],
      // Stage 2: Australia flight – kangaroos, koalas, eagles and sailboats
      ['🦘', '🐨', '🦅', '⛵', '🐬']
    ];
    const opts = emojiSets[stageIndex] || emojiSets[0];
    const emoji = opts[Math.floor(Math.random() * opts.length)];
    decorations.push({
      x: Math.random() * (width - 30),
      y: -30,
      size: 20 + Math.random() * 15,
      speed: 0.8 + Math.random() * 1.5,
      emoji
    });
  }
  function loop(timestamp) {
    if (!gameRunning) return;
    // Initialize prevTimestamp on the first frame
    if (!prevTimestamp) prevTimestamp = timestamp;
    const delta = timestamp - prevTimestamp;
    prevTimestamp = timestamp;
    // Update elapsed time for the current stage
    elapsedTime += delta;
    // If the stage duration has elapsed, move to the next stage
    if (stageIndex < stageDurations.length - 1 && elapsedTime >= stageDurations[stageIndex]) {
      stageIndex++;
      elapsedTime = 0;
      backgroundOffsetY = 0;
    }
    // Scroll background; increase offset to create a noticeable upward movement
    backgroundOffsetY += 0.5;
    // Draw background based on current stage
    const scrollY = backgroundOffsetY % height;
    let bgImg;
    if (stageIndex === 0) {
      // Everest stage
      if (everestLoaded) {
        bgImg = everestImg;
      }
    } else if (stageIndex === 1) {
      // UK stage
      if (ukLoaded) {
        bgImg = ukImg;
      }
    } else if (stageIndex === 2) {
      // Australia stage
      if (ausLoaded) {
        bgImg = ausImg;
      }
    }
    if (bgImg) {
      // Draw two copies of the image to create a seamless vertical scroll
      ctx.drawImage(bgImg, 0, -scrollY, width, height);
      ctx.drawImage(bgImg, 0, height - scrollY, width, height);
    } else {
      // Fallback gradient if the image hasn't loaded yet
      drawEverestBackground(ctx, width, height);
    }
    // move player
    if (keys.left) player.x -= player.speed;
    if (keys.right) player.x += player.speed;
    player.x = Math.max(0, Math.min(width - player.w, player.x));
    // spawn heart every 800ms after the initial grace period
    if (elapsedTime >= heartSpawnDelay && timestamp - lastSpawn > 800) {
      spawnHeart();
      lastSpawn = timestamp;
    }
    // move hearts
    hearts.forEach(h => {
      h.y += h.speed;
    });
    // remove offscreen hearts
    hearts = hearts.filter(h => h.y < height + 30);
    // draw hearts
    ctx.font = 'bold 24px sans-serif';
    hearts.forEach(h => {
      ctx.fillText('💔', h.x, h.y);
    });

    // Spawn decorative elements periodically based on the current stage
    if (timestamp - lastDecorationSpawn > decorationIntervals[stageIndex]) {
      spawnDecoration();
      lastDecorationSpawn = timestamp;
    }
    // Move decorative elements
    decorations.forEach(d => {
      d.y += d.speed;
    });
    // Remove offscreen decorations
    decorations = decorations.filter(d => d.y < height + 40);
    // Draw decorative elements
    decorations.forEach(d => {
      ctx.font = `bold ${d.size}px serif`;
      ctx.fillText(d.emoji, d.x, d.y);
    });

    // draw the yellow Ford Transit van
    drawVan(ctx, player.x, player.y, player.w, player.h);
    // Collision detection is disabled to allow players to enjoy the full journey. Hearts still fall for decoration.
    // If you wish to make hearts hazardous again, re‑enable this block and adjust the collisionDelay as desired.
    // update score
    score += 1;
    ctx.fillStyle = '#000';
    ctx.font = '16px sans-serif';
    ctx.fillText(`Score: ${score}`, 10, 20);
    // Automatically end the game when the final stage duration elapses to show the finale
    if (stageIndex === stageDurations.length - 1 && elapsedTime >= stageDurations[stageIndex]) {
      gameOver();
      return;
    }
    // loop
    requestAnimationFrame(loop);
  }
    function gameOver() {
      gameRunning = false;
      // Determine which image to show on game over based on the current stage
      let bgImg;
      if (stageIndex === 0) {
        if (everestLoaded) bgImg = everestImg;
      } else if (stageIndex === 1) {
        if (ukLoaded) bgImg = ukImg;
      } else if (stageIndex >= 2) {
        if (ausLoaded) bgImg = ausImg;
      }
      if (bgImg) {
        ctx.drawImage(bgImg, 0, 0, width, height);
      } else {
        drawEverestBackground(ctx, width, height);
      }
      ctx.textAlign = 'center';
      // Main message
      ctx.fillStyle = '#ba8ca2';
      ctx.font = '20px serif';
      ctx.fillText('You reached Elena! 💍', width / 2, height / 2 - 80);
      // Additional story lines based on stage
      ctx.fillStyle = '#333';
      ctx.font = '16px sans-serif';
      if (stageIndex === 0) {
        ctx.fillText('Your yellow Ford Transit conquered Everest 🏔️', width / 2, height / 2 - 50);
        ctx.fillText('Next: soar above the UK and Australia!', width / 2, height / 2 - 25);
      } else if (stageIndex === 1) {
        ctx.fillText('Your yellow Ford Transit flew over the UK 🇬🇧', width / 2, height / 2 - 50);
        ctx.fillText('Next stop: Australia!', width / 2, height / 2 - 25);
      } else {
        ctx.fillText('Your yellow Ford Transit reached Australia 🇦🇺', width / 2, height / 2 - 50);
        ctx.fillText('What an adventure!', width / 2, height / 2 - 25);
      }
      // Draw the flying van with wings beneath the text. Make it slightly larger for emphasis
      const vanW = player.w * 1.3;
      const vanH = player.h * 1.3;
      drawVan(ctx, (width - vanW) / 2, height / 2 + 20, vanW, vanH, true);
      // Draw flags depending on the stage to give visual cues about travel
      const flagSize = 40;
      const flagY = height / 2 + 20 + vanH + 10;
      if (stageIndex === 0) {
        // Show both UK and Australia flags side by side to foreshadow the journey
        if (ukLoaded) ctx.drawImage(ukImg, width / 2 - flagSize - 5, flagY, flagSize, flagSize * 2 / 3);
        if (ausLoaded) ctx.drawImage(ausImg, width / 2 + 5, flagY, flagSize, flagSize * 2 / 3);
      } else if (stageIndex === 1) {
        // Highlight the UK flag larger and show Australia flag small
        if (ukLoaded) ctx.drawImage(ukImg, width / 2 - flagSize * 0.8, flagY, flagSize * 1.6, flagSize * 1.6 * 2 / 3);
        if (ausLoaded) ctx.drawImage(ausImg, width / 2 + flagSize * 0.9, flagY + (flagSize * 1.6 - flagSize) / 2, flagSize, flagSize * 2 / 3);
      } else {
        // Highlight the Australia flag larger
        if (ausLoaded) ctx.drawImage(ausImg, width / 2 - flagSize * 0.8, flagY, flagSize * 1.6, flagSize * 1.6 * 2 / 3);
      }
      // Final score at the bottom
      ctx.fillStyle = '#555';
      ctx.font = '14px sans-serif';
      ctx.fillText(`Final score: ${score}`, width / 2, height - 20);
      // Remove controls
      document.removeEventListener('keydown', keyDown);
      document.removeEventListener('keyup', keyUp);
    }
  requestAnimationFrame(loop);
}

// Global site settings loaded from localStorage and applied
let siteSettings = {};

// Internal state for the highlight slideshow
let highlightTimer = null;
let currentHighlightIndex = 0;

/**
 * Apply highlight images stored in siteSettings to the slideshow elements
 * on the page. The highlights array should contain up to four data URLs.
 * After updating the images, initialise the autoplay slideshow.
 */
function applyHighlightSettings() {
  const slides = document.querySelectorAll('.highlight-slide');
  if (!slides || slides.length === 0) return;
  // Ensure highlights array exists
  if (!Array.isArray(siteSettings.highlights)) {
    siteSettings.highlights = [null, null, null, null];
  }
  // Assign each slide's source from the settings
  slides.forEach((slide, idx) => {
    const src = siteSettings.highlights[idx];
    if (src) {
      slide.src = src;
      slide.style.opacity = '0';
    } else {
      // Empty images get a transparent blank
      slide.src = '';
      slide.style.opacity = '0';
    }
  });
  // Start the slideshow if any highlight is set
  const anyHighlight = siteSettings.highlights.some(h => !!h);
  const reel = document.getElementById('highlightReel');
  const progress = document.getElementById('highlightProgress');
  if (anyHighlight) {
    // Show the reel and progress bar if hidden
    if (reel) reel.style.display = '';
    if (progress) progress.style.display = 'block';
    initHighlightReel();
    // Apply stored object-position offsets for each slide
    applyHighlightPositions();
  } else {
    // If no highlights, hide the reel and progress bar and stop the timer
    if (reel) reel.style.display = 'none';
    if (progress) progress.style.display = 'none';
    slides.forEach(slide => {
      slide.style.opacity = '0';
    });
    if (highlightTimer) clearInterval(highlightTimer);
  }

  // Regardless of whether any highlights are set, ensure object positions
  // and the highlightPositions array are initialised.  This allows
  // position controls to work even before images are uploaded.
  applyHighlightPositions();
}

/**
 * Apply stored object-position settings to each highlight slide.  The
 * siteSettings.highlightPositions array holds objects with x and y values
 * (in percentage offsets from the centre).  A positive x moves the
 * focal point right, while a positive y moves it down.  These values
 * default to 0 (centre).  If highlightPositions is missing or sized
 * incorrectly, it is initialised here.
 */
function applyHighlightPositions() {
  const slides = document.querySelectorAll('.highlight-slide');
  if (!slides || slides.length === 0) return;
  // Ensure highlightPositions array exists and has the correct length
  if (!Array.isArray(siteSettings.highlightPositions) || siteSettings.highlightPositions.length !== slides.length) {
    siteSettings.highlightPositions = [];
    slides.forEach(() => {
      siteSettings.highlightPositions.push({ x: 0, y: 0 });
    });
  }
  slides.forEach((slide, idx) => {
    const pos = siteSettings.highlightPositions[idx] || { x: 0, y: 0 };
    slide.style.objectPosition = `${50 + pos.x}% ${50 + pos.y}%`;
  });
}

/**
 * Apply the stored hero image position offsets.  The heroPosition
 * property contains x and y values (percentage offsets from the
 * centre).  A positive x moves the focal point right; a positive y
 * moves it down.  Defaults to centre if undefined.
 */
function applyHeroPosition() {
  const heroImg = document.querySelector('.hero-bg');
  if (!heroImg) return;
  if (!siteSettings.heroPosition) {
    siteSettings.heroPosition = { x: 0, y: 0 };
  }
  const pos = siteSettings.heroPosition;
  heroImg.style.objectPosition = `${50 + (pos.x || 0)}% ${50 + (pos.y || 0)}%`;
}

/**
 * Build and display range sliders for adjusting the hero image's objectPosition.
 * Creates the controls if they do not already exist and attaches input
 * listeners that update the hero position in siteSettings and reapply
 * the style live.  Controls only appear in edit mode.
 */
function createHeroPositionControls() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return null;
  // If controls already exist, return the element
  let controls = document.getElementById('heroPositionControls');
  if (controls) return controls;
  controls = document.createElement('div');
  controls.id = 'heroPositionControls';
  controls.className = 'position-controls hero-position-controls';
  // Label for horizontal slider
  const hGroup = document.createElement('div');
  hGroup.className = 'control-row';
  const hLabel = document.createElement('label');
  hLabel.textContent = 'Hero H:';
  const hInput = document.createElement('input');
  hInput.type = 'range';
  hInput.min = -50;
  hInput.max = 50;
  hInput.step = 1;
  // Initialise value from settings
  if (!siteSettings.heroPosition) {
    siteSettings.heroPosition = { x: 0, y: 0 };
  }
  hInput.value = siteSettings.heroPosition.x || 0;
  hInput.addEventListener('input', function (e) {
    const val = parseInt(e.target.value, 10) || 0;
    siteSettings.heroPosition.x = val;
    applyHeroPosition();
    saveSiteSettings();
  });
  hGroup.appendChild(hLabel);
  hGroup.appendChild(hInput);
  // Label for vertical slider
  const vGroup = document.createElement('div');
  vGroup.className = 'control-row';
  const vLabel = document.createElement('label');
  vLabel.textContent = 'Hero V:';
  const vInput = document.createElement('input');
  vInput.type = 'range';
  vInput.min = -50;
  vInput.max = 50;
  vInput.step = 1;
  vInput.value = siteSettings.heroPosition.y || 0;
  vInput.addEventListener('input', function (e) {
    const val = parseInt(e.target.value, 10) || 0;
    siteSettings.heroPosition.y = val;
    applyHeroPosition();
    saveSiteSettings();
  });
  vGroup.appendChild(vLabel);
  vGroup.appendChild(vInput);
  // Append groups to controls
  controls.appendChild(hGroup);
  controls.appendChild(vGroup);
  // Insert controls into the hero section, below the hero content
  // Choose to insert after the hero content for readability
  const heroContent = heroSection.querySelector('.hero-content');
  if (heroContent && heroContent.parentNode) {
    heroContent.parentNode.insertBefore(controls, heroContent.nextSibling);
  } else {
    heroSection.appendChild(controls);
  }
  return controls;
}

/**
 * Build and display range sliders for adjusting each highlight slide's objectPosition.
 * Creates the controls container if it does not exist.  Each highlight
 * slide gets a pair of sliders (horizontal and vertical) labelled with
 * its index.  Listeners update siteSettings.highlightPositions accordingly
 * and reapply positions live.
 */
function createHighlightPositionControls() {
  const progress = document.getElementById('highlightProgress');
  if (!progress) return null;
  // If controls already exist, return them
  let container = document.getElementById('highlightPositionControls');
  if (container) return container;
  container = document.createElement('div');
  container.id = 'highlightPositionControls';
  container.className = 'position-controls highlight-position-controls';
  // Ensure positions array exists
  const slides = document.querySelectorAll('.highlight-slide');
  if (!Array.isArray(siteSettings.highlightPositions) || siteSettings.highlightPositions.length !== slides.length) {
    siteSettings.highlightPositions = [];
    slides.forEach(() => {
      siteSettings.highlightPositions.push({ x: 0, y: 0 });
    });
  }
  slides.forEach((slide, idx) => {
    // Create a row for this slide
    const row = document.createElement('div');
    row.className = 'control-row';
    const label = document.createElement('label');
    label.textContent = `Slide ${idx + 1}:`;
    row.appendChild(label);
    // Horizontal slider
    const hInput = document.createElement('input');
    hInput.type = 'range';
    hInput.min = -50;
    hInput.max = 50;
    hInput.step = 1;
    hInput.value = siteSettings.highlightPositions[idx].x || 0;
    hInput.addEventListener('input', function (e) {
      const val = parseInt(e.target.value, 10) || 0;
      siteSettings.highlightPositions[idx].x = val;
      applyHighlightPositions();
      saveSiteSettings();
    });
    row.appendChild(hInput);
    // Vertical slider
    const vInput = document.createElement('input');
    vInput.type = 'range';
    vInput.min = -50;
    vInput.max = 50;
    vInput.step = 1;
    vInput.value = siteSettings.highlightPositions[idx].y || 0;
    vInput.addEventListener('input', function (e) {
      const val = parseInt(e.target.value, 10) || 0;
      siteSettings.highlightPositions[idx].y = val;
      applyHighlightPositions();
      saveSiteSettings();
    });
    row.appendChild(vInput);
    container.appendChild(row);
  });
  // Insert container after the progress bar
  if (progress.parentNode) {
    if (progress.nextSibling) {
      progress.parentNode.insertBefore(container, progress.nextSibling);
    } else {
      progress.parentNode.appendChild(container);
    }
  }
  return container;
}

/**
 * Show or hide the hero and highlight position controls based on edit mode.
 * When entering edit mode, the controls are created and displayed.  When
 * leaving edit mode, they are simply hidden but not destroyed so their
 * values persist across toggles.
 */
function updatePositionControlsVisibility() {
  const show = !!editMode;
  let heroControls = document.getElementById('heroPositionControls');
  let highlightControls = document.getElementById('highlightPositionControls');
  if (show) {
    // Create controls if missing
    heroControls = createHeroPositionControls();
    highlightControls = createHighlightPositionControls();
    if (heroControls) heroControls.style.display = '';
    if (highlightControls) highlightControls.style.display = '';
  } else {
    if (heroControls) heroControls.style.display = 'none';
    if (highlightControls) highlightControls.style.display = 'none';
  }
}

/**
 * Initialise and run the highlight slideshow. This cycles through up to
 * four images stored in siteSettings.highlights, fading between them.
 * A progress bar animates for each slide duration. If already running,
 * the existing timer is cleared before restarting.
 */
function initHighlightReel() {
  const slides = document.querySelectorAll('.highlight-slide');
  const progressBar = document.getElementById('highlightProgressBar');
  const progressContainer = document.getElementById('highlightProgress');
  if (!slides || slides.length === 0) return;
  // Determine active slides (those with src)
  const activeIndices = [];
  slides.forEach((slide, idx) => {
    if (slide && slide.src) {
      // Consider non-empty if src length > 0 and not blank
      if (slide.src.trim() !== '') activeIndices.push(idx);
    }
  });
  if (activeIndices.length === 0) return;
  // Reset progress bar display
  if (progressContainer) progressContainer.style.display = 'block';
  // Clear existing timer
  if (highlightTimer) clearInterval(highlightTimer);
  // Reset index
  currentHighlightIndex = 0;
  // Helper to show a given slide
  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.style.opacity = (idx === activeIndices[i]) ? '1' : '0';
    });
    // Reset and animate progress bar
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      // Force reflow to reset (by reading offsetWidth)
      void progressBar.offsetWidth;
      progressBar.style.transition = 'width 4.5s linear';
      progressBar.style.width = '100%';
    }
  }
  // Show the first slide immediately
  showSlide(currentHighlightIndex);
  // Cycle slides every 4.5 seconds
  highlightTimer = setInterval(() => {
    currentHighlightIndex = (currentHighlightIndex + 1) % activeIndices.length;
    showSlide(currentHighlightIndex);
  }, 4500);
}

/**
 * Update the Coming Soon section based on whether guest uploads are enabled.
 * When enabled, the section invites users to share photos; otherwise
 * it remains a teaser. Text and small notes are updated accordingly.
 */
function applyComingSoonSettings() {
  const comingSection = document.getElementById('comingSoon');
  if (!comingSection) return;
  const titleEl = comingSection.querySelector('h2.section-title');
  const subtitleEl = comingSection.querySelector('p.section-subtitle');
  const noteEl = comingSection.querySelector('p.coming-note');
  // Default state when guest uploads disabled
  const uploadsEnabled = !!siteSettings.enableGuestUploads;
  if (!uploadsEnabled) {
    if (titleEl) titleEl.textContent = 'Coming Soon...';
    if (subtitleEl) subtitleEl.textContent = 'We’ll open this space for your photos and our photographer’s favourites after the day. Check back soon!';
    if (noteEl) noteEl.textContent = 'Uploads will open after the big day.';
    // Add disabled placeholders by ensuring coming-grid has placeholder classes
    const grid = comingSection.querySelector('.coming-grid');
    if (grid) {
      grid.querySelectorAll('.coming-slot').forEach(slot => {
        // ensure placeholder element exists
        if (!slot.querySelector('.coming-placeholder')) {
          const placeholder = document.createElement('div');
          placeholder.className = 'coming-placeholder';
          placeholder.textContent = 'Future photo';
          slot.appendChild(placeholder);
        }
      });
    }
  } else {
    // Guest uploads enabled
    if (titleEl) titleEl.textContent = 'Share Your Moments';
    if (subtitleEl) subtitleEl.textContent = 'Drop your favourite photos from the day. We’ll also add the photographer’s gallery here soon.';
    if (noteEl) noteEl.textContent = 'Uploads may appear after a quick review.';
    // Could later attach dynamic upload UI here; for now just update text.
  }
}

// Apply saved settings from localStorage
function applySiteSettings() {
  // Apply heading color
  if (siteSettings.headingColor) {
    document.documentElement.style.setProperty('--heading-color', siteSettings.headingColor);
    const headerPicker = document.getElementById('headerColorPicker');
    if (headerPicker) headerPicker.value = siteSettings.headingColor;
  }
  // Apply body text color
  if (siteSettings.textColor) {
    document.documentElement.style.setProperty('--text-color', siteSettings.textColor);
    const textPicker = document.getElementById('textColorPicker');
    if (textPicker) textPicker.value = siteSettings.textColor;
  }
  // Apply navigation background color
  if (siteSettings.navBgColor) {
    document.documentElement.style.setProperty('--nav-bg-color', siteSettings.navBgColor);
    const navPicker = document.getElementById('navBgColorPicker');
    if (navPicker) navPicker.value = siteSettings.navBgColor;
  }
  // Apply overlay opacity
  if (siteSettings.overlayOpacity) {
    const heroOverlay = document.querySelector('.hero-overlay');
    if (heroOverlay) {
      heroOverlay.style.background = `rgba(0,0,0,${parseFloat(siteSettings.overlayOpacity)})`;
    }
    const opacitySlider = document.getElementById('overlayOpacity');
    if (opacitySlider) opacitySlider.value = Math.round(parseFloat(siteSettings.overlayOpacity) * 100);
  }
  // Restore text content for editable elements. For paragraph-like
  // elements, convert newlines into <br> tags to preserve formatting.
  if (siteSettings.textContents) {
    Object.keys(siteSettings.textContents).forEach(key => {
      const el = document.querySelector(`[data-edit-id="${key}"]`);
      if (!el) return;
      const textVal = siteSettings.textContents[key];
      if (el.tagName === 'P' || el.tagName === 'DIV') {
        // Decode previously escaped entities and insert raw HTML. This allows
        // tags such as <strong>, <em> and <a> to render properly.
        // Newlines are converted to <br> elements.
        const unescaped = unescapeHtml(textVal);
        el.innerHTML = unescaped.replace(/\n/g, '<br>');
      } else {
        el.textContent = unescapeHtml(textVal);
      }
    });
  }
  // Restore custom icons
  if (Array.isArray(siteSettings.customIcons)) {
    const container = document.getElementById('customElements');
    siteSettings.customIcons.forEach(icon => {
      const img = document.createElement('img');
      img.src = icon.src;
      img.classList.add('custom-icon');
      img.style.left = icon.left;
      img.style.top = icon.top;
      if (icon.width) img.style.width = icon.width;
      if (icon.height) img.style.height = icon.height;
      container.appendChild(img);
      makeDraggable(img);
    });
  }

  // Apply hero background from saved settings by updating the hero image only.
  // Do not set the body background to the hero photo; this prevents the hero
  // image from appearing behind the entire page (including the gallery).
  if (siteSettings.heroBg) {
    const heroImg = document.querySelector('.hero-bg');
    if (heroImg) {
      heroImg.src = siteSettings.heroBg;
    }
    // Clear any previously set body background from a hero upload so the page
    // returns to the neutral background defined in CSS.
    document.body.style.background = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundAttachment = '';
    document.body.style.backgroundPosition = '';
    // Apply stored hero position offsets after setting the hero image
    applyHeroPosition();
  }

  // Restore gallery images order, sizes and hero thumbnail
  if (Array.isArray(siteSettings.gallery)) {
    const gallery = document.querySelector('.gallery-grid');
    if (gallery) {
      // Clear existing images and any associated controls
      gallery.innerHTML = '';
      siteSettings.gallery.forEach(item => {
        // Wrap each image in a container so that editing controls can be
        // absolutely positioned over the image without disrupting the grid.
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-item';
        wrapper.style.position = 'relative';
        const img = document.createElement('img');
        img.src = item.src;
        // Apply stored width percentage if provided
        if (item.size) {
          img.style.width = item.size + '%';
          img.style.height = 'auto';
        }
        // Apply saved objectPosition if provided. Supports both X and Y offsets.
        if (item.pos) {
          img.style.objectPosition = item.pos;
        } else {
          img.style.objectPosition = '50% 50%';
        }
        // Maintain gallery item class for hero thumbnail detection
        if (item.isHero) {
          img.classList.add('hero-thumb');
        }
        wrapper.appendChild(img);
        gallery.appendChild(wrapper);
      });
    }
  }

  // If a hero background is present but no hero thumbnail has been created via
  // gallery settings, ensure one is inserted at the start of the gallery so
  // visitors can always see a translucent preview of the current hero photo.
  if (siteSettings.heroBg) {
    const gallery = document.querySelector('.gallery-grid');
    if (gallery && (!Array.isArray(siteSettings.gallery) || !siteSettings.gallery.some(item => item.isHero))) {
      updateHeroThumb(siteSettings.heroBg);
    }
  }

  // Apply highlight images and initialise the slideshow. Also update the
  // Coming Soon section based on guest upload settings.
  applyHighlightSettings();
  applyComingSoonSettings();

  // Apply the story image if provided
  if (siteSettings.storyImage) {
    const storyImgEl = document.querySelector('.story-image img');
    if (storyImgEl) {
      storyImgEl.src = siteSettings.storyImage;
    }
  }
  // Apply background music. If a track is stored in IndexedDB, load it and
  // create an object URL. Otherwise fall back to any small data URI saved
  // directly in siteSettings.music.
  (function applyMusic() {
    const musicEl = document.getElementById('bgMusic');
    if (!musicEl) return;
    // If we have a flag indicating music is stored in IndexedDB, load it
    if (siteSettings.musicStored) {
      loadMusicFromDB(function (blob) {
        if (blob) {
          const url = URL.createObjectURL(blob);
          if (musicEl.src !== url) {
            musicEl.src = url;
          }
          musicEl.volume = musicEl.volume || 0.5;
          try {
            musicEl.play();
          } catch (err) {}
        } else {
          console.warn('No music found in IndexedDB despite flag.');
        }
      });
    } else if (siteSettings.music) {
      // Fall back to data URI or remote URL stored in settings
      if (musicEl.src !== siteSettings.music) {
        musicEl.src = siteSettings.music;
      }
      musicEl.volume = musicEl.volume || 0.5;
      try {
        musicEl.play();
      } catch (err) {}
    }
  })();

  // Always apply the hero image object-position offsets after other
  // settings are applied to ensure the default hero shows at the
  // intended position even when no custom background is set.
  applyHeroPosition();
}

function saveSiteSettings() {
  // Save current colors
  const headerPicker = document.getElementById('headerColorPicker');
  if (headerPicker) siteSettings.headingColor = headerPicker.value;
  const textPicker = document.getElementById('textColorPicker');
  if (textPicker) siteSettings.textColor = textPicker.value;
  const navPicker = document.getElementById('navBgColorPicker');
  if (navPicker) siteSettings.navBgColor = navPicker.value;
  const opacitySlider = document.getElementById('overlayOpacity');
  if (opacitySlider) siteSettings.overlayOpacity = (parseInt(opacitySlider.value) / 100).toString();
  // Save text content from editable elements. Preserve newlines by converting
  // <br> tags back into newline characters when reading paragraph-like
  // elements. This ensures that multi-line inputs are stored correctly.
  siteSettings.textContents = {};
  document.querySelectorAll('[data-edit-id]').forEach(el => {
    let val;
    if (el.tagName === 'P' || el.tagName === 'DIV') {
      // Convert <br> tags to newline when capturing from DOM
      val = el.innerHTML.replace(/<br\s*\/?>/gi, '\n').trim();
    } else {
      val = el.textContent.trim();
    }
    siteSettings.textContents[el.dataset.editId] = val;
  });
  // Save custom icons positions and src
  siteSettings.customIcons = [];
  document.querySelectorAll('#customElements .custom-icon').forEach(icon => {
    siteSettings.customIcons.push({
      src: icon.src,
      left: icon.style.left || '0px',
      top: icon.style.top || '0px',
      width: icon.style.width || '',
      height: icon.style.height || ''
    });
  });

  // Save hero background
  const heroImg = document.querySelector('.hero-bg');
  if (heroImg) {
    siteSettings.heroBg = heroImg.src;
  }

  // Save story image
  const storyImgEl = document.querySelector('.story-image img');
  if (storyImgEl) {
    siteSettings.storyImage = storyImgEl.src;
  }

  // Save background music. If a song has been stored in IndexedDB (musicStored flag),
  // do not overwrite the flag with a temporary object URL. Otherwise persist the
  // current src (data URI or external URL) so it can be restored.
  const musicEl = document.getElementById('bgMusic');
  if (musicEl) {
    if (siteSettings.musicStored) {
      // Do not store the object URL; just keep the flag. Remove any small stored data.
      if (siteSettings.music) delete siteSettings.music;
    } else if (musicEl.src) {
      siteSettings.music = musicEl.src;
    }
  }

  // Save gallery order and sizes
  siteSettings.gallery = [];
  const gallery = document.querySelector('.gallery-grid');
  if (gallery) {
    const imgs = gallery.querySelectorAll('img');
    imgs.forEach(img => {
      // Determine if this image is the hero thumbnail by class
      const isHero = img.classList.contains('hero-thumb');
      const size = img.style.width ? parseFloat(img.style.width) : null;
      // Extract the full objectPosition string (e.g. "50% 50%") so both X and Y
      // offsets are preserved. If not set, leave null.
      const pos = img.style.objectPosition || null;
      siteSettings.gallery.push({
        src: img.src,
        size: size,
        isHero: isHero,
        pos: pos
      });
    });
  }
  try {
    // Before writing to localStorage, create a shallow copy and remove large media
    // data if present. Base64‑encoded audio can easily exceed the 5MB quota. By
    // omitting it from the local copy, we avoid quota errors while still
    // persisting the full settings to GitHub.
    const localCopy = JSON.parse(JSON.stringify(siteSettings));
    if (localCopy.music && localCopy.music.length > 500000) {
      delete localCopy.music;
    }
    localStorage.setItem('siteSettings', JSON.stringify(localCopy));
  } catch (e) {
    // If storage quota is exceeded (e.g. due to multiple large images), notify the user.
    console.error('Failed to save site settings to local storage:', e);
    alert('Your changes were saved to the public site but could not be stored locally due to browser storage limits. Consider removing large images or audio files.');
    // Continue to upload settings even if local persistence fails
  }
  // Persist settings to the repository using the GitHub API.  This will
  // update the siteSettings.json file so that changes made in the admin
  // dashboard are reflected for all visitors once GitHub Pages rebuilds.
  // If no GitHub token has been configured, the upload will simply be
  // skipped.
  try {
    uploadSiteSettings();
  } catch (err) {
    console.error('Failed to upload site settings:', err);
  }
}

/**
 * Replace gallery image sources with embedded base64 URIs if available. The
 * gallery images in index.html include a `data-filename` attribute that
 * corresponds to their original file names. When the separate
 * galleryImages.js script is loaded, it attaches a `galleryImages` object
 * to the window containing base64 data URIs keyed by filename. This
 * function iterates through each gallery img and, if a matching entry is
 * found in window.galleryImages, updates its `src` to the base64 URI.
 * This prevents broken images when relative file paths don’t resolve on
 * certain systems (for example, Windows extraction quirks).
 */
function replaceGalleryImages() {
  if (!window.galleryImages) return;
  const imgs = document.querySelectorAll('.gallery-grid img');
  imgs.forEach(img => {
    // Use the data-filename attribute if present; otherwise parse the filename from src
    const filename = img.dataset.filename || (img.src ? img.src.split('/').pop() : '');
    const uri = window.galleryImages[filename];
    if (uri) {
      img.src = uri;
    }
  });
}

/**
 * Upload the current siteSettings object to GitHub as siteSettings.json.  This
 * uses the GitHub REST API to update a file in the repository.  A
 * personal access token with `repo` scope must be stored in
 * localStorage under the key `githubToken` for this to succeed.  If
 * no token is present, the function silently returns.  Errors are
 * logged to the console but do not interrupt the page flow.
 */
async function uploadSiteSettings() {
  const token = localStorage.getItem('githubToken');
  if (!token) {
    console.warn('GitHub token not found; skipping upload of site settings');
    return;
  }
  const owner = 'zacgialanze';
  const repo = 'newnew-site';
  const path = 'siteSettings.json';
  try {
    // Retrieve the current file SHA so we can update it. Without the SHA,
    // GitHub will attempt to create a new file rather than updating.
    const getResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: {
        'Authorization': 'token ' + token,
        'Accept': 'application/vnd.github+json'
      }
    });
    if (!getResp.ok) {
      console.error('Failed to fetch current site settings file:', getResp.status);
      return;
    }
    const getData = await getResp.json();
    const sha = getData.sha;
    // Encode the updated settings as a base64 string
    const json = JSON.stringify(siteSettings);
    // Convert UTF‑8 string to base64. Use unescape/encodeURIComponent to
    // handle non‑ASCII characters correctly.
    const content = btoa(unescape(encodeURIComponent(json)));
    // Prepare payload for updating the file
    const putResp = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': 'token ' + token,
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        message: 'Update site settings via admin panel',
        content: content,
        sha: sha
      })
    });
    if (!putResp.ok) {
      console.error('Failed to upload site settings:', putResp.status, await putResp.text());
    }
  } catch (err) {
    console.error('Error uploading site settings to GitHub:', err);
  }
}

/**
 * Escape HTML special characters to prevent injection when inserting
 * user-provided text as HTML. This function converts &, < and > into
 * their corresponding HTML entities. Use before replacing newlines
 * with <br> tags.
 *
 * @param {string} str The input string potentially containing special chars
 * @returns {string} The escaped string safe for insertion via innerHTML
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---------------------------------------------------------------------------
// Decode HTML entities back into their literal form.
//
// When restoring text content into editable paragraphs/divs we want to
// render any intentionally included markup (for example <strong> or <a>)
// rather than displaying the encoded sequences (&lt;strong&gt;).  Without
// decoding, repeatedly saving via the admin editor would double‑encode
// ampersands resulting in text like `Zac &amp;amp; Elena` appearing on
// the final page.  This helper reverses the escaping performed by
// escapeHtml().
function unescapeHtml(str) {
  return String(str)
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  // Load site settings from the browser's localStorage. This provides
  // backwards compatibility if the remote settings file cannot be loaded.
  try {
    siteSettings = JSON.parse(localStorage.getItem('siteSettings')) || {};
  } catch (e) {
    siteSettings = {};
  }
  // Attempt to fetch a shared siteSettings.json file from the repository. If
  // present, this file contains the persisted settings that should apply
  // across devices. Append a cache‑busting query string to ensure the
  // browser doesn't serve a stale version from the CDN. If the fetch fails,
  // we simply fall back to localStorage defaults defined above.
  fetch('siteSettings.json?v=' + Date.now())
    .then(resp => resp.ok ? resp.json() : null)
    .then(data => {
      if (data) {
        siteSettings = data;
      }
    })
    .catch(() => {
      // ignore network errors and continue with local settings
    })
    .finally(() => {
      // If highlights have not been configured yet, populate default
      // highlight images from the repository. Without this, the highlight
      // reel remains blank until an admin uploads photos via the dashboard.
      if (!Array.isArray(siteSettings.highlights) || siteSettings.highlights.length === 0) {
        siteSettings.highlights = [
          'images/1000017454.jpg',
          'images/1000017456.jpg',
          'images/1000017457.jpg',
          'images/1000017460.jpg'
        ];
      }
      // Apply colours, hero, highlights and other design settings
      applySiteSettings();
      // If a timelineEvents array exists in the loaded siteSettings, use it to
      // replace the default timeline defined at the top of the script. This
      // ensures that program updates saved via the admin panel persist for all
      // visitors. Otherwise, fall back to whatever is already in timelineEvents.
      try {
        if (siteSettings && Array.isArray(siteSettings.timelineEvents) && siteSettings.timelineEvents.length) {
          timelineEvents = siteSettings.timelineEvents;
        }
      } catch (err) {
        console.warn('Error applying timeline events from siteSettings', err);
      }
      // Load timeline using the (possibly updated) timelineEvents array
      loadTimeline();
      // Initialize guest list container with one row
      const guestContainer = document.getElementById('guestListContainer');
      guestContainer.appendChild(createGuestRow());
      // Apply guest details visibility based on current number of rows
      updateGuestDetailsVisibility();
      // Initialise select option availability (disable responded and already selected names)
      updateSelectOptions();
    });
  // Event listeners
  document.getElementById('addGuestBtn').addEventListener('click', handleAddGuest);
  document.getElementsByName('bringGuest').forEach(r => {
    r.addEventListener('change', handleBringGuestToggle);
  });
  document.getElementById('lateShuttle').addEventListener('change', handleLateShuttleToggle);
  document.getElementById('rsvpForm').addEventListener('submit', handleFormSubmit);
  document.getElementById('adminLoginBtn').addEventListener('click', handleAdminLogin);
  const exportBtn = document.getElementById('exportCsvBtn');
  if (exportBtn) exportBtn.addEventListener('click', exportCsv);
  // Attach event handlers for the new export buttons (songs and shuttles)
  const exportSongsBtn = document.getElementById('exportSongsCsvBtn');
  if (exportSongsBtn) exportSongsBtn.addEventListener('click', exportSongsCsv);
  const exportShuttlesBtn = document.getElementById('exportShuttlesCsvBtn');
  if (exportShuttlesBtn) exportShuttlesBtn.addEventListener('click', exportShuttlesCsv);
  const clearBtn = document.getElementById('clearRsvpsBtn');
  if (clearBtn) clearBtn.addEventListener('click', clearRsvps);
  // Start the Everest Love Run game on click. Disable the button afterwards to
  // prevent multiple concurrent games.
  const startBtn = document.getElementById('startGameBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      // Hide or disable the button after starting
      startBtn.disabled = true;
      if (window.startEverestLoveRun) {
        window.startEverestLoveRun();
      }
    });
  }

  // Hook up the Exit Game button in the Everest Love Run scoreboard. When
  // clicked, it hides the scoreboard and re‑enables the Start Game button
  // so visitors can return to the page without launching another game.
  const exitBtn = document.getElementById('exitGameBtn');
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      const board = document.getElementById('scoreBoard');
      if (board) board.style.display = 'none';
      if (startBtn) startBtn.disabled = false;
      // Close the game overlay when the exit button is used
      if (typeof hideGameOverlay === 'function') hideGameOverlay();
    });
  }
  // Initialize visibility based on default selections
  handleBringGuestToggle();
  handleLateShuttleToggle();

  // Initialize collapsible detail cards to keep the details section neat. This
  // will add "Read more" toggles to cards that exceed a certain height and
  // allow visitors to expand or collapse the content.
  initDetailCards();

  // === Premium enhancements initialization ===
  // Set up the progress bar, countdown timer, reveal animations, mobile
  // navigation toggle, gallery lightbox, guestbook and its admin tools.  These
  // functions are no-ops if the corresponding elements aren’t present on the
  // page (for example, guestbook won’t initialize on game.html).  They
  // gracefully degrade on browsers that lack IntersectionObserver.
  initProgressBar();
  initCountdown();
  initScrollAnimations();
  initMobileNav();
  initGalleryLightbox();
  initGuestbook();
  initAdminGuestbook();

  // After all initialisations, replace the gallery image sources with
  // embedded base64 URIs if available. This ensures the gallery images
  // always load even if file paths break on certain systems.
  replaceGalleryImages();

  // If no images have been added to the gallery yet and no custom
  // gallery order is saved in site settings, automatically populate the
  // gallery with any default images provided in galleryImages.js. These
  // defaults are packaged as base64 strings keyed by filename. Exclude
  // the current hero background to avoid duplicating it in the gallery.
  (function populateDefaultGallery() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) return;
    // Skip if any images are already present in the gallery (user
    // uploaded photos or restored site settings). Placeholders are
    // represented by empty divs with the class gallery-placeholder.
    if (gallery.querySelectorAll('img').length > 0) return;
    // Remove any placeholder boxes before inserting default images.
    gallery.innerHTML = '';
    // Determine the file name of the current hero image. If the hero
    // image is loaded from a file path (e.g. images/1000017452.jpg) we
    // extract the last segment to compare against our gallery image keys.
    let heroFilename = null;
    const heroImgEl = document.querySelector('.hero-bg');
    if (heroImgEl) {
      const srcAttr = heroImgEl.getAttribute('src');
      if (srcAttr && !srcAttr.startsWith('data:')) {
        const parts = srcAttr.split('/');
        heroFilename = parts[parts.length - 1];
      }
    }
    // Iterate through any images defined on window.galleryImages and
    // append them to the gallery. Skip the image that matches the hero
    // filename (if detected) to avoid duplicating the hero in the gallery.
    if (typeof window !== 'undefined' && window.galleryImages) {
      Object.keys(window.galleryImages).forEach(filename => {
        // Skip the hero if the filename matches the hero background
        if (heroFilename && filename === heroFilename) return;
        const uri = window.galleryImages[filename];
        if (!uri) return;
        const img = document.createElement('img');
        img.src = uri;
        gallery.appendChild(img);
      });
    }
  })();

  // Designer tools event listeners
  const imgInput = document.getElementById('adminUploadImage');
  if (imgInput) {
    imgInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (ev) {
        // Create a wrapper for the new image. This ensures editing controls
        // overlay properly within the same grid cell. Without the wrapper,
        // controls would disrupt the grid layout.
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-item';
        wrapper.style.position = 'relative';
        const img = document.createElement('img');
        img.src = ev.target.result;
        img.classList.add('admin-upload');
        // Optional: initial size small
        img.style.width = '200px';
        img.style.height = 'auto';
        wrapper.appendChild(img);
        // Append to gallery. In edit mode, controls will be generated via
        // setupGalleryEditUI(), but photos remain anchored in the grid (no dragging).
        const gallery = document.querySelector('.gallery-grid');
        gallery.appendChild(wrapper);
        if (editMode) {
          setupGalleryEditUI();
        }
      };
      reader.readAsDataURL(file);
      // reset value so same file can be re-selected
      e.target.value = '';
    });
  }
  const musicInput = document.getElementById('adminUploadMusic');
  if (musicInput) {
    musicInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;
      // Allow up to ~10MB songs. If file exceeds this threshold, alert and abort.
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        alert('The selected audio file is too large to save. Please choose a file smaller than 10 MB.');
        e.target.value = '';
        return;
      }
      // Preview the audio using a data URL. This does not persist the file.
      const reader = new FileReader();
      reader.onload = function (ev) {
        const dataUrl = ev.target.result;
        const audio = document.getElementById('bgMusic');
        if (audio) {
          audio.src = dataUrl;
          audio.volume = audio.volume || 0.5;
          try {
            audio.play();
          } catch (err) {
            /* autoplay blocked */
          }
        }
        // Store the music data URL in siteSettings so it can be saved to GitHub
        if (typeof siteSettings === 'object') {
          siteSettings.music = dataUrl;
          // Ensure we do not attempt to load from IndexedDB on other devices
          delete siteSettings.musicStored;
        }
      };
      reader.readAsDataURL(file);
      // Persist the raw file (blob) in IndexedDB for offline playback. This is optional
      // and used to reduce JSON size when saving to GitHub. The data URL is stored
      // in siteSettings.music for cross‑device synchronisation.
      saveMusicToDB(file, function (ok) {
        if (ok) {
          alert('Music uploaded and will be saved when you click Save All.');
        } else {
          alert('Failed to save music. Your browser may not support offline storage.');
        }
      });
      // reset value so same file can be re-selected
      e.target.value = '';
    });
  }

  // Upload hero background file
  const heroInput = document.getElementById('adminUploadHero');
  if (heroInput) {
    heroInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (ev) {
        const dataUrl = ev.target.result;
        const heroImg = document.querySelector('.hero-bg');
        if (heroImg) {
          heroImg.src = dataUrl;
        }
        // Do not apply the hero image as the body background. The hero photo
        // should only appear within the hero section itself. Reset any
        // previously set background styles so the body returns to the
        // neutral theme defined in CSS.
        document.body.style.background = '';
        document.body.style.backgroundSize = '';
        document.body.style.backgroundAttachment = '';
        document.body.style.backgroundPosition = '';
        // Trigger updateHeroThumb to keep the API consistent, though the
        // function now safely returns without modifying the gallery.
        updateHeroThumb(dataUrl);
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    });
  }

  // Upload story image for the Our Story section
  const storyInput = document.getElementById('storyImageUpload');
  if (storyInput) {
    storyInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (ev) {
        // Update the image in the Our Story section
        const imgEl = document.querySelector('.story-image img');
        if (imgEl) {
          imgEl.src = ev.target.result;
        }
        // Store the story image in siteSettings so it persists across sessions
        if (typeof siteSettings === 'object') {
          siteSettings.storyImage = ev.target.result;
        }
      };
      reader.readAsDataURL(file);
      // reset value so same file can be re-selected
      e.target.value = '';
    });
  }
  // Clear the custom story image and revert to default
  const clearStory = document.getElementById('clearStoryImage');
  if (clearStory) {
    clearStory.addEventListener('click', function () {
      const imgEl = document.querySelector('.story-image img');
      if (imgEl) {
        // Revert to the original story image. If you change the default image filename in HTML, update this path accordingly.
        imgEl.src = 'images/1000017460.jpg';
      }
      if (typeof siteSettings === 'object' && siteSettings.storyImage) {
        delete siteSettings.storyImage;
      }
    });
  }
  const colorPicker = document.getElementById('headerColorPicker');
  if (colorPicker) {
    colorPicker.addEventListener('input', function (e) {
      const color = e.target.value;
      document.documentElement.style.setProperty('--heading-color', color);
    });
  }
  const opacitySlider = document.getElementById('overlayOpacity');
  if (opacitySlider) {
    const heroOverlay = document.querySelector('.hero-overlay');
    opacitySlider.addEventListener('input', function (e) {
      const val = parseInt(e.target.value, 10);
      const opacity = val / 100;
      if (heroOverlay) {
        heroOverlay.style.background = `rgba(0,0,0,${opacity})`;
      }
    });
  }
  const toggleEditBtn = document.getElementById('toggleEditMode');
  if (toggleEditBtn) {
    toggleEditBtn.addEventListener('click', function () {
      editMode = !editMode;
      document.body.classList.toggle('edit-mode', editMode);
      // toggle contenteditable on editable text elements
      document.querySelectorAll('[data-edit-id]').forEach(el => {
        el.contentEditable = editMode ? 'true' : 'false';
      });
      // Attach draggable only to free‑floating custom icons. Gallery images remain fixed
      // within the grid to prevent them from being dragged out of place.
      const customIcons = document.querySelectorAll('#customElements .custom-icon');
      customIcons.forEach(icon => {
        makeDraggable(icon);
      });

      // Build or remove gallery control bars depending on mode
      if (editMode) {
        setupGalleryEditUI();
        // Show hero/highlight position controls when entering edit mode
        updatePositionControlsVisibility();
      } else {
        removeGalleryEditUI();
        // Hide position controls when exiting edit mode
        updatePositionControlsVisibility();
      }
    });
  }


  // Text color picker
  const textColorPicker = document.getElementById('textColorPicker');
  if (textColorPicker) {
    textColorPicker.addEventListener('input', function (e) {
      const color = e.target.value;
      document.documentElement.style.setProperty('--text-color', color);
    });
  }
  // Navigation background color picker
  const navBgPicker = document.getElementById('navBgColorPicker');
  if (navBgPicker) {
    navBgPicker.addEventListener('input', function (e) {
      const color = e.target.value;
      document.documentElement.style.setProperty('--nav-bg-color', color);
    });
  }
  // Upload icon for free placement
  const iconInput = document.getElementById('adminUploadIcon');
  if (iconInput) {
    iconInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (ev) {
        const img = document.createElement('img');
        img.src = ev.target.result;
        img.classList.add('custom-icon');
        // Set default size and position near top-left
        img.style.width = '100px';
        img.style.left = '10px';
        img.style.top = '10px';
        document.getElementById('customElements').style.height = '100vh';
        const container = document.getElementById('customElements');
        container.appendChild(img);
        makeDraggable(img);
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    });
  }
  // Toggle Raw Entries
  const toggleRawBtn = document.getElementById('toggleRawEntries');
  if (toggleRawBtn) {
    toggleRawBtn.addEventListener('click', function () {
      const rawContainer = document.getElementById('rawContainer');
      if (rawContainer) {
        rawContainer.classList.toggle('hidden');
      }
    });
  }
  // Toggle Pending List
  const togglePendingBtn = document.getElementById('togglePendingBtn');
  if (togglePendingBtn) {
    togglePendingBtn.addEventListener('click', function () {
      const pendingList = document.getElementById('pendingList');
      if (pendingList) {
        pendingList.classList.toggle('hidden');
      }
    });
  }
  // Save settings button
  const saveBtn = document.getElementById('saveSettingsBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', function () {
      saveSiteSettings();
      alert('Settings saved.');
    });
  }

  // === Highlight reel and guest uploads admin controls ===
  // Attach change listeners for highlight image uploads. Each input corresponds
  // to a highlight slot. When a file is chosen, read it as a data URL
  // and store it in siteSettings.highlights at the corresponding index.
  [0, 1, 2, 3].forEach(idx => {
    const input = document.getElementById('highlightUpload' + idx);
    if (input) {
      input.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (ev) {
          if (!Array.isArray(siteSettings.highlights)) {
            siteSettings.highlights = [null, null, null, null];
          }
          siteSettings.highlights[idx] = ev.target.result;
          applyHighlightSettings();
          saveSiteSettings();
        };
        reader.readAsDataURL(file);
        // reset value so the same file can be re-selected
        e.target.value = '';
      });
    }
    const clearBtn = document.getElementById('clearHighlight' + idx);
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        if (!Array.isArray(siteSettings.highlights)) {
          siteSettings.highlights = [null, null, null, null];
        }
        siteSettings.highlights[idx] = null;
        applyHighlightSettings();
        saveSiteSettings();
      });
    }
  });
  // Guest uploads toggle: when enabled, update siteSettings and refresh the coming section
  const enableUploads = document.getElementById('enableGuestUploads');
  if (enableUploads) {
    // initial state from siteSettings
    enableUploads.checked = !!siteSettings.enableGuestUploads;
    enableUploads.addEventListener('change', function () {
      siteSettings.enableGuestUploads = enableUploads.checked;
      applyComingSoonSettings();
      saveSiteSettings();
    });
  }

  // Make admin boxes collapsible
  const adminBoxes = document.querySelectorAll('.admin-box');
  adminBoxes.forEach(box => {
    const heading = box.querySelector('h3');
    if (heading) {
      heading.addEventListener('click', () => {
        box.classList.toggle('collapsed');
      });
    }
  });
});

// Editable / drag functionality
let editMode = false;

function makeDraggable(el) {
  // Add border in edit mode via CSS; set relative/absolute when dragging
  el.style.cursor = 'move';
  // ensure absolute positioning if not already
  if (!el.dataset.draggableBound) {
    el.dataset.draggableBound = 'true';
    el.addEventListener('mousedown', function (e) {
      if (!editMode) return;
      e.preventDefault();
      // bring to front
      el.style.zIndex = 999;
      const rect = el.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      // set position absolute relative to body
      if (window.getComputedStyle(el).position !== 'absolute') {
        el.style.position = 'absolute';
        // set current coordinates to style
        el.style.left = rect.left + window.scrollX + 'px';
        el.style.top = rect.top + window.scrollY + 'px';
      }
      function onMove(ev) {
        el.style.left = (ev.clientX - offsetX) + 'px';
        el.style.top = (ev.clientY - offsetY) + 'px';
      }
      function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      }
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
  }
}

/**
 * Ensure the hero background also appears as a semi‑transparent thumbnail in the gallery.
 * This is inserted at the top of the gallery with a special class so it doesn’t
 * interfere with editing or play order. When called again it updates the src.
 * @param {string} src A data URI or URL for the hero image
 */
function updateHeroThumb(src) {
  /*
   * The original implementation inserted the current hero background image
   * into the top of the gallery as a semi‑transparent thumbnail. This behaviour
   * caused confusion because the hero photo (used behind the “We Do” heading)
   * would also appear in the gallery with the same transparency applied. To
   * avoid duplicating the hero image in the gallery, this function now exits
   * early. The hero background continues to be applied to the page via
   * style updates elsewhere, but no thumbnail is created in the gallery.
   */
  return;
}

/**
 * Construct editing controls for each gallery image. These controls allow
 * reordering, resizing and deleting images when edit mode is active. They
 * are built under each image and removed when edit mode is disabled.
 */
function setupGalleryEditUI() {
  const gallery = document.querySelector('.gallery-grid');
  if (!gallery) return;
  removeGalleryEditUI();
  // For each image that is not the hero thumbnail, insert control bar
  const imgs = gallery.querySelectorAll('img');
  imgs.forEach(img => {
    if (img.classList.contains('hero-thumb')) return;
    // Save the original size and crop position once, so reset can restore
    if (!img.dataset.originalWidth) {
      let origWidth = 100;
      if (img.style.width) {
        const val = parseFloat(img.style.width);
        if (!isNaN(val)) origWidth = val;
      }
      img.dataset.originalWidth = origWidth;
    }
    if (!img.dataset.originalPos) {
      const pos = img.style.objectPosition || '50% 50%';
      img.dataset.originalPos = pos;
    }
    // Create controls container
    const controls = document.createElement('div');
    controls.className = 'gallery-controls';
    // Move up button
    const upBtn = document.createElement('button');
    upBtn.textContent = '↑';
    upBtn.title = 'Move Up';
    upBtn.addEventListener('click', () => moveImage(img, 'up'));
    controls.appendChild(upBtn);
    // Move down button
    const downBtn = document.createElement('button');
    downBtn.textContent = '↓';
    downBtn.title = 'Move Down';
    downBtn.addEventListener('click', () => moveImage(img, 'down'));
    controls.appendChild(downBtn);
    // Size slider allows fine‑grained resizing without images jumping to huge values.
    const widthSlider = document.createElement('input');
    widthSlider.type = 'range';
    widthSlider.min = '50';
    widthSlider.max = '150';
    // Use current width percentage or default 100
    let currentWidth = 100;
    if (img.style.width) {
      const val = parseFloat(img.style.width);
      if (!isNaN(val)) currentWidth = val;
    }
    widthSlider.value = currentWidth.toString();
    widthSlider.title = 'Resize image';
    widthSlider.addEventListener('input', () => {
      // Save previous state for undo before changing
      pushImageState(img);
      const val = parseFloat(widthSlider.value);
      img.style.width = val + '%';
      img.style.height = 'auto';
    });
    controls.appendChild(widthSlider);
    // Add a numeric input next to the slider for precise sizing. The
    // numeric input allows admins to type an exact percentage (50–150)
    // and keeps in sync with the range slider.
    const widthInput = document.createElement('input');
    widthInput.type = 'number';
    widthInput.min = '50';
    widthInput.max = '150';
    widthInput.value = currentWidth.toString();
    widthInput.title = 'Resize image (percentage)';
    widthInput.style.width = '4rem';
    // Keep numeric input in sync when the slider changes
    widthSlider.addEventListener('input', () => {
      widthInput.value = widthSlider.value;
    });
    // When the numeric input changes, clamp value, sync slider and update image
    widthInput.addEventListener('input', () => {
      let val = parseFloat(widthInput.value);
      if (isNaN(val)) return;
      if (val < 50) val = 50;
      if (val > 150) val = 150;
      widthInput.value = val.toString();
      widthSlider.value = val.toString();
      // Save previous state
      pushImageState(img);
      img.style.width = val + '%';
      img.style.height = 'auto';
    });
    controls.appendChild(widthInput);
    // Crop slider for vertical positioning. Range 0 (top) to 100 (bottom).
    // Horizontal and vertical pan sliders allow the user to reposition the image within
    // its frame. X controls left/right (0 = left, 100 = right). Y controls top/bottom.
    const panSliderX = document.createElement('input');
    panSliderX.type = 'range';
    panSliderX.min = '0';
    panSliderX.max = '100';
    const panSliderY = document.createElement('input');
    panSliderY.type = 'range';
    panSliderY.min = '0';
    panSliderY.max = '100';
    // Determine current crop from objectPosition, default 50% 50%
    let currentPosX = 50;
    let currentPosY = 50;
    if (img.style.objectPosition) {
      const parts = img.style.objectPosition.split(' ');
      if (parts.length === 2) {
        const x = parseInt(parts[0]);
        const y = parseInt(parts[1]);
        if (!isNaN(x)) currentPosX = x;
        if (!isNaN(y)) currentPosY = y;
      }
    }
    panSliderX.value = currentPosX.toString();
    panSliderY.value = currentPosY.toString();
    panSliderX.title = 'Pan horizontally';
    panSliderY.title = 'Pan vertically';
    // Helper to update objectPosition when either slider changes
    function updateObjectPosition() {
      const x = parseInt(panSliderX.value);
      const y = parseInt(panSliderY.value);
      img.style.objectPosition = x + '% ' + y + '%';
    }
    panSliderX.addEventListener('input', () => {
      // Save previous state before change for undo
      pushImageState(img);
      updateObjectPosition();
    });
    panSliderY.addEventListener('input', () => {
      pushImageState(img);
      updateObjectPosition();
    });
    // Add the two sliders to controls
    controls.appendChild(panSliderX);
    controls.appendChild(panSliderY);
    // Reset button restores size and crop to original values
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '↺';
    resetBtn.title = 'Reset image';
    resetBtn.addEventListener('click', () => {
      // restore width
      const origW = parseFloat(img.dataset.originalWidth) || 100;
      img.style.width = origW + '%';
      img.style.height = 'auto';
      widthSlider.value = origW.toString();
      // Keep the numeric width input in sync when resetting
      if (typeof widthInput !== 'undefined') {
        widthInput.value = origW.toString();
      }
      // restore crop
      const origPos = img.dataset.originalPos || '50% 50%';
      img.style.objectPosition = origPos;
      const parts = origPos.split(' ');
      let x = 50;
      let y = 50;
      if (parts.length === 2) {
        const xi = parseInt(parts[0]);
        const yi = parseInt(parts[1]);
        if (!isNaN(xi)) x = xi;
        if (!isNaN(yi)) y = yi;
      }
      panSliderX.value = x.toString();
      panSliderY.value = y.toString();
    });
    controls.appendChild(resetBtn);
    // Undo button allows reverting the last change
    const undoBtn = document.createElement('button');
    undoBtn.textContent = '↩';
    undoBtn.title = 'Undo last change';
    undoBtn.addEventListener('click', () => {
      undoImageChange(img, widthSlider, panSliderX, panSliderY, widthInput);
    });
    controls.appendChild(undoBtn);
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.title = 'Delete image';
    deleteBtn.addEventListener('click', () => deleteImage(img));
    controls.appendChild(deleteBtn);
    // Append controls into the image wrapper so they overlay within the same grid cell.
    // The wrapper is the immediate parent of the image. Controls will be absolutely
    // positioned via CSS defined in styles.css.
    const wrapper = img.parentElement;
    if (wrapper) {
      wrapper.appendChild(controls);
    } else {
      // Fallback: insert after the image if no wrapper exists
      img.after(controls);
    }
  });
}

// Maintain a history of modifications for each image element. This allows
// undoing the most recent change. The map keys are the image elements
// themselves, and the values are arrays of state objects. Each state
// consists of the width percentage and objectPosition string. We only
// push a new state when a modification occurs.
const imageHistory = new Map();

/**
 * Capture and push the current state of the given image onto its history
 * stack. We record the width and objectPosition properties so they can
 * be restored later. Call this before making a change that should be
 * undoable.
 * @param {HTMLImageElement} img
 */
function pushImageState(img) {
  const state = {
    width: img.style.width || '',
    pos: img.style.objectPosition || ''
  };
  if (!imageHistory.has(img)) {
    imageHistory.set(img, []);
  }
  imageHistory.get(img).push(state);
}

/**
 * Undo the most recent change for the specified image. If there is a
 * recorded state in the history stack, the image properties are
 * restored. The sliders controlling width and pan values are updated to
 * reflect the restored state. If there is no history, nothing happens.
 * @param {HTMLImageElement} img
 * @param {HTMLInputElement} widthSlider
 * @param {HTMLInputElement} panSliderX
 * @param {HTMLInputElement} panSliderY
 */
function undoImageChange(img, widthSlider, panSliderX, panSliderY, widthInput) {
  const stack = imageHistory.get(img);
  if (!stack || stack.length === 0) return;
  const last = stack.pop();
  // restore width
  img.style.width = last.width;
  widthSlider.value = (parseFloat(last.width) || 100).toString();
  // Update numeric input if provided
  if (widthInput) {
    widthInput.value = widthSlider.value;
  }
  // restore object position
  img.style.objectPosition = last.pos;
  const parts = last.pos.split(' ');
  let x = 50;
  let y = 50;
  if (parts.length === 2) {
    const xi = parseInt(parts[0]);
    const yi = parseInt(parts[1]);
    if (!isNaN(xi)) x = xi;
    if (!isNaN(yi)) y = yi;
  }
  panSliderX.value = x.toString();
  panSliderY.value = y.toString();
}

/**
 * Remove all gallery editing control bars.
 */
function removeGalleryEditUI() {
  document.querySelectorAll('.gallery-controls').forEach(ctrl => ctrl.remove());
}

/**
 * Initialize collapsible detail cards in the Details section. Cards that have
 * content exceeding a reasonable height (roughly 220px) are collapsed by
 * default and a “Read more” toggle is appended. Tapping the toggle will
 * expand or collapse the card and update the button text accordingly.
 */
function initDetailCards() {
  const cards = document.querySelectorAll('#details .card');
  cards.forEach(card => {
    // Use a timeout to ensure the card has rendered and heights are available
    setTimeout(() => {
      // Do not add multiple toggles
      if (card.querySelector('.read-more')) return;
      // Only collapse if content is longer than the threshold
      if (card.scrollHeight > 260) {
        card.classList.add('collapsed');
        const btn = document.createElement('a');
        btn.href = '#';
        btn.className = 'read-more';
        btn.textContent = 'Read more';
        btn.addEventListener('click', e => {
          e.preventDefault();
          card.classList.toggle('collapsed');
          btn.textContent = card.classList.contains('collapsed') ? 'Read more' : 'Read less';
        });
        // Wrap the card and its button together. This wrapper ensures the card
        // and button occupy a single grid cell and stay vertically aligned.
        const wrapper = document.createElement('div');
        wrapper.className = 'card-wrapper';
        // Insert wrapper before the card and move card into it
        card.parentNode.insertBefore(wrapper, card);
        wrapper.appendChild(card);
        wrapper.appendChild(btn);
      }
    }, 0);
  });
}

/**
 * Move an image up or down within the gallery. Associated controls will
 * move along with the image. Movement is ignored if the image is already
 * at the beginning or end. Hero thumbnails are excluded from ordering.
 * @param {HTMLImageElement} img The image to move.
 * @param {string} direction 'up' or 'down'.
 */
function moveImage(img, direction) {
  const gallery = document.querySelector('.gallery-grid');
  if (!gallery) return;
  // Determine wrapper for this image (if exists). If the structure has been
  // transformed to gallery-item wrappers, we move those wrappers instead of
  // individual images and controls.
  const wrapper = img.closest('.gallery-item') || img;
  const items = Array.from(gallery.children);
  const currentIndex = items.indexOf(wrapper);
  if (currentIndex === -1) return;
  if (direction === 'up') {
    // find preceding non-hero wrapper
    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0) {
      const candidate = items[prevIndex];
      // skip hero thumbnails when moving other images
      const heroThumb = candidate.querySelector('.hero-thumb');
      if (!heroThumb) break;
      prevIndex--;
    }
    if (prevIndex >= 0) {
      gallery.insertBefore(wrapper, items[prevIndex]);
    }
  } else if (direction === 'down') {
    // find succeeding non-hero wrapper
    let nextIndex = currentIndex + 1;
    while (nextIndex < items.length) {
      const candidate = items[nextIndex];
      const heroThumb = candidate.querySelector('.hero-thumb');
      if (!heroThumb) break;
      nextIndex++;
    }
    if (nextIndex < items.length) {
      const afterNext = items[nextIndex].nextElementSibling;
      if (afterNext) {
        gallery.insertBefore(wrapper, afterNext);
      } else {
        gallery.appendChild(wrapper);
      }
    }
  }
}

/**
 * Adjust an image width by a delta percent. The size is constrained between
 * 40% and 150%. Only affects the width; height remains automatic to preserve
 * aspect ratio.
 * @param {HTMLImageElement} img The image to resize.
 * @param {number} delta The change in percentage (positive or negative).
 */
function resizeImage(img, delta) {
  // Determine current size stored in dataset or style
  let current = img.style.width ? parseFloat(img.style.width) : 100;
  if (isNaN(current)) current = 100;
  let nextSize = current + delta;
  if (nextSize < 40) nextSize = 40;
  if (nextSize > 150) nextSize = 150;
  img.style.width = nextSize + '%';
  img.style.height = 'auto';
}

/**
 * Remove an image and its controls from the gallery. Hero thumbnails cannot be
 * deleted.
 * @param {HTMLImageElement} img The image to remove.
 */
function deleteImage(img) {
  // Prevent deletion of the hero thumbnail
  if (img.classList.contains('hero-thumb')) return;
  const gallery = document.querySelector('.gallery-grid');
  if (!gallery) return;
  // Determine wrapper
  const wrapper = img.closest('.gallery-item') || img;
  wrapper.remove();
}

// -----------------------------------------------------------------------------
// Game overlay and high‑score logic
//
// The following helper functions allow the Everest Love Run game to be launched
// as a modal overlay when an RSVP is submitted. High scores are recorded in
// localStorage and limited to the top 10 entries. When the game finishes,
// the overlay is closed and the admin dashboard is refreshed.

/**
 * Show the Everest Love Run game as a full‑screen overlay. This adds a
 * `.show` class to the #game section and prevents body scrolling. The
 * current player names are stored globally so they can be associated
 * with the final score when the game ends.
 * @param {Array<string>} names The guests who just submitted the RSVP.
 */
window.showGameOverlay = function (names) {
  const gameSection = document.getElementById('game');
  if (!gameSection) return;
  gameSection.classList.add('show');
  document.body.classList.add('no-scroll');
  // Store current player names for high‑score tracking
  window.currentPlayerNames = names || [];
  // Immediately start the game (disable the start button so users can't restart while overlay is open)
  const startBtnInner = document.getElementById('startGameBtn');
  if (startBtnInner) startBtnInner.disabled = true;
  if (typeof window.startEverestLoveRun === 'function') {
    window.startEverestLoveRun();
  }
  // Show a persistent exit button so users can exit the game at any time
  const overlayExitBtn = document.getElementById('overlayExitBtn');
  if (overlayExitBtn) {
    overlayExitBtn.style.display = 'block';
    // Remove existing listeners to avoid stacking
    overlayExitBtn.removeEventListener('click', window.hideGameOverlay);
    overlayExitBtn.addEventListener('click', window.hideGameOverlay);
  }
};

/**
 * Hide the game overlay and re‑enable body scrolling. It also resets
 * the Start Game button so the game can be played again later.
 */
window.hideGameOverlay = function () {
  const gameSection = document.getElementById('game');
  if (!gameSection) return;
  gameSection.classList.remove('show');
  document.body.classList.remove('no-scroll');
  const startBtnInner = document.getElementById('startGameBtn');
  if (startBtnInner) startBtnInner.disabled = false;
  // Hide the scoreboard if visible
  const board = document.getElementById('scoreBoard');
  if (board) board.style.display = 'none';
  // Hide the persistent exit button
  const overlayExitBtn = document.getElementById('overlayExitBtn');
  if (overlayExitBtn) overlayExitBtn.style.display = 'none';
  // If a confirmation popup is pending (set on form submit), show it now
  if (window.pendingConfirmation) {
    if (typeof window.showRsvpConfirmation === 'function') {
      window.showRsvpConfirmation();
    }
    window.pendingConfirmation = false;
  }
};

/**
 * Save a high score entry. Each entry includes the player names, score and
 * timestamp. High scores are stored in localStorage under the key
 * `highScores` and only the top 10 are kept.
 * @param {string} names The player names, joined by &.
 * @param {number} score The final score achieved.
 */
window.saveHighScore = function (names, score) {
  let highScores = [];
  try {
    highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  } catch (e) {
    highScores = [];
  }
  highScores.push({ names, score, timestamp: new Date().toISOString() });
  highScores.sort((a, b) => b.score - a.score);
  highScores = highScores.slice(0, 10);
  localStorage.setItem('highScores', JSON.stringify(highScores));
};

/**
 * Callback invoked by the Everest Love Run game on completion. The game
 * script is expected to call `window.afterEverestGame(finalScore)` when
 * finishGame() runs. This callback records the high score and closes the
 * overlay, then refreshes the admin display so new scores are visible.
 * @param {number} finalScore The final score reported by the game.
 */
window.afterEverestGame = function (finalScore) {
  const names = window.currentPlayerNames || [];
  if (names.length) {
    window.saveHighScore(names.join(' & '), finalScore);
  }
  window.hideGameOverlay();
  // Refresh admin display to show latest RSVPs and high scores
  renderAdmin();
};

/*
 * Show a celebratory popup and confetti when an RSVP has been recorded and the
 * game overlay is closed. This function creates a pop‑up element with a
 * thank‑you message and triggers a simple confetti animation using colored
 * circles. After a few seconds the popup and confetti are removed.
 */
window.showRsvpConfirmation = function () {
  const popup = document.getElementById('rsvpPopup');
  if (!popup) return;
  // Create a more expressive message with heading
  popup.innerHTML = '<h2 style="margin-top:0">RSVP Received!</h2><p>Your response has been recorded – thank you!</p>';
  popup.classList.remove('hidden');
  // Launch confetti animation for celebration
  launchConfetti();
  // Hide popup after 4 seconds
  setTimeout(() => {
    popup.classList.add('hidden');
  }, 4000);
};

/**
 * Generate and animate small confetti pieces falling across the page. This
 * function creates multiple confetti elements with random positions and
 * colors. Confetti pieces are automatically removed after the animation.
 */
function launchConfetti() {
  const colors = ['#f8bbd0', '#ffd180', '#c5e1a5', '#b39ddb', '#ffab91'];
  const pieces = 30;
  for (let i = 0; i < pieces; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    // Random horizontal start position across viewport
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    // Random size
    const size = 6 + Math.random() * 8;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    // Random color
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    // Append to body
    document.body.appendChild(confetti);
    // Remove after animation completes
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

/* ------------------------------------------------------------------
 * IndexedDB helpers for persisting larger media such as the background
 * music. LocalStorage typically has a limit of ~5 MB per origin; to
 * allow songs up to around 10 MB, we store the binary file in
 * IndexedDB instead. The siteSettings object will store a flag
 * musicStored=true when a track has been saved.  When applying
 * settings, loadMusicFromDB() retrieves the blob and converts it to a
 * temporary object URL.
 */
const dbName = 'weddingSiteDB';
const storeName = 'media';

function saveMusicToDB(fileBlob, callback) {
  const openReq = indexedDB.open(dbName, 1);
  openReq.onupgradeneeded = function (e) {
    const db = e.target.result;
    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName);
    }
  };
  openReq.onerror = function () {
    console.error('IndexedDB open error while saving music');
    if (callback) callback(false);
  };
  openReq.onsuccess = function (e) {
    const db = e.target.result;
    const txn = db.transaction(storeName, 'readwrite');
    const store = txn.objectStore(storeName);
    const putReq = store.put(fileBlob, 'bgMusic');
    putReq.onsuccess = function () {
      db.close();
      if (callback) callback(true);
    };
    putReq.onerror = function () {
      console.error('Failed to save music blob to IndexedDB');
      db.close();
      if (callback) callback(false);
    };
  };
}

function loadMusicFromDB(callback) {
  const openReq = indexedDB.open(dbName, 1);
  openReq.onupgradeneeded = function (e) {
    // Create store if it doesn't exist
    const db = e.target.result;
    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName);
    }
  };
  openReq.onerror = function () {
    console.error('IndexedDB open error while loading music');
    if (callback) callback(null);
  };
  openReq.onsuccess = function (e) {
    const db = e.target.result;
    const txn = db.transaction(storeName, 'readonly');
    const store = txn.objectStore(storeName);
    const getReq = store.get('bgMusic');
    getReq.onsuccess = function () {
      const fileBlob = getReq.result;
      db.close();
      callback(fileBlob || null);
    };
    getReq.onerror = function () {
      console.error('Failed to load music blob from IndexedDB');
      db.close();
      callback(null);
    };
  };
}

function deleteMusicFromDB(callback) {
  const openReq = indexedDB.open(dbName, 1);
  openReq.onupgradeneeded = function (e) {
    const db = e.target.result;
    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName);
    }
  };
  openReq.onsuccess = function (e) {
    const db = e.target.result;
    const txn = db.transaction(storeName, 'readwrite');
    const store = txn.objectStore(storeName);
    const delReq = store.delete('bgMusic');
    delReq.onsuccess = function () {
      db.close();
      if (callback) callback(true);
    };
    delReq.onerror = function () {
      console.error('Failed to delete music from IndexedDB');
      db.close();
      if (callback) callback(false);
    };
  };
  openReq.onerror = function () {
    console.error('IndexedDB open error while deleting music');
    if (callback) callback(false);
  };
}

/* ---------------------------------------------------------
 * Admin customisation helpers for editing Details cards
 *
 * The admin panel includes textareas for the Dress Attire,
 * Transportation and Accommodation cards. Admins can update
 * their content, save it to localStorage and have it persist
 * across sessions. The functions below implement this logic
 * and integrate with the admin login process.
 * --------------------------------------------------------- */

/**
 * Load custom details text from localStorage and apply it to the Details cards.
 * If there is no saved text, existing DOM content is left as-is.
 */
function loadSavedDetails() {
  const dress = localStorage.getItem('detailsDress');
  const transport = localStorage.getItem('detailsTransport');
  const accom = localStorage.getItem('detailsAccom');
  // Helper to update card text safely
  function updateCardText(cardIndex, text) {
    const cards = document.querySelectorAll('#details .card');
    if (cards && cards[cardIndex]) {
      const p = cards[cardIndex].querySelector('p');
      if (p && text) {
        p.innerHTML = text.replace(/\n/g, '<br>');
      }
    }
  }
  updateCardText(0, dress);
  updateCardText(1, transport);
  updateCardText(2, accom);
}

/**
 * Populate the admin editor textareas with the current Details card text. If
 * custom text is saved in localStorage, use that; otherwise read from the DOM.
 */
function populateDetailsEditor() {
  const dressInput = document.getElementById('editDress');
  const transportInput = document.getElementById('editTransport');
  const accomInput = document.getElementById('editAccom');
  if (!dressInput || !transportInput || !accomInput) return;
  // Helper to read card text from DOM (convert <br> to \n)
  function getCardText(cardIndex) {
    const cards = document.querySelectorAll('#details .card');
    if (cards && cards[cardIndex]) {
      const p = cards[cardIndex].querySelector('p');
      if (p) {
        return p.innerHTML.replace(/<br\s*\/?>/gi, '\n');
      }
    }
    return '';
  }
  // Prefer values from localStorage if available
  const savedDress = localStorage.getItem('detailsDress');
  const savedTransport = localStorage.getItem('detailsTransport');
  const savedAccom = localStorage.getItem('detailsAccom');
  dressInput.value = savedDress ? savedDress : getCardText(0);
  transportInput.value = savedTransport ? savedTransport : getCardText(1);
  accomInput.value = savedAccom ? savedAccom : getCardText(2);
}

/**
 * Save the edited details from the admin panel to localStorage and update the
 * Details cards on the page.
 */
function saveDetails() {
  const dressVal = document.getElementById('editDress').value.trim();
  const transportVal = document.getElementById('editTransport').value.trim();
  const accomVal = document.getElementById('editAccom').value.trim();
  // Save to localStorage
  localStorage.setItem('detailsDress', dressVal);
  localStorage.setItem('detailsTransport', transportVal);
  localStorage.setItem('detailsAccom', accomVal);
  // Update the DOM immediately
  function updateCard(cardIndex, text) {
    const cards = document.querySelectorAll('#details .card');
    if (cards && cards[cardIndex]) {
      const p = cards[cardIndex].querySelector('p');
      if (p) {
        p.innerHTML = text.replace(/\n/g, '<br>');
      }
    }
  }
  updateCard(0, dressVal);
  updateCard(1, transportVal);
  updateCard(2, accomVal);
  alert('Details updated successfully.');
}

/**
 * Load custom program timeline from localStorage. If a saved array is
 * present under the key `timelineEvents`, it replaces the default
 * `timelineEvents` defined at the top of this script.
 */
function loadSavedProgram() {
  try {
    const saved = JSON.parse(localStorage.getItem('timelineEvents'));
    if (Array.isArray(saved)) {
      timelineEvents = saved;
    }
  } catch (e) {
    // ignore invalid JSON
  }
}

/**
 * Populate the program editor textarea in the admin panel with the current
 * timeline events as formatted JSON. This function is called after
 * successful admin login to pre-fill the editor.
 */
function populateProgramEditor() {
  const progInput = document.getElementById('editProgram');
  if (!progInput) return;
  progInput.value = JSON.stringify(timelineEvents, null, 2);
}

/**
 * Save the updated program timeline from the admin textarea. The textarea
 * should contain valid JSON representing an array of event objects with
 * `time`, `title` and `desc` properties. On success, the new timeline is
 * stored in localStorage, the global `timelineEvents` variable is updated,
 * and the timeline is re-rendered.
 */
function saveProgram() {
  const progInput = document.getElementById('editProgram');
  if (!progInput) return;
  let newEvents;
  try {
    newEvents = JSON.parse(progInput.value);
  } catch (e) {
    alert('Invalid JSON. Please check your syntax.');
    return;
  }
  if (!Array.isArray(newEvents)) {
    alert('Program must be an array of event objects.');
    return;
  }
  for (const ev of newEvents) {
    if (!ev || typeof ev.time !== 'string' || typeof ev.title !== 'string' || typeof ev.desc !== 'string') {
      alert('Each event must have `time`, `title` and `desc` properties.');
      return;
    }
  }
  timelineEvents = newEvents;
  localStorage.setItem('timelineEvents', JSON.stringify(newEvents));
  loadTimeline();
  alert('Program updated successfully.');
}

// On initial load, apply any saved details to the page
loadSavedDetails();
// Load saved program timeline from localStorage (if provided)
loadSavedProgram();

/* === Editable Program Timeline (Hybrid Editor) === */
/**
 * Initialize the program timeline editor UI. This function populates
 * the #programEditor container with a row of inputs for each event
 * defined in the global timelineEvents array. It is called after
 * admin login and whenever the editor needs to reflect current
 * program data. Each row includes fields for time, title,
 * description, optional emoji icon, optional chip text and URL,
 * and buttons to reorder or remove the event.
 */
function initProgramEditor() {
  const editor = document.getElementById('programEditor');
  if (!editor) return;
  // Clear existing rows
  editor.innerHTML = '';
  // For each event in timelineEvents, create a row
  timelineEvents.forEach((eventObj) => {
    createEventRow(eventObj);
  });
}

/**
 * Create a single editable event row and append it to the
 * #programEditor container. You can supply an existing event object
 * to prefill the inputs; otherwise the row will be blank. The row
 * contains inputs for time, title, description, icon, chip text,
 * chip URL, plus up/down/remove buttons. Moving rows only affects
 * DOM order; data is committed when saveProgramEvents() is called.
 *
 * @param {Object} ev The event object with keys: time, title,
 * desc, icon (optional), chip (optional {text, url}).
 */
function createEventRow(ev = {}) {
  const editor = document.getElementById('programEditor');
  if (!editor) return;
  const row = document.createElement('div');
  row.className = 'program-row';
  // Time field
  const timeInput = document.createElement('input');
  timeInput.type = 'text';
  timeInput.placeholder = 'Time (e.g. 3:30 PM)';
  timeInput.value = ev.time || '';
  timeInput.className = 'program-time input';
  // Title field
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.placeholder = 'Title (e.g. Ceremony)';
  titleInput.value = ev.title || '';
  titleInput.className = 'program-title input';
  // Description field
  const descInput = document.createElement('textarea');
  descInput.placeholder = 'Description';
  descInput.rows = 2;
  descInput.value = ev.desc || '';
  descInput.className = 'program-desc textarea';
  // Icon (emoji) field
  const iconInput = document.createElement('input');
  iconInput.type = 'text';
  iconInput.placeholder = 'Emoji (optional)';
  iconInput.maxLength = 2; // small length to encourage single emoji
  iconInput.value = ev.icon || '';
  iconInput.className = 'program-icon input';
  // Chip text field
  const chipTextInput = document.createElement('input');
  chipTextInput.type = 'text';
  chipTextInput.placeholder = 'Chip label (optional)';
  chipTextInput.value = (ev.chip && ev.chip.text) || '';
  chipTextInput.className = 'program-chip-text input';
  // Chip URL field
  const chipUrlInput = document.createElement('input');
  chipUrlInput.type = 'text';
  chipUrlInput.placeholder = 'Chip URL (optional)';
  chipUrlInput.value = (ev.chip && ev.chip.url) || '';
  chipUrlInput.className = 'program-chip-url input';
  // Buttons for reorder and remove
  const controls = document.createElement('div');
  controls.className = 'program-controls';
  // Up button
  const upBtn = document.createElement('button');
  upBtn.type = 'button';
  // Use triangular arrows for better cross‑font support
  upBtn.textContent = '▲';
  upBtn.title = 'Move up';
  upBtn.className = 'btn secondary small program-up';
  upBtn.addEventListener('click', () => {
    const prev = row.previousElementSibling;
    if (prev) editor.insertBefore(row, prev);
  });
  // Down button
  const downBtn = document.createElement('button');
  downBtn.type = 'button';
  // Use triangular arrows for better cross‑font support
  downBtn.textContent = '▼';
  downBtn.title = 'Move down';
  downBtn.className = 'btn secondary small program-down';
  downBtn.addEventListener('click', () => {
    const next = row.nextElementSibling;
    if (next) editor.insertBefore(next, row);
  });
  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.textContent = '✕';
  removeBtn.title = 'Remove';
  removeBtn.className = 'btn danger small program-remove';
  removeBtn.addEventListener('click', () => {
    editor.removeChild(row);
  });
  // Append buttons to controls container
  controls.appendChild(upBtn);
  controls.appendChild(downBtn);
  controls.appendChild(removeBtn);
  // Append all fields and controls to row
  row.appendChild(timeInput);
  row.appendChild(titleInput);
  row.appendChild(descInput);
  row.appendChild(iconInput);
  row.appendChild(chipTextInput);
  row.appendChild(chipUrlInput);
  row.appendChild(controls);
  // Append row to editor
  editor.appendChild(row);
}

/**
 * Handler for the Add Event button. Creates a new blank event row at
 * the end of the program editor.
 */
function addEventRow() {
  createEventRow({});
}

/**
 * Gather all event rows from the program editor, validate the inputs,
 * construct a new timeline array and save it. If required fields
 * (time, title, description) are missing for any row, the save is
 * aborted and an alert prompts the admin to correct the inputs.
 */
/**
 * Save the updated program timeline from the dynamic editor. When silent
 * is true, suppress the success alert. This function collects all event
 * rows, validates required fields, updates the global timelineEvents
 * array, persists it to localStorage, and re-renders the timeline on
 * the page.
 * @param {boolean} silent Optional flag to suppress the alert message.
 */
function saveProgramEvents(silent = false) {
  const editor = document.getElementById('programEditor');
  if (!editor) return;
  const rows = editor.querySelectorAll('.program-row');
  const newEvents = [];
  for (const row of rows) {
    const time = row.querySelector('.program-time').value.trim();
    const title = row.querySelector('.program-title').value.trim();
    const desc = row.querySelector('.program-desc').value.trim();
    if (!time || !title || !desc) {
      alert('Each event must have a time, title and description.');
      return;
    }
    const iconVal = row.querySelector('.program-icon').value.trim();
    const chipText = row.querySelector('.program-chip-text').value.trim();
    const chipUrl = row.querySelector('.program-chip-url').value.trim();
    const eventObj = { time, title, desc };
    if (iconVal) eventObj.icon = iconVal;
    if (chipText) {
      eventObj.chip = { text: chipText };
      if (chipUrl) eventObj.chip.url = chipUrl;
    }
    newEvents.push(eventObj);
  }
  timelineEvents = newEvents;
  // Persist in localStorage
  localStorage.setItem('timelineEvents', JSON.stringify(timelineEvents));
  // Persist timeline events to siteSettings so that program updates
  // can be synchronised across devices via GitHub.  This array will be
  // saved to siteSettings.json when Save All is clicked.
  try {
    if (typeof siteSettings === 'object') {
      siteSettings.timelineEvents = JSON.parse(JSON.stringify(timelineEvents));
    }
  } catch (err) {
    console.warn('Failed to clone timelineEvents for siteSettings', err);
  }
  // Update the displayed timeline
  loadTimeline();
  // Only show an alert if not saving silently (e.g. via Save All)
  if (!silent) {
    alert('Program updated successfully.');
  }
}

/* === Unified Content Editor === */
/**
 * Initialise the content editor within the admin dashboard. This function
 * scans a predefined list of data-edit-id values and builds a form row
 * for each one inside the #contentEditor container. Each row consists
 * of a label and either a single-line input or a textarea (for longer
 * paragraphs). Values are prefilled from siteSettings.textContents if
 * available, otherwise from the existing page content. When editing
 * fields here, changes are not committed to the page until Save All
 * is clicked.
 */
function initContentEditor() {
  const container = document.getElementById('contentEditor');
  if (!container) return;
  // Clear any existing editor controls
  container.innerHTML = '';
  // Predefined list of editable fields and their labels. The multiline
  // property indicates whether to use a textarea instead of a single-line
  // input. Feel free to extend this list to cover additional content
  // areas with a matching data-edit-id.
  const fields = [
    { id: 'story-title', label: 'Our Story Title' },
    { id: 'story-subtitle', label: 'Our Story Subtitle' },
    { id: 'story-body', label: 'Our Story Body', multiline: true },
    { id: 'program-title', label: 'Program Title' },
    { id: 'program-subtitle', label: 'Program Subtitle' },
    { id: 'details-title', label: 'Details Section Title' },
    { id: 'details-dress', label: 'Dress Attire Description', multiline: true },
    { id: 'details-transport', label: 'Transportation Description', multiline: true },
    { id: 'details-accom', label: 'Accommodation Description', multiline: true },
    { id: 'rsvp-title', label: 'RSVP Title' },
    { id: 'rsvp-subtitle', label: 'RSVP Subtitle' }
  ];
  fields.forEach(field => {
    const row = document.createElement('div');
    row.className = 'content-row';
    // Label
    const label = document.createElement('label');
    label.setAttribute('for', 'edit-' + field.id);
    label.textContent = field.label;
    row.appendChild(label);
    // Determine whether to use textarea or input
    let input;
    if (field.multiline) {
      input = document.createElement('textarea');
      input.rows = 3;
    } else {
      input = document.createElement('input');
      input.type = 'text';
    }
    input.id = 'edit-' + field.id;
    input.dataset.fieldId = field.id;
    // Prefill value from siteSettings.textContents or current DOM
    let val = '';
    if (siteSettings && siteSettings.textContents && siteSettings.textContents[field.id]) {
      val = siteSettings.textContents[field.id];
    } else {
      const el = document.querySelector('[data-edit-id="' + field.id + '"]');
      if (el) {
        // For paragraphs, convert <br> to newline
        if (field.multiline) {
          val = el.innerHTML.replace(/<br\s*\/?>/gi, '\n');
        } else {
          val = el.textContent.trim();
        }
      }
    }
    input.value = val;
    // Attach to row
    row.appendChild(input);
    // Append row to container
    container.appendChild(row);
  });
}

/**
 * Save all changes across content sections, program timeline and site
 * settings. Called when the admin clicks the Save All button. This
 * function collects values from the content editor, updates the
 * corresponding DOM elements and siteSettings.textContents, silently
 * saves the program events (to avoid multiple alerts), and persists
 * everything via saveSiteSettings(). A unified success alert is shown
 * upon completion.
 */
function saveAllChanges() {
  // Save text content from content editor
  const editor = document.getElementById('contentEditor');
  if (editor) {
    const inputs = editor.querySelectorAll('[data-field-id]');
    inputs.forEach(input => {
      const fieldId = input.dataset.fieldId;
      let value = input.value;
      if (!siteSettings.textContents) siteSettings.textContents = {};
      siteSettings.textContents[fieldId] = value;
      // Update page DOM for immediate preview
      const el = document.querySelector('[data-edit-id="' + fieldId + '"]');
      if (el) {
        if (el.tagName === 'P' || el.tagName === 'DIV') {
          // Replace newlines with <br> tags for paragraphs
          el.innerHTML = value.replace(/\n/g, '<br>');
        } else {
          el.textContent = value;
        }
      }
    });
  }
  // Save program timeline silently
  if (typeof saveProgramEvents === 'function') {
    saveProgramEvents(true);
  }
  // Persist site settings (colors, hero positions, gallery data etc.)
  if (typeof saveSiteSettings === 'function') {
    saveSiteSettings();
  }
  // Reapply settings to ensure updates take effect (e.g. hero and highlight positions)
  if (typeof applySiteSettings === 'function') {
    applySiteSettings();
  }
  // Update coming soon section if guest uploads toggle changed
  if (typeof applyComingSoonSettings === 'function') {
    applyComingSoonSettings();
  }
  // Prepare a summary of the categories that were updated. This gives the
  // admin clear feedback on what was saved and will be published. We check
  // for the presence of key properties on siteSettings and compile a
  // human‑readable list. This does not attempt a diff against previous
  // values, but it provides an overview of what types of content are
  // currently stored.
  const summary = [];
  try {
    if (siteSettings.textContents && Object.keys(siteSettings.textContents).length) {
      summary.push('text content');
    }
    if (Array.isArray(siteSettings.timelineEvents) && siteSettings.timelineEvents.length) {
      summary.push('program timeline');
    }
    if (siteSettings.music) {
      summary.push('background music');
    }
    if (siteSettings.heroBg) {
      summary.push('hero image');
    }
    if (Array.isArray(siteSettings.highlights) && siteSettings.highlights.length) {
      summary.push('highlights');
    }
    if (Array.isArray(siteSettings.gallery) && siteSettings.gallery.length) {
      summary.push('gallery images');
    }
    if (siteSettings.headingColor || siteSettings.textColor || siteSettings.navBgColor) {
      summary.push('design colours');
    }
    if (Array.isArray(siteSettings.customIcons) && siteSettings.customIcons.length) {
      summary.push('custom icons');
    }
  } catch (err) {
    console.warn('Failed to build summary of changes:', err);
  }
  const summaryMsg = summary.length ? ('Changes saved: ' + summary.join(', ') + '.\nYour updates will appear on the public site after a short delay.') : 'All changes saved successfully.';
  // Display a toast message below the Save All button if available. This provides visual feedback
  // without requiring the user to dismiss a browser alert. If no status element exists, fall back
  // to a native alert.
  const statusEl = document.getElementById('saveAllStatus');
  if (statusEl) {
    statusEl.textContent = summaryMsg;
    statusEl.classList.remove('hidden');
    // Hide the status after a short delay
    setTimeout(() => {
      statusEl.classList.add('hidden');
    }, 6000);
  } else {
    alert(summaryMsg);
  }
}