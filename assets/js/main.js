(function () {
  "use strict";

  var D = window.PORTAFOLIO;
  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };

  /* ---------------------------------------------------------- Iconos SVG */
  var ICON = {
    foro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/><path d="M8.5 10.5h7M8.5 13.5h4.5"/></svg>',
    practica: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
    colaborativo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14.2A4.6 4.6 0 0 1 21 18.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'
  };

  var ETIQUETA = { foro: "Foro", practica: "Práctica", colaborativo: "Producto colaborativo" };

  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------------------------------------------------- Semanas */
  function tarjeta(ev, semana) {
    var tipo = ev.tipo;
    var pendiente, titulo, desc, attrs, cta, formato = "";

    if (tipo === "foro") {
      var f = ev.foro ? D.foros[ev.foro] : null;
      pendiente = !f;
      titulo = f ? "Foro " + f.numero : (ev.titulo || "Foro");
      desc = f ? f.titulo : "Por desarrollar.";
      attrs = f ? 'data-foro="' + ev.foro + '"' : "";
      cta = "Leer mi respuesta";
    } else {
      pendiente = !ev.pdf && !ev.word;
      titulo = ev.titulo;
      desc = ev.descripcion || "";
      attrs = pendiente ? "" : 'data-doc="' + semana.numero + '|' + semana.evidencias.indexOf(ev) + '"';
      cta = "Ver documento";
      if (!pendiente) formato = '<span class="card__format">' + (ev.pdf ? "PDF" : "") + (ev.pdf && ev.word ? " · " : "") + (ev.word ? "Word" : "") + "</span>";
    }

    var tag = pendiente ? "div" : "button";
    return (
      "<" + tag + ' class="card card--' + tipo + (pendiente ? " card--pending" : "") + '" ' + attrs +
      (pendiente ? "" : ' type="button"') + ">" +
        '<span class="card__icon">' + ICON[tipo] + "</span>" +
        '<span class="card__type">' + ETIQUETA[tipo] + "</span>" +
        '<span class="card__title">' + esc(titulo) + "</span>" +
        '<span class="card__desc">' + esc(desc) + "</span>" +
        '<span class="card__foot">' +
          (pendiente
            ? '<span class="card__status">' + ICON.clock + " Pendiente</span>"
            : '<span class="card__cta">' + cta + ICON.arrow + "</span>" + formato) +
        "</span>" +
      "</" + tag + ">"
    );
  }

  function renderSemanas() {
    var html = D.semanas.map(function (s) {
      var plan = s.plan
        ? '<div class="plan"><p class="plan__title">Componentes del Plan de Mejora</p><ul>' +
            s.plan.map(function (p, i) { return "<li><span>" + (i + 1) + "</span>" + esc(p) + "</li>"; }).join("") +
          "</ul></div>"
        : "";
      return (
        '<article class="week reveal' + (s.enDesarrollo ? " week--wip" : "") + '" id="semana-' + s.numero + '">' +
          '<div class="week__rail"><span class="week__num">' + s.numero + "</span></div>" +
          '<div class="week__content">' +
            '<header class="week__head">' +
              '<p class="week__label">Semana ' + s.numero + ' <span class="pill">Capacidad ' + s.capacidad + "</span>" +
              (s.enDesarrollo ? ' <span class="pill pill--soft">En desarrollo</span>' : "") + "</p>" +
              '<h3 class="week__title">' + esc(s.titulo) + "</h3>" +
            "</header>" +
            '<div class="week__reflection">' +
              (s.enDesarrollo ? "" : '<p class="week__reflection-label">Reflexión de la semana</p>') +
              s.reflexion.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
            "</div>" + plan +
            '<div class="cards">' + s.evidencias.map(function (ev) { return tarjeta(ev, s); }).join("") + "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");
    $("#weeks").innerHTML = html;
  }

  /* ---------------------------------------------------------- Conclusiones y referencias */
  function refHTML(r) {
    return r.texto + (r.url ? ' <a href="' + r.url + '" target="_blank" rel="noopener">' + r.url + "</a>" : "");
  }

  function renderConclusiones() {
    $("#conclusionsList").innerHTML = D.conclusiones.map(function (c, i) {
      return '<article class="conclusion reveal"><span class="conclusion__n">0' + (i + 1) + "</span>" +
        "<h3>" + esc(c.titulo) + "</h3><p>" + esc(c.texto) + "</p></article>";
    }).join("");
  }

  function renderReferencias() {
    var keys = Object.keys(D.referencias).sort(function (a, b) {
      return D.referencias[a].texto.localeCompare(D.referencias[b].texto, "es");
    });
    $("#refsList").innerHTML = keys.map(function (k) { return "<li>" + refHTML(D.referencias[k]) + "</li>"; }).join("");
  }

  /* ---------------------------------------------------------- Modales */
  var lastFocus = null;

  function abrir(dlg) {
    lastFocus = document.activeElement;
    document.documentElement.classList.add("no-scroll");
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  }

  function cerrar(dlg) {
    dlg.classList.add("is-closing");
    setTimeout(function () {
      dlg.classList.remove("is-closing");
      if (typeof dlg.close === "function") dlg.close(); else dlg.removeAttribute("open");
      document.documentElement.classList.remove("no-scroll");
      if (dlg.id === "modalDoc") $("#docViewer").innerHTML = "";
      if (lastFocus) lastFocus.focus();
    }, 180);
  }

  function abrirForo(id) {
    var f = D.foros[id];
    $("#foroKicker").textContent = "Foro " + f.numero;
    $("#foroTitulo").textContent = f.titulo;
    $("#foroFecha").textContent = f.fecha;
    var html =
      '<details class="prompt">' +
        "<summary><span>Consigna del foro</span><small>Ver contexto y pregunta</small></summary>" +
        '<div class="prompt__body">' +
          f.contexto.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
          '<div class="prompt__questions">' +
            f.preguntas.map(function (q, i) {
              return "<p><strong>" + (f.preguntas.length > 1 ? "Pregunta " + (i + 1) : "Pregunta") + ".</strong> " + esc(q) + "</p>";
            }).join("") +
          "</div>" +
        "</div>" +
      "</details>" +
      '<div class="answer">' +
        '<div class="answer__author"><span class="answer__avatar">AL</span><div><strong>Anthony Alberto Loyaga Chávez</strong><small>Mi respuesta</small></div></div>' +
        f.respuesta.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      "</div>" +
      '<div class="answer__refs"><p class="answer__refs-title">Referencias</p><ul>' +
        f.referencias.map(function (k) { return "<li>" + refHTML(D.referencias[k]) + "</li>"; }).join("") +
      "</ul></div>";
    $("#foroBody").innerHTML = html;
    $("#foroBody").scrollTop = 0;
    abrir($("#modalForo"));
  }

  function abrirDoc(key) {
    var p = key.split("|");
    var semana = D.semanas.filter(function (s) { return String(s.numero) === p[0]; })[0];
    var ev = semana.evidencias[+p[1]];
    $("#docKicker").textContent = "Semana " + semana.numero + " · " + ETIQUETA[ev.tipo];
    $("#docTitulo").textContent = ev.titulo;

    var acciones = "";
    if (ev.pdf) acciones += '<a class="btn btn--ghost" href="' + ev.pdf + '" target="_blank" rel="noopener">' + ICON.external + "<span>Abrir</span></a>";
    if (ev.word) acciones += '<a class="btn btn--ghost" href="' + ev.word + '" download>' + ICON.download + "<span>Word</span></a>";
    if (ev.pdf) acciones += '<a class="btn btn--primary" href="' + ev.pdf + '" download>' + ICON.download + "<span>PDF</span></a>";
    $("#docActions").innerHTML = acciones;

    var visor;
    var puedeVerPDF = navigator.pdfViewerEnabled !== false && !/Android|iPhone|iPad/i.test(navigator.userAgent);
    if (ev.pdf && puedeVerPDF) {
      visor = '<iframe src="' + ev.pdf + '#view=FitH" title="' + esc(ev.titulo) + '"></iframe>';
    } else {
      visor =
        '<div class="viewer-fallback">' + ICON.practica +
          "<p>" + (ev.pdf ? "Tu navegador no muestra PDF dentro de la página." : "Este documento está disponible para descargar.") + "</p>" +
          (ev.pdf
            ? '<a class="btn btn--primary" href="' + ev.pdf + '" target="_blank" rel="noopener">' + ICON.external + "<span>Abrir el PDF</span></a>"
            : '<a class="btn btn--primary" href="' + ev.word + '" download>' + ICON.download + "<span>Descargar Word</span></a>") +
        "</div>";
    }
    $("#docViewer").innerHTML = visor;
    abrir($("#modalDoc"));
  }

  function initModales() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-foro],[data-doc],[data-close]");
      if (!t) return;
      if (t.hasAttribute("data-foro")) abrirForo(t.getAttribute("data-foro"));
      else if (t.hasAttribute("data-doc")) abrirDoc(t.getAttribute("data-doc"));
      else cerrar(t.closest("dialog"));
    });
    Array.prototype.forEach.call(document.querySelectorAll("dialog.modal"), function (dlg) {
      // Clic fuera de la tarjeta = cerrar
      dlg.addEventListener("click", function (e) { if (e.target === dlg) cerrar(dlg); });
      // Tecla Esc con animación
      dlg.addEventListener("cancel", function (e) { e.preventDefault(); cerrar(dlg); });
    });
  }

  /* ---------------------------------------------------------- Navegación */
  function initNav() {
    var btn = $("#menuBtn"), nav = $("#nav"), bar = $("#topbar");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("is-open"); btn.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }
    });
    var onScroll = function () { bar.classList.toggle("is-scrolled", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------------- Foto de perfil */
  function initFoto() {
    var img = $("#fotoPerfil");
    var falla = function () { img.closest(".profile__photo").classList.add("no-photo"); };
    img.addEventListener("error", falla);
    if (img.complete && !img.naturalWidth) falla();
  }

  /* ---------------------------------------------------------- Aparición al hacer scroll */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  renderSemanas();
  renderConclusiones();
  renderReferencias();
  initModales();
  initNav();
  initFoto();
  initReveal();
})();
