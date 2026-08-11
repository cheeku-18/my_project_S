/* ============================================================
   OUR STORY ❤ — main.js
   Everything editable lives in CONFIG below. Replace names, dates,
   photos, song notes, notes about her, etc. here — the rest of the
   site rebuilds itself automatically from this object.
   ============================================================ */

const CONFIG = {
  names: { her: "Shivangi", him: "Aaryan" },
  firstMetISO: "2025-09-24T20:30:00", // <-- EDIT: date & time you first met

  typingLines: [
    "This is our story, still being written…",
    "Every page of it has your name in it.",
    "And today, I want to write the next one — with you."
  ],

  // ---------------- About Her ----------------
  qualities: [
    { icon: "💗", title: "Her Kindness", text: "You make strangers feel like old friends within minutes. That kind of warmth isn't taught, it's just who you are." },
    {
      icon: "😊",
      title: "Her Smile",
      text: "I've only seen it a few times, but somehow it's become one of my favorite things about her."
    }, { icon: "🧠", title: "Her Intelligence", text: "You ask the questions no one else thinks to ask, and somehow you're always three steps ahead of me." },
    {
      icon: "🤍",
      title: "The Way She Talks",
      text: "There was something about our conversations that made me want to listen more and more."
    }, { icon: "🌷", title: "Her Support", text: "You've believed in every one of my half formed plans before I believed in them myself." },
    {
      icon: "✨",
      title: "Her Beauty",
      text: "Some people are beautiful because of how they look. You are beautiful because it's impossible not to notice you the moment you walk into a room."
    },
  ],

  // ---------------- Memories Gallery ----------------
  // Replace `img` with a real photo URL/path and it will render as an <img>.
  // Leave `img` empty to keep the elegant placeholder gradient tile.
  gallery: [
    {
      img: "assets/photos/ima.jpeg",
      caption: "Before we ever had a photo together, I took one picture of you and one of me and stitched them into the same frame. A little Ghibli dream, perhaps but you were already living rent-free in my heart, and my imagination couldn't resist putting us side by side.",
      tone: "1"
    },



    {
      img: "assets/photos/2.JPG",
      caption: "Some people light up a room when they walk in. You somehow light up the entire memory, even years later.",
      tone: "3"
    },

    {
      img: "assets/photos/3.jpeg",
      caption: "Some sights simply refuse to leave your heart.",
      tone: "4"
    },
    {
      img: "assets/photos/us.JPG",
      caption: "A simple photograph to everyone else. To me, it was the moment I finally stood beside the girl who had already captured my heart.",
      tone: "2"
    },
    {
      img: "assets/photos/youu.jpg",
      caption: "The first birthday we celebrated together. You looked so beautiful that day, I spent more time admiring you than the decorations.",
      tone: "5"
    },

    {
      img: "assets/photos/5.JPG",
      caption: "An Apsara? An angel? I still haven't found the right word. All I know is that heaven must be missing one of its stars.",
      tone: "1"
    },

    {
      img: "assets/photos/bdy.JPG",
      caption: "Your birthday, and the first time I posted you on Instagram. Some people probably wondered how I knew a girl that beautiful. Honestly, I wondered the same thing. The world saw a picture; I saw the girl who had already become my favorite part of every day.",
      tone: "2"
    },

    // {
    //   img: "",
    //   caption: "An Apsara? An angel? I still haven't found the right word. All I know is that heaven must be missing one of its stars.",
    //   tone: "3"
    // }
  ],

  // ---------------- Timeline ----------------
  timeline: [
    { date: "Aug 2024", title: "Friend Request sent ", text: "I saw an Angel and lost in her Beauty." },
    { date: "Oct 2024", title: "First Real Conversation", text: "Three hours felt like ten minutes. We still don't know what we talked about." },
    { date: "24th Sept 2025", title: "We Met", text: "A completely unplanned meeting that somehow changed everything." },
    {
      date: "25th Oct 2025",
      title: "Your Birthday",
      text: "Amidst a sea of familiar faces, I stood there as a stranger, quietly battling my nerves. Then you walked in radiant, ethereal, almost as if heaven had borrowed one of its finest creations for the evening. In that moment, every ounce of uncertainty vanished, and all I could do was admire the breathtaking girl standing before me."
    }, {
      date: "20th June 2026",
      title: "Meeting for the Third Time",
      text: "By the third meeting, the nervousness was still there but so was the feeling that you were someone special."
    }, { date: "Today", title: "This Website", text: "Everything I've never quite said out loud, finally written down." },
    { date: "Someday", title: "Whatever Comes Next", text: "Written together, one page at a time." }
  ],

  // ---------------- If Our Love Were A Song ----------------
  // Six "notes" on the musical scale, each one a different note/verse
  // describing her and what this love feels like. Edit freely — the
  // `note` field is the little scale label on the card, `title` is the
  // heading, `text` is the verse/description itself.
  songNotes: [
    { note: "Do", title: "The Opening Note", text: "The very first moment the message I almost didn't send, and the reply that changed everything after it." },
    { note: "Re", title: "The Steady Rhythm", text: "Every call, every late-night text, the quiet consistency of you showing up even when I made it hard to." },
    { note: "Mi", title: "The Harmony", text: "How easily we fit your patience meeting my hesitation, and somehow making a whole, complete sound out of it." },
    { note: "Fa", title: "The Bridge", text: "The gap of months and almosts three meetings, countless calls and still, somehow, us." },
    { note: "Sol", title: "The Crescendo", text: "This the part where I finally stop overthinking and just say it: it's you, it's always been you." },
    { note: "La", title: "The Note That Lingers", text: "Whatever comes next, this is the note I want playing quietly under every day we get from here." }
  ],

  // ---------------- Notes About Her ----------------
  // A running, editable notebook/column — add, remove, or rewrite these
  // freely. Each entry is a little note about her, a memory, or a
  // thought you want written down somewhere real.
  notesAboutHer: [
    { date: "", title: "My Favourite View ✨", text: "There are beautiful sunsets, beautiful skies, beautiful places… and then there’s you.The problem is, after seeing you, everything else feels slightly less beautiful." },
    { date: "", title: "A Little Confession 🌙", text: "I don't know what’s more addictive talking to you, looking at you, or thinking about you when you’re not around. Actually… forget it. It’s all of you. ❤️" },
    { date: "", title: "Youuuuuuu ", text: "You don’t need makeup, perfect lighting, or the right angle to look beautiful. You just need to exist. ❤️" }

  ],

  // ---------------- Future Dreams ----------------
  dreams: [
    {
      icon: "🕉️",
      title: "Jyotirling Darshan Together",
      text: "Visiting all the sacred Jyotirlings hand in hand, collecting blessings and memories."
    },
    {
      icon: "🏖️",
      title: "Goa, Just Us",
      text: "Sunsets, beaches, and endless conversations by the sea."
    },
    {
      icon: "✈️",
      title: "International Trips Together",
      text: "Exploring new countries, cultures, and adventures across the world."
    },
    {
      icon: "🏔️",
      title: "Mountains & Morning Views",
      text: "Waking up to clouds, cold winds, and breathtaking mountain landscapes."
    },
    {
      icon: "🏍️",
      title: "Bike Trip To Ladakh",
      text: "Conquering every turn of the journey with you riding beside me."
    },
      {
      icon: "❤️" ,
      title: "What's Next For Us?",
      text: "Not knowing exactly where life will take us but knowing that I want to keep choosing you through every new chapter. More places, more dreams, more laughter, more challenges, and hopefully a lifetime of saying, “Remember when we did that?”."
    },
  ],

  // ---------------- Voice Notes ----------------
  // Add a real audio src (e.g. "assets/audio/note1.mp3") to make these playable.
  voiceNotes: [
    { title: "An Apology & a Confession — Part 1", duration: "18:38", src: "assets/audio/S1.mp3" },
    { title: "Confession — Part 2", duration: "15:20", src: "assets/audio/S-2.mp3" },
    { title: "A song that reminds me of you", duration: "3:57", src: "assets/audio/Hoor.mp3" },
    { title: "A song for you from my side ", duration: "5:28", src: "assets/audio/humko.mp3" }
  ]
};

/* ============================================================
   UTILITIES
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCursor();
  initAmbientCanvas();
  initNav();
  initTheme();
  initMusic();
  initTyping();
  initCountdown();
  initReveal();
  buildQualities();
  buildGallery();
  buildTimeline();
  buildSongNotes();
  buildDreams();
  buildNotesColumn();
  buildVoiceNotes();
  initSurpriseLock();
  initProposal();
  initEnvelope();
  initTilt3D();
});

/* ---------------- 3D tilt on cards (mouse-driven perspective tilt) ---------------- */
function initTilt3D() {
  if (window.matchMedia("(hover: none)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const selector = ".quality-card, .dream-card, .reason-card, .memory-card";
  const MAX_TILT = 10; // degrees

  on(document, "mousemove", (e) => {
    const card = e.target.closest ? e.target.closest(selector) : null;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0..1
    const py = (e.clientY - rect.top) / rect.height;  // 0..1
    const rotY = (px - 0.5) * MAX_TILT * 2;
    const rotX = (0.5 - py) * MAX_TILT * 2;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale3d(1.02,1.02,1.02)`;
    card.style.setProperty("--mx", `${px * 100}%`);
    card.style.setProperty("--my", `${py * 100}%`);
  }, { passive: true });

  on(document, "mouseout", (e) => {
    const card = e.target.closest ? e.target.closest(selector) : null;
    if (!card) return;
    const related = e.relatedTarget;
    if (related && card.contains(related)) return;
    card.style.transform = "";
  }, { passive: true });
}

/* ---------------- Love letter envelope ---------------- */
function initEnvelope() {
  const envelope = $("#envelope");
  const letter = $(".letter-paper");
  if (!envelope) return;
  function toggle() {
    envelope.classList.toggle("open");
  }
  on(envelope, "click", toggle);
  on(envelope, "keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
  // clicking the open letter folds it back into the envelope
  on(letter, "click", () => { if (envelope.classList.contains("open")) toggle(); });
}

/* ---------------- Loader ---------------- */
function initLoader() {
  window.addEventListener("load", () => {
    setTimeout(() => $("#loader").classList.add("hide"), 500);
  });
  // fallback in case 'load' already fired
  setTimeout(() => $("#loader")?.classList.add("hide"), 2500);
}

/* ---------------- Custom cursor ---------------- */
function initCursor() {
  if (window.matchMedia("(hover: none)").matches) return;
  const dot = $("#cursor-dot"), ring = $("#cursor-ring");
  let rx = 0, ry = 0, tx = 0, ty = 0;
  window.addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    dot.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
  });
  (function loop() {
    rx += (tx - rx) * 0.15; ry += (ty - ry) * 0.15;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  $$("a, button, input, textarea, .memory-card, .lock-heart").forEach(el => {
    on(el, "mouseenter", () => { ring.style.width = "54px"; ring.style.height = "54px"; ring.style.borderColor = "var(--gold)"; });
    on(el, "mouseleave", () => { ring.style.width = "34px"; ring.style.height = "34px"; ring.style.borderColor = "var(--rose)"; });
  });
}

/* ---------------- Ambient floating hearts & sparkles ---------------- */
function initAmbientCanvas() {
  const canvas = $("#ambient-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight * (document.body.scrollHeight / window.innerHeight || 1);
    canvas.style.height = document.body.scrollHeight + "px";
  }
  resize();
  window.addEventListener("resize", resize);

  const count = reduceMotion ? 0 : Math.min(36, Math.floor(window.innerWidth / 40));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      s: 6 + Math.random() * 14,
      speed: 0.15 + Math.random() * 0.35,
      drift: (Math.random() - 0.5) * 0.4,
      type: Math.random() > 0.6 ? "sparkle" : "heart",
      alpha: 0.15 + Math.random() * 0.35,
      wobble: Math.random() * Math.PI * 2
    });
  }

  function drawHeart(x, y, size, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--rose") || "#C6446E";
    ctx.translate(x, y);
    ctx.beginPath();
    const s = size / 16;
    ctx.moveTo(0, 4 * s);
    ctx.bezierCurveTo(-8 * s, -4 * s, -16 * s, 4 * s, 0, 16 * s);
    ctx.bezierCurveTo(16 * s, 4 * s, 8 * s, -4 * s, 0, 4 * s);
    ctx.fill();
    ctx.restore();
  }
  function drawSparkle(x, y, size, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--gold") || "#E7B96A";
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.moveTo(0, -size); ctx.lineTo(size * 0.25, -size * 0.25);
    ctx.lineTo(size, 0); ctx.lineTo(size * 0.25, size * 0.25);
    ctx.lineTo(0, size); ctx.lineTo(-size * 0.25, size * 0.25);
    ctx.lineTo(-size, 0); ctx.lineTo(-size * 0.25, -size * 0.25);
    ctx.closePath(); ctx.fill();
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    const scrollY = window.scrollY;
    particles.forEach(p => {
      p.y -= p.speed;
      p.wobble += 0.02;
      const x = p.x + Math.sin(p.wobble) * 10;
      if (p.y < scrollY - 40) { p.y = scrollY + window.innerHeight + 40; p.x = Math.random() * w; }
      const screenY = p.y;
      if (screenY > scrollY - 60 && screenY < scrollY + window.innerHeight + 60) {
        p.type === "heart" ? drawHeart(x, screenY, p.s, p.alpha) : drawSparkle(x, screenY, p.s * 0.5, p.alpha);
      }
    });
    if (!reduceMotion) requestAnimationFrame(tick);
  }
  tick();
}

/* ---------------- Nav ---------------- */
function initNav() {
  const burger = $("#nav-burger"), menu = $("#mobile-menu");
  on(burger, "click", () => menu.classList.toggle("hidden"));
  $$("#mobile-menu a").forEach(a => on(a, "click", () => menu.classList.add("hidden")));
}

/* ---------------- Theme (dark/light) ---------------- */
function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem("os-theme");
  if (saved === "dark") root.classList.add("dark");
  on($("#theme-toggle"), "click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("os-theme", root.classList.contains("dark") ? "dark" : "light");
  });
}

/* ---------------- Music toggle ---------------- */
function initMusic() {
  const btn = $("#music-toggle");
  const audio = new Audio(); // EDIT: set audio.src = "assets/audio/background-music.mp3"
  audio.loop = true;
  let playing = false;
  on(btn, "click", () => {
    if (!audio.src) {
      btn.title = "Add a track to assets/audio/ and set it in main.js";
      btn.animate([{ transform: "scale(1)" }, { transform: "scale(1.15)" }, { transform: "scale(1)" }], { duration: 300 });
      return;
    }
    playing = !playing;
    playing ? audio.play() : audio.pause();
    btn.classList.toggle("bg-blush/50", playing);
  });
}

/* ---------------- Typing effect ---------------- */
function initTyping() {
  const el = $("#typing-target");
  if (!el) return;
  const lines = CONFIG.typingLines;
  let li = 0, ci = 0, deleting = false;
  const cursor = document.createElement("span");
  cursor.className = "typing-cursor"; cursor.innerHTML = "&nbsp;";
  function step() {
    const full = lines[li];
    el.textContent = deleting ? full.slice(0, ci--) : full.slice(0, ci++);
    el.appendChild(cursor);
    let delay = deleting ? 28 : 55;
    if (!deleting && ci === full.length + 1) { delay = 1800; deleting = true; }
    else if (deleting && ci < 0) { deleting = false; ci = 0; li = (li + 1) % lines.length; delay = 400; }
    setTimeout(step, delay);
  }
  step();
}

/* ---------------- Countdown since first met ---------------- */
function initCountdown() {
  const wrap = $("#countdown");
  if (!wrap) return;
  const start = new Date(CONFIG.firstMetISO).getTime();
  function tick() {
    const diff = Math.max(0, Date.now() - start);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    $("#cd-days").textContent = days;
    $("#cd-hours").textContent = String(hours).padStart(2, "0");
    $("#cd-mins").textContent = String(mins).padStart(2, "0");
    $("#cd-secs").textContent = String(secs).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------------- Scroll reveal ---------------- */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.15 });
  function observeAll() { $$(".reveal, .reveal-scale").forEach(el => observer.observe(el)); }
  observeAll();
  // re-run for dynamically injected content
  window.__reobserveReveal = observeAll;
}

/* ============================================================
   SECTION BUILDERS
   ============================================================ */

function buildQualities() {
  const grid = $("#qualities-grid");
  grid.innerHTML = CONFIG.qualities.map((q, i) => `
    <div class="quality-card p-7 reveal" style="transition-delay:${i * 60}ms">
      <div class="text-3xl">${q.icon}</div>
      <h3 class="font-display text-2xl mt-3 text-roseDeep">${q.title}</h3>
      <p class="opacity-75 mt-2 leading-relaxed">${q.text}</p>
    </div>`).join("");
  window.__reobserveReveal?.();
  requestAnimationFrame(() => window.__reobserveReveal?.());
}

const toneGradients = {
  "1": "linear-gradient(160deg,#F7C6D9,#E8B96A)",
  "2": "linear-gradient(160deg,#B9A3DE,#F7C6D9)",
  "3": "linear-gradient(160deg,#E8B96A,#C6446E)",
  "4": "linear-gradient(160deg,#9C3159,#B9A3DE)",
  "5": "linear-gradient(160deg,#F7C6D9,#B9A3DE)"
};

function buildGallery() {
  const wrap = $("#gallery-masonry");
  wrap.innerHTML = CONFIG.gallery.map((g, i) => `
    <div class="memory-card reveal" data-idx="${i}" style="transition-delay:${i * 50}ms">
      ${g.img
      ? `<img src="${g.img}" alt="${g.caption}" loading="lazy" class="w-full" />`
      : `<div class="memory-ph w-full aspect-[4/5] flex items-end p-5" style="background:${toneGradients[g.tone] || toneGradients["1"]}">
             <span class="text-white/90 text-xs uppercase tracking-widest">add photo</span>
           </div>`}
      <div class="p-4">
        <p class="font-script text-xl text-roseDeep">${g.caption}</p>
      </div>
    </div>`).join("");
  window.__reobserveReveal?.();

  let current = 0;
  const lightbox = $("#lightbox");
  function open(i) {
    current = i;
    const g = CONFIG.gallery[i];
    $("#lightbox-img").style.background = g.img ? `url('${g.img}') center/cover` : (toneGradients[g.tone] || toneGradients["1"]);
    $("#lightbox-caption").textContent = g.caption;
    lightbox.classList.add("open");
  }
  $$(".memory-card").forEach(c => on(c, "click", () => open(+c.dataset.idx)));
  on($("#lightbox-close"), "click", () => lightbox.classList.remove("open"));
  on(lightbox, "click", (e) => { if (e.target === lightbox) lightbox.classList.remove("open"); });
  on($("#lightbox-prev"), "click", () => open((current - 1 + CONFIG.gallery.length) % CONFIG.gallery.length));
  on($("#lightbox-next"), "click", () => open((current + 1) % CONFIG.gallery.length));
  on(document, "keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") lightbox.classList.remove("open");
    if (e.key === "ArrowRight") open((current + 1) % CONFIG.gallery.length);
    if (e.key === "ArrowLeft") open((current - 1 + CONFIG.gallery.length) % CONFIG.gallery.length);
  });
}

function buildTimeline() {
  const list = $("#timeline-list");
  list.innerHTML = CONFIG.timeline.map((t, i) => `
    <div class="timeline-item reveal grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-8 py-8" data-idx="${i}">
      <div class="${i % 2 === 0 ? "text-right" : "order-3 text-left"}">
        ${i % 2 === 0 ? timelineCard(t) : ""}
      </div>
      <div class="timeline-dot mx-auto"></div>
      <div class="${i % 2 === 0 ? "" : ""}">
        ${i % 2 !== 0 ? timelineCard(t) : ""}
      </div>
    </div>`).join("");
  window.__reobserveReveal?.();

  const items = $$(".timeline-item");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: 0.4 });
  items.forEach(i => io.observe(i));

  const progress = $("#vine-progress");
  const wrap = $("#timeline-wrap");
  function updateVine() {
    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height;
    const visible = Math.min(Math.max(vh * 0.6 - rect.top, 0), total);
    progress.style.height = visible + "px";
  }
  document.addEventListener("scroll", updateVine, { passive: true });
  window.addEventListener("resize", updateVine);
  updateVine();
}
function timelineCard(t) {
  return `<div class="quality-card inline-block p-5 sm:p-6 max-w-xs">
    <span class="text-xs uppercase tracking-widest text-rose">${t.date}</span>
    <h4 class="font-display text-xl sm:text-2xl mt-1 text-roseDeep">${t.title}</h4>
    <p class="opacity-70 text-sm mt-1">${t.text}</p>
  </div>`;
}

function buildSongNotes() {
  const grid = $("#song-notes-grid");
  if (!grid) return;
  grid.innerHTML = CONFIG.songNotes.map((n, i) => `
    <div class="quality-card p-7 reveal" style="transition-delay:${i * 60}ms">
      <div class="flex items-center justify-between">
        <span class="font-script text-3xl text-rose">${n.note}</span>
        <span class="text-xs uppercase tracking-widest opacity-40">note ${i + 1} / ${CONFIG.songNotes.length}</span>
      </div>
      <h3 class="font-display text-2xl mt-3 text-roseDeep">${n.title}</h3>
      <p class="opacity-75 mt-2 leading-relaxed">${n.text}</p>
    </div>`).join("");
  window.__reobserveReveal?.();
}

function buildDreams() {
  const grid = $("#dreams-grid");
  grid.innerHTML = CONFIG.dreams.map((d, i) => `
    <div class="dream-card p-7 reveal" style="transition-delay:${i * 60}ms">
      <div class="text-3xl">${d.icon}</div>
      <h3 class="font-display text-2xl mt-3 text-roseDeep">${d.title}</h3>
      <p class="opacity-75 mt-2 leading-relaxed">${d.text}</p>
    </div>`).join("");
  window.__reobserveReveal?.();
}

/* ---------------- Notes About Her (editable notebook column) ---------------- */
function buildNotesColumn() {
  const list = $("#notes-list");
  if (!list) return;
  list.innerHTML = CONFIG.notesAboutHer.map((n, i) => `
    <div class="reason-card p-6 reveal" style="transition-delay:${i * 50}ms">
      <div class="flex items-center justify-between gap-3">
        <span class="text-rose text-xs uppercase tracking-widest">${n.date ? n.date : `note ${String(i + 1).padStart(2, "0")}`}</span>
      </div>
      ${n.title ? `<h4 class="font-display text-xl mt-2 text-roseDeep">${n.title}</h4>` : ""}
      <p class="mt-2 opacity-80 leading-relaxed">${n.text}</p>
    </div>`).join("");
  window.__reobserveReveal?.();
}

/* ---------------- Voice notes ---------------- */
function buildVoiceNotes() {
  const list = $("#voice-list");
  list.innerHTML = CONFIG.voiceNotes.map((v, i) => `
    <div class="quality-card p-6 reveal" style="transition-delay:${i * 60}ms">
      <div class="flex items-center gap-4">
        <button class="voice-play w-12 h-12 rounded-full bg-rose text-white flex items-center justify-center flex-shrink-0" data-i="${i}" aria-label="Play voice note">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <div class="flex-1">
          <p class="text-sm font-medium">${v.title}</p>
          <div class="flex items-center gap-1 mt-2 h-5" id="wave-${i}">
            ${Array.from({ length: 22 }).map((_, j) => `<div class="wave-bar" style="animation-delay:${j * 0.05}s"></div>`).join("")}
          </div>
        </div>
        <span class="text-xs opacity-50">${v.duration}</span>
      </div>
      ${v.src ? "" : `<p class="text-xs opacity-40 mt-3">No audio file linked yet — add one in <code>CONFIG.voiceNotes</code>.</p>`}
    </div>`).join("");
  window.__reobserveReveal?.();

  // pause wave animation by default (only "plays" visually while pressed, since no real audio may exist)
  $$(".wave-bar").forEach(b => b.style.animationPlayState = "paused");

  const audios = {};
  $$(".voice-play").forEach(btn => {
    const i = +btn.dataset.i;
    const note = CONFIG.voiceNotes[i];
    on(btn, "click", () => {
      const bars = $$(`#wave-${i} .wave-bar`);
      if (!note.src) {
        bars.forEach(b => b.style.animationPlayState = "running");
        setTimeout(() => bars.forEach(b => b.style.animationPlayState = "paused"), 1500);
        return;
      }
      if (!audios[i]) { audios[i] = new Audio(note.src); audios[i].addEventListener("ended", () => bars.forEach(b => b.style.animationPlayState = "paused")); }
      if (audios[i].paused) { audios[i].play(); bars.forEach(b => b.style.animationPlayState = "running"); }
      else { audios[i].pause(); bars.forEach(b => b.style.animationPlayState = "paused"); }
    });
  });
}

/* ---------------- Surprise lock ---------------- */
function initSurpriseLock() {
  const order = ["small", "medium", "large"];
  let progress = 0, rounds = 0;
  const hearts = $$(".lock-heart");
  const progressLabel = $("#lock-progress");

  hearts.forEach(h => on(h, "click", () => {
    h.classList.add("hit");
    setTimeout(() => h.classList.remove("hit"), 250);
    if (h.dataset.size === order[progress]) {
      progress++;
      if (progress === order.length) {
        progress = 0; rounds++;
        progressLabel.textContent = `${rounds} / 3 correct sequences`;
        if (rounds >= 3) unlockSurprise();
      }
    } else {
      progress = 0;
    }
  }));

  function unlockSurprise() {
    $("#surprise-lock").classList.add("hide");
    setTimeout(() => {
      $("#surprise-lock").classList.add("hidden");
      $("#surprise-content").classList.remove("hidden");
      launchFireworks();
      launchConfetti();
    }, 700);
  }
}

/* ---------------- Proposal ---------------- */
function initProposal() {
  const noBtn = $("#no-btn");
  const yesBtn = $("#yes-btn");
  let dodges = 0;
  function dodge() {
    const maxX = 140, maxY = 60;
    const x = (Math.random() - 0.5) * maxX * 2;
    const y = (Math.random() - 0.5) * maxY * 2;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    dodges++;
    if (dodges > 2) noBtn.textContent = "Please? 🥺";
    if (dodges > 5) noBtn.textContent = "Okay, Yes then 😅";
  }
  on(noBtn, "mouseenter", dodge);
  on(noBtn, "touchstart", (e) => { e.preventDefault(); dodge(); }, { passive: false });
  on(noBtn, "click", (e) => { e.preventDefault(); dodge(); });

  on(yesBtn, "click", () => {
    $("#celebration").classList.add("show");
    launchConfetti(true);
    launchFireworks();
  });
  on($("#celebration-close"), "click", () => $("#celebration").classList.remove("show"));
}

/* ============================================================
   CONFETTI + FIREWORKS (lightweight canvas particle systems)
   ============================================================ */
function launchConfetti(big = false) {
  const canvas = $("#confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const colors = ["#C6446E", "#F7C6D9", "#B9A3DE", "#E7B96A", "#FFFFFF"];
  const count = big ? 220 : 130;
  const pieces = Array.from({ length: count }).map(() => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.3,
    w: 6 + Math.random() * 6,
    h: 10 + Math.random() * 6,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 2 + Math.random() * 3,
    drift: (Math.random() - 0.5) * 2,
    rot: Math.random() * Math.PI,
    rotSpeed: (Math.random() - 0.5) * 0.2
  }));
  let frame = 0;
  const maxFrames = 260;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.speed; p.x += p.drift; p.rot += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < maxFrames) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  loop();
}

function launchFireworks() {
  const canvas = $("#fireworks-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const colors = ["#C6446E", "#F7C6D9", "#B9A3DE", "#E7B96A", "#FFFFFF"];
  let bursts = [];

  function spawnBurst() {
    const x = canvas.width * (0.2 + Math.random() * 0.6);
    const y = canvas.height * (0.2 + Math.random() * 0.4);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particles = Array.from({ length: 46 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 3.5;
      return { x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 60 + Math.random() * 20, color };
    });
    bursts.push(particles);
  }
  let spawned = 0;
  const spawnTimer = setInterval(() => { spawnBurst(); spawned++; if (spawned >= 5) clearInterval(spawnTimer); }, 380);

  let frames = 0;
  function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.06)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bursts.forEach(particles => {
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.03; p.life--;
        ctx.globalAlpha = Math.max(p.life / 80, 0);
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2); ctx.fill();
      });
    });
    ctx.globalAlpha = 1;
    bursts = bursts.map(ps => ps.filter(p => p.life > 0)).filter(ps => ps.length > 0);
    frames++;
    if (frames < 400 && (bursts.length > 0 || spawned < 5)) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  loop();
}

window.addEventListener("resize", () => {
  ["#confetti-canvas", "#fireworks-canvas"].forEach(sel => {
    const c = $(sel);
    if (c) { c.width = window.innerWidth; c.height = window.innerHeight; }
  });
});
