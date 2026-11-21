// ====== Pengaturan: ganti sesuai dirimu ======
const roles = ["pelajar yang suka belajar hal baru", "pembuat website", "penggemar Spider-Man"];

// 1. Jaring laba-laba di pojok hero
(function buildWeb() {
  const svg = document.getElementById("web");
  const NS = "http://www.w3.org/2000/svg";
  const size = 600, spokes = 9, rings = 7;
  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
  const pts = [];
  for (let i = 0; i < spokes; i++) {
    const a = (Math.PI / 2) * (i / (spokes - 1)) + Math.PI / 2; // seperempat lingkaran dari pojok kanan atas
    pts.push([Math.cos(a), Math.sin(a)]);
    const l = document.createElementNS(NS, "line");
    l.setAttribute("x1", size); l.setAttribute("y1", 0);
    l.setAttribute("x2", size + Math.cos(a) * size * 1.3);
    l.setAttribute("y2", Math.sin(a) * size * 1.3);
    svg.appendChild(l);
  }
  for (let r = 1; r <= rings; r++) {
    const R = (r / rings) * size * 1.2;
    let d = "";
    pts.forEach(([cx, cy], i) => {
      const x = size + cx * R, y = cy * R;
      if (i === 0) { d += `M${x} ${y}`; return; }
      const [px, py] = pts[i - 1];
      const mx = size + ((cx + px) / 2) * R * 0.88, my = ((cy + py) / 2) * R * 0.88; // lengkung ke dalam
      d += ` Q${mx} ${my} ${x} ${y}`;
    });
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", d);
    svg.appendChild(p);
  }
})();

// 2. Efek mengetik untuk peran
(function typeRoles() {
  const el = document.getElementById("role");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { el.textContent = roles[0]; return; }
  let r = 0, c = 0, deleting = false;
  function tick() {
    const word = roles[r];
    c += deleting ? -1 : 1;
    el.textContent = word.slice(0, c);
    let delay = deleting ? 35 : 75;
    if (!deleting && c === word.length) { deleting = true; delay = 1600; }
    else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 400; }
    setTimeout(tick, delay);
  }
  tick();
})();

// 3. Tombol Spider-Sense
(function spiderSense() {
  const btn = document.getElementById("sense");
  const boom = document.getElementById("boom");
  btn.addEventListener("click", () => {
    document.body.classList.remove("tingle");
    boom.classList.remove("show");
    void boom.offsetWidth; // ulangi animasi
    document.body.classList.add("tingle");
    boom.classList.add("show");
  });
})();

// 4. Bar skill terisi saat terlihat di layar
(function skillBars() {
  const skills = document.querySelectorAll(".skill");
  const fill = (s) => { s.querySelector("i").style.width = s.dataset.level + "%"; };
  if (!("IntersectionObserver" in window)) { skills.forEach(fill); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { fill(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  skills.forEach((s) => io.observe(s));
})();
