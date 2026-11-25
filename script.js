/* =========================================================
   Espacios & Estructuras · interactividad
   Para editar contenido, cambia SERVICES y PROJECTS (arriba).
   ========================================================= */

/* ===== Datos ===== */
var SERVICES = [
  { t: "Construcción",
    fotos: [["img/ur7.jpg", "Unidad residencial Valle de la Ferreira"], ["img/imb1.jpg", "Clínica Imbanaco · Ciudad Jardín"]],
    gente: [{
      rol: "Representante legal",
      nombre: "Liliana Rodríguez Rodríguez",
      cargo: "Ingeniera civil · más de 30 años de experiencia",
      bio: "Con amplia trayectoria en el sector constructor de todo tipo de edificaciones.",
      lista: [
        "Especialista en la dirección de proyectos de obra civil en situación de ocupación y de alto riesgo constructivo.",
        "Especialista en la construcción y remodelación de edificios para el sector constructor."
      ],
      estudios: [
        ["1998", "Especialista en Gerencia de Construcciones"],
        ["1994", "Especialista en Estructuras de Concreto Reforzado"],
        ["1990", "Ingeniera Civil"]
      ],
      uni: "Universidad del Valle · Cali, Colombia"
    }] },
  { t: "Diseño",
    fotos: [["img/pq4.jpg", "Parroquia Corpus Christi La Hacienda"], ["img/apto1.jpg", "Apartamento Tierra Linda"], ["img/co3.jpg", "Instituciones educativas Comuna 10"]],
    equipo: "Equipo de diseño",
    gente: [
      { rol: "Directora de diseño", nombre: "Valeria Zúñiga Ávila",
        estudios: [["2025", "Arquitecta con énfasis en bioclimática"]], uni: "Universidad Javeriana · Cali, Colombia" },
      { rol: "Director de proyectos", nombre: "Nicolás Ken Rodas Londoño",
        estudios: [["2022", "Arquitecto con énfasis en bioclimática"]], uni: "Universidad Javeriana · Cali, Colombia" },
      { rol: "Directora de proyectos", nombre: "Alexandra Cano Bonilla",
        estudios: [["2025", "Arquitecta con énfasis en bioclimática"]], uni: "Universidad Javeriana · Cali, Colombia" }
    ] },
  { t: "Consultoría",
    fotos: [],
    incluye: [
      "Estudio de factibilidad de proyectos constructivos.",
      "Elaboración de presupuestos.",
      "Elaboración de programación de obras.",
      "Elaboración de flujo de fondos para las obras en ejecución."
    ],
    gente: [] }
];

/* imgs: [archivo sin extensión, descripción, ancho, alto] */
var PROJECTS = [
  { id: "unidad-valle-de-la-ferreira", name: "Unidad residencial Valle de la Ferreira", short: "Unidad residencial Valle de la Ferreira",
    tipo: "Residencial", ubic: "Cali, Colombia", alcance: "Ejecución total de la obra", anio: "2004 – 2005", costo: "$600.000.000",
    imgs: [["ur5", "Edificio Valle de la Ferrería, torre 2", 1400, 1548], ["ur6", "Fachada del edificio durante la obra", 1600, 894], ["ur7", "Torre con balcones, escalera y jardín", 1107, 1421], ["ur8", "Fachada lateral con balcones", 1086, 1448]] },
  { id: "parroquia-corpus-christi", name: "Renovación Parroquia Corpus Christi La Hacienda", short: "Parroquia Corpus Christi La Hacienda",
    tipo: "Patrimonial", ubic: "Cali, Colombia", alcance: "Cambio y adecuación de piso y tratamiento de humedades", anio: "2026", costo: "$105.000.000",
    imgs: [["pq1", "Nave central con piso de baldosa decorativa", 1200, 1800], ["pq4", "Vista del interior y la cubierta de madera", 1200, 1800], ["pq5", "Pasillo central hacia el atrio", 1200, 1800]] },
  { id: "clinica-imbanaco", name: "Sede Ciudad Jardín Clínica Imbanaco", short: "Clínica Imbanaco, sede Ciudad Jardín",
    tipo: "Clínica", ubic: "Cali, Colombia", alcance: "Ejecución de obra", anio: "2026", costo: "$1.300.000.000",
    imgs: [["imb2", "Fachada de la Clínica Imbanaco vista desde arriba", 1290, 2083], ["imb4", "Sala de resonancia", 1290, 1109], ["imb7", "Sala de tomografía", 1290, 712], ["imb6", "Zona de estar con plantas", 1127, 716]] },
  { id: "tierra-linda", name: "Apartamento Tierra Linda de la Planicie", short: "Apartamento Tierra Linda de la Planicie",
    tipo: "Residencial", ubic: "Cali, Colombia", alcance: "Diseño y ejecución de obra blanca", anio: "2026", costo: "$65.000.000",
    imgs: [["apto1", "Cocina con isla en madera y cuarzo", 1200, 1800], ["apto2", "Sala y comedor con barra de cocina", 1200, 1800], ["apto3", "Sala con mueble flotante", 1200, 1800], ["apto4", "Baño con ducha y luz indirecta", 1200, 1800]] },
  { id: "colegios-comuna-10", name: "Adecuación de planta física de instituciones educativas Comuna 10", short: "Instituciones educativas Comuna 10",
    resumen: "Cambio de cubiertas en 6 instituciones",
    tipo: "Institucional", ubic: "Cali, Colombia", alcance: "Cambio de cubiertas en tejas de asbesto cemento por cubiertas en tejas termoacústicas UPVC en 6 instituciones educativas, sumando más de 2.000 m² de superficie cubierta", anio: "2026", costo: "$309.000.000",
    imgs: [["co3", "Institución educativa Rafael Navia Varón", 660, 400]] }
];

/* ===== Utilidades ===== */
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
var deck = $("#deck");
var ARROW_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>';
var ARROW_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';

/* ===== Servicios (acordeón: fotos + datos de las personas) ===== */
(function () {
  var list = $("#svcList"), panel = $("#svcPanel");
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function contenido(s) {
    var h = s.fotos.length ? '<div class="ph-row n' + s.fotos.length + '">' : '';
    s.fotos.forEach(function (f) {
      h += '<figure class="ph"><img src="' + f[0] + '" alt="' + esc(f[1]) + '" loading="lazy">' + (f[1] ? '<figcaption>' + esc(f[1]) + '</figcaption>' : '') + '</figure>';
    });
    if (s.fotos.length) h += '</div>';
    if (s.incluye) {
      h += '<h4 class="equipo">Incluye</h4><ul class="pe-lista incl">';
      s.incluye.forEach(function (x) { h += '<li>' + esc(x) + '</li>'; });
      h += '</ul>';
    }
    if (s.equipo) h += '<h4 class="equipo">' + esc(s.equipo) + '</h4>';
    s.gente.forEach(function (g) {
      h += '<div class="persona"><button type="button" class="pe-head" aria-expanded="false"><span><small class="pe-rol">' + esc(g.rol) + '</small><strong class="pe-nombre">' + esc(g.nombre) + '</strong></span><i class="plus" aria-hidden="true"></i></button><div class="pe-body"><div class="pe-in">';
      if (g.cargo) h += '<p class="pe-cargo">' + esc(g.cargo) + '</p>';
      if (g.bio) h += '<p class="pe-bio">' + esc(g.bio) + '</p>';
      if (g.lista) { h += '<ul class="pe-lista">'; g.lista.forEach(function (x) { h += '<li>' + esc(x) + '</li>'; }); h += '</ul>'; }
      h += '<h4>Estudios</h4><ol class="edu">';
      g.estudios.forEach(function (x) { h += '<li><b>' + x[0] + '</b><div><strong>' + esc(x[1]) + '</strong><span>' + esc(g.uni) + '</span></div></li>'; });
      h += '</ol></div></div></div>';
    });
    return h;
  }
  function cajas(root) {
    $$(".pe-head", root).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var box = btn.parentNode, open = !box.classList.contains("open");
        box.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open);
      });
    });
  }
  SERVICES.forEach(function (s, i) {
    var li = document.createElement("li");
    li.className = "svc" + (i === 0 ? " on" : "");
    li.innerHTML = '<button type="button" aria-expanded="' + (i === 0) + '"><span class="num">0' + (i + 1) + '</span><span class="ttl">' + s.t + '</span></button><div class="pnl"><div class="pnl-in">' + contenido(s) + '</div></div>';
    list.appendChild(li); cajas(li);
    var d = document.createElement("div");
    d.className = "sp" + (i === 0 ? " on" : "");
    d.innerHTML = contenido(s);
    panel.appendChild(d); cajas(d);
    function activate() {
      $$(".svc", list).forEach(function (x, j) {
        x.classList.toggle("on", j === i);
        $("button", x).setAttribute("aria-expanded", j === i);
      });
      $$(".sp", panel).forEach(function (x, j) { x.classList.toggle("on", j === i); });
    }
    var b = $("button", li);
    b.addEventListener("click", activate);
    b.addEventListener("mouseenter", function () { if (window.matchMedia("(min-width:1000px)").matches) activate(); });
    b.addEventListener("focus", activate);
  });
})();

/* ===== Lista de proyectos con filtro ===== */
(function () {
  var list = $("#pList"), prev = $("#pPrev");
  PROJECTS.forEach(function (p, i) {
    var li = document.createElement("li");
    li.className = "p-row" + (i === 0 ? " on" : "");
    li.dataset.tipo = p.tipo;
    li.innerHTML = '<a href="#' + p.id + '"><img class="th" src="img/' + p.imgs[0][0] + '.jpg" alt="" loading="lazy"><span class="n">0' + (i + 1) + '</span><div><h3>' + p.short + '</h3><small>' + p.tipo + '</small><span class="yr">' + p.anio + '</span></div></a>';
    list.appendChild(li);
    var im = document.createElement("img");
    im.src = "img/" + p.imgs[0][0] + ".jpg"; im.alt = ""; im.loading = "lazy";
    if (i === 0) im.className = "on";
    prev.appendChild(im);
    function activate() {
      $$(".p-row", list).forEach(function (x, j) { x.classList.toggle("on", j === i); });
      $$("img", prev).forEach(function (x, j) { x.classList.toggle("on", j === i); });
    }
    $("a", li).addEventListener("mouseenter", activate);
    $("a", li).addEventListener("focus", activate);
  });
})();

/* ===== Diapositivas de cada proyecto ===== */
var galleries = {};
(function () {
  var host = $("#projSlides");
  PROJECTS.forEach(function (p, i) {
    var prevP = PROJECTS[(i + PROJECTS.length - 1) % PROJECTS.length];
    var nextP = PROJECTS[(i + 1) % PROJECTS.length];
    var s = document.createElement("section");
    s.className = "slide proj"; s.id = p.id; s.dataset.label = p.short;
    var figs = p.imgs.map(function (m, k) {
      return '<figure data-k="' + k + '"><img src="img/' + m[0] + '.jpg" alt="' + m[1] + '" width="' + m[2] + '" height="' + m[3] + '" style="aspect-ratio:' + m[2] + '/' + m[3] + '" loading="' + (i === 0 ? "eager" : "lazy") + '"></figure>';
    }).join("");
    s.innerHTML =
      '<div class="p-head"><span class="idx">PROYECTO 0' + (i + 1) + ' / 0' + PROJECTS.length + '</span><h2>' + p.name + '</h2></div>' +
      '<div class="gal' + (p.imgs.length === 1 ? ' solo' : '') + '"><div class="scroller" tabindex="0" aria-label="Fotos de ' + p.short + '">' + figs + '</div>' +
      '<div class="pg" aria-hidden="true">' + p.imgs.map(function (m, k) { return '<button type="button" tabindex="-1" data-k="' + k + '"></button>'; }).join('') + '</div>' +
      '<div class="bar">' +
      '<button class="arr" type="button" data-d="-1" aria-label="Foto anterior">' + ARROW_L + '</button>' +
      '<button class="arr" type="button" data-d="1" aria-label="Foto siguiente">' + ARROW_R + '</button></div></div>' +
      '<div class="p-data"><dl>' +
      '<div><dt>Tipo</dt><dd>' + p.tipo + '</dd></div>' +
      '<div><dt>Año</dt><dd>' + p.anio + '</dd></div>' +
      '<div><dt>Ubicación</dt><dd>' + p.ubic + '</dd></div>' +
      '<div><dt>Costo aprox.</dt><dd class="cost"><span class="num" data-money="' + p.costo.replace(/\D/g, '') + '">' + p.costo + '</span><small>COP</small></dd></div>' +
      '<div class="wide"><dt>Alcance</dt><dd>' + p.alcance + '</dd></div></dl>' +
      '<div class="nextp"><a href="#' + prevP.id + '">← Anterior</a><a href="#proyectos">Todos</a><a href="#' + nextP.id + '">Siguiente →</a></div></div>';
    host.appendChild(s);

    var sc = $(".scroller", s);
    function cur() {
      var c = sc.getBoundingClientRect(), mid = c.left + c.width / 2, best = 0, bd = 1e9;
      $$("figure", sc).forEach(function (f, k) {
        var r = f.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - mid);
        if (d < bd) { bd = d; best = k; }
      });
      return best;
    }
    function go(k) {
      k = Math.max(0, Math.min(p.imgs.length - 1, k));
      var f = $$("figure", sc)[k];
      sc.scrollTo({ left: f.offsetLeft - (sc.clientWidth - f.offsetWidth) / 2, behavior: "smooth" });
    }
    function sync() {
      var c = cur();
      $$("figure", sc).forEach(function (f, k) { f.classList.toggle("cur", k === c); });
      $$(".pg button", s).forEach(function (d, k) { d.classList.toggle("on", k === c); });
    }
    sc.addEventListener("scroll", sync, { passive: true });
    $$(".pg button", s).forEach(function (d) { d.addEventListener("click", function () { go(Number(d.dataset.k)); }); });
    setTimeout(sync, 50);
    $$(".arr", s).forEach(function (b) {
      b.addEventListener("click", function () { go(cur() + Number(b.dataset.d)); });
    });
    $$("figure", sc).forEach(function (f) {
      f.addEventListener("click", function () { openLB(p, Number(f.dataset.k)); });
    });
    galleries[p.id] = { go: go, cur: cur };
  });
})();

/* ===== Galería ampliada ===== */
var lb = $("#lb"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbState = null, lastFocus = null;
function showLB() {
  var m = lbState.p.imgs[lbState.k];
  lbImg.src = "img/" + m[0] + ".jpg"; lbImg.alt = m[1];
  lbCap.textContent = lbState.p.short + " · " + m[1] + " (" + (lbState.k + 1) + "/" + lbState.p.imgs.length + ")";
}
function openLB(p, k) { lastFocus = document.activeElement; lbState = { p: p, k: k }; showLB(); lb.classList.add("open"); $("#lbX").focus(); }
function closeLB() { lb.classList.remove("open"); lbState = null; if (lastFocus) lastFocus.focus(); }
function stepLB(d) { var n = lbState.p.imgs.length; lbState.k = (lbState.k + d + n) % n; showLB(); }
$("#lbX").addEventListener("click", closeLB);
$("#lbP").addEventListener("click", function () { stepLB(-1); });
$("#lbN").addEventListener("click", function () { stepLB(1); });
lb.addEventListener("click", function (e) { if (e.target === lb) closeLB(); });
/* deslizar con el dedo */
(function () {
  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (x0 === null || !lbState) return;
    var dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) stepLB(dx < 0 ? 1 : -1);
  }, { passive: true });
})();

/* ===== Navegación: sección activa, puntos, barra inferior ===== */
var slides = $$(".slide");
var dots = $("#dots");
slides.forEach(function (s) {
  var a = document.createElement("a");
  a.href = "#" + s.id; a.setAttribute("aria-label", s.dataset.label);
  a.innerHTML = "<span>" + s.dataset.label + "</span>";
  dots.appendChild(a);
});
var dotEls = $$("a", dots);
var navLinks = $$(".top-nav a, .tabbar a");
var activeIdx = 0;

function setActive(i) {
  activeIdx = i;
  var s = slides[i];
  dotEls.forEach(function (d, j) {
    d.classList.toggle("on", j === i);
    if (j === i) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
  });
  var group = s.classList.contains("proj") ? "proyectos" : (s.dataset.group || s.id);
  navLinks.forEach(function (l) { l.classList.toggle("on", l.dataset.s === group); });
}

var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) setActive(slides.indexOf(e.target)); });
}, { root: deck, threshold: 0.4 });
slides.forEach(function (s) { io.observe(s); });

function goTo(id, smooth) {
  var el = document.getElementById(id);
  if (!el) return;
  deck.scrollTo({ top: el.offsetTop, behavior: smooth === false ? "auto" : "smooth" });
}
document.addEventListener("click", function (e) {
  var a = e.target.closest && e.target.closest('a[href^="#"]');
  if (!a) return;
  var id = a.getAttribute("href").slice(1);
  if (document.getElementById(id)) { e.preventDefault(); goTo(id); }
});
window.addEventListener("hashchange", function () {
  var id = location.hash.slice(1);
  if (id && slides[activeIdx].id !== id) goTo(id);
});
if (location.hash.length > 1) { setTimeout(function () { goTo(location.hash.slice(1), false); }, 60); }
setActive(0);

/* ===== Teclado ===== */
document.addEventListener("keydown", function (e) {
  if (lbState) {
    if (e.key === "Escape") closeLB();
    else if (e.key === "ArrowRight") stepLB(1);
    else if (e.key === "ArrowLeft") stepLB(-1);
    return;
  }
  var t = e.target;
  if (t && /INPUT|TEXTAREA|SELECT/.test(t.tagName)) return;
  var s = slides[activeIdx];
  if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); if (slides[activeIdx + 1]) goTo(slides[activeIdx + 1].id); }
  else if (e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); if (slides[activeIdx - 1]) goTo(slides[activeIdx - 1].id); }
  else if ((e.key === "ArrowRight" || e.key === "ArrowLeft") && galleries[s.id]) {
    e.preventDefault();
    var g = galleries[s.id];
    g.go(g.cur() + (e.key === "ArrowRight" ? 1 : -1));
  }
});

/* ===== Contadores animados (se repiten cada vez que llegas a la sección) ===== */
(function () {
  var els = $$("[data-count]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var raf = new WeakMap();
  function run(el) {
    var end = Number(el.dataset.count), from = Number(el.dataset.from || 0), pre = el.dataset.prefix || "", t0 = null;
    cancelAnimationFrame(raf.get(el));
    function step(t) {
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / 1300);
      el.textContent = pre + Math.round(from + (end - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf.set(el, requestAnimationFrame(step));
    }
    raf.set(el, requestAnimationFrame(step));
  }
  var obs = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      var el = e.target;
      if (reduce) return;
      if (e.isIntersecting) { run(el); }
      else { cancelAnimationFrame(raf.get(el)); el.textContent = (el.dataset.prefix || "") + (el.dataset.from || 0); }
    });
  }, { root: deck, threshold: 0.6 });
  els.forEach(function (el) { obs.observe(el); });
})();


/* =========================================================
   INTERACTIVIDAD EXTRA
   ========================================================= */

/* ===== Palabra que cambia en la portada ===== */
(function () {
  var el = $("#rot");
  if (!el) return;
  var words = ["confianza", "excelencia", "experiencia"], i = 0;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  setInterval(function () {
    i = (i + 1) % words.length;
    el.textContent = words[i];
    el.classList.remove("anim"); void el.offsetWidth; el.classList.add("anim");
  }, 2600);
})();

/* ===== Barra de progreso y sombra de cabecera ===== */
(function () {
  var bar = $("#progress"), head = $(".head");
  function upd() {
    var max = deck.scrollHeight - deck.clientHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? deck.scrollTop / max : 0) + ")";
    head.classList.toggle("scrolled", deck.scrollTop > 8);
  }
  deck.addEventListener("scroll", upd, { passive: true });
  upd();
})();

/* ===== Aparecer al hacer scroll ===== */
(function () {
  var sel = ".hero-text > *, .trio a, .hero-meta, .n-left .tag, .n-left p, .n-left img, .n-right > *, .s-head, .svc, .otros, .s-photo, .p-top, .p-row, .p-head, .gal, .p-data dl div, .nextp, #contacto h2, #contacto .sub, .composer, .c-list li";
  var els = $$(sel);
  els.forEach(function (el) {
    el.classList.add("rv");
    var sibs = Array.prototype.slice.call(el.parentNode.children).filter(function (x) { return x.matches(sel); });
    el.style.setProperty("--d", Math.min(sibs.indexOf(el), 6) * 70 + "ms");
  });
  var o = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); o.unobserve(e.target); } });
  }, { root: deck, threshold: 0.12 });
  els.forEach(function (el) { o.observe(el); });
})();

/* ===== Costo que sube al llegar al proyecto ===== */
(function () {
  function fmt(n) { return "$" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
  var els = $$("[data-money]");
  var o = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      o.unobserve(e.target);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      var el = e.target, end = Number(el.dataset.money), t0 = null;
      function step(t) {
        if (!t0) t0 = t;
        var k = Math.min(1, (t - t0) / 1200);
        el.textContent = fmt(end * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step); else el.textContent = fmt(end);
      }
      requestAnimationFrame(step);
    });
  }, { root: deck, threshold: 0.6 });
  els.forEach(function (el) { o.observe(el); });
})();

/* ===== Mensaje de WhatsApp a la medida ===== */
(function () {
  var OPTS = ["Construcción", "Diseño", "Consultoría"];
  var box = $("#opts"), send = $("#waSend");
  if (!box) return;
  var chosen = [];
  OPTS.forEach(function (t) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "opt"; b.textContent = t; b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () {
      var on = b.getAttribute("aria-pressed") !== "true";
      b.setAttribute("aria-pressed", on);
      chosen = on ? chosen.concat(t) : chosen.filter(function (x) { return x !== t; });
      build();
    });
    box.appendChild(b);
  });
  function build() {
    var text = "Hola, vi el portafolio de Espacios & Estructuras.";
    if (chosen.length) text += " Me interesa: " + chosen.join(", ") + ".";
    send.href = "https://wa.me/573108336935?text=" + encodeURIComponent(text);
  }
  build();
})();