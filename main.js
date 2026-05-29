/* main.js — Homesick Mac site */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sticky Nav ── */
  const nav = document.querySelector('.site-nav');
  const heroEl = document.querySelector('.hero');

  function updateNav() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  if (heroEl) {
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ── Mobile Menu ── */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) navLinks.classList.remove('open');
    });
  }

  /* ── Mobile sub-dropdown tap toggle ── */
  // On touch devices :hover and :focus-within don't reliably open nested subs.
  // This adds a tap handler so Collaborations and Gallery sub-menus open on mobile.
  document.querySelectorAll('.dropdown-has-sub > a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Only intercept on narrow screens where the hamburger menu is active
      if (window.innerWidth > 900) return;
      const parent = link.parentElement;
      const isOpen = parent.classList.contains('sub-open');
      // Close any other open subs first
      document.querySelectorAll('.dropdown-has-sub.sub-open').forEach(el => el.classList.remove('sub-open'));
      if (!isOpen) {
        e.preventDefault();
        parent.classList.add('sub-open');
      }
    });
  });

  /* ── Active nav link ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Fade-in on scroll ── */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ── Lightbox ── */
  // Build the lightbox overlay once
  const lb = document.createElement('div');
  lb.className = 'lb-overlay';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.innerHTML =
    '<button class="lb-btn lb-close" aria-label="Close">&#10005;</button>' +
    '<button class="lb-btn lb-prev" aria-label="Previous">&#8249;</button>' +
    '<button class="lb-btn lb-next" aria-label="Next">&#8250;</button>' +
    '<div class="lb-img-wrap"><img class="lb-img" src="" alt=""></div>' +
    '<div class="lb-counter"></div>';
  document.body.appendChild(lb);

  const lbImg     = lb.querySelector('.lb-img');
  const lbCounter = lb.querySelector('.lb-counter');
  let images  = [];
  let current = 0;
  let isOpen  = false;

  function open(group, index) {
    images  = group;
    current = ((index % images.length) + images.length) % images.length;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
    lbCounter.textContent = (current + 1) + ' / ' + images.length;
    lb.querySelector('.lb-prev').style.display = images.length > 1 ? '' : 'none';
    lb.querySelector('.lb-next').style.display = images.length > 1 ? '' : 'none';
    if (!isOpen) {
      lb.classList.add('lb-active');
      document.body.style.overflow = 'hidden';
      isOpen = true;
    }
  }

  function close() {
    lb.classList.remove('lb-active');
    document.body.style.overflow = '';
    isOpen = false;
    setTimeout(function() { if (!isOpen) lbImg.src = ''; }, 350);
  }

  function nav_prev() { open(images, current - 1); }
  function nav_next() { open(images, current + 1); }

  // Register a group of images for the lightbox
  function registerGroup(selector) {
    var group = Array.from(document.querySelectorAll(selector));
    if (!group.length) return;
    group.forEach(function(img, i) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function() { open(group, i); });
    });
  }

  // Register both groups
  registerGroup('.ge-cell img');   // Retreat page gallery
  registerGroup('.lb-trigger');    // Homepage feature cards (and any other tagged images)

  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', function(e) {
    e.stopPropagation(); nav_prev();
  });
  lb.querySelector('.lb-next').addEventListener('click', function(e) {
    e.stopPropagation(); nav_next();
  });
  lb.addEventListener('click', function(e) {
    if (e.target === lb || e.target.classList.contains('lb-img-wrap')) close();
  });
  document.addEventListener('keydown', function(e) {
    if (!isOpen) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  nav_prev();
    if (e.key === 'ArrowRight') nav_next();
  });

});
