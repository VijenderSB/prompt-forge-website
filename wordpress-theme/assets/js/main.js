/**
 * Centre for Lasik - Main JS
 *
 * Handles: Mobile menu toggle, FAQ accordion, smooth scroll
 *
 * @package Centre_For_Lasik
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ─── Mobile Menu Toggle ─── */
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      // Swap hamburger / X icon
      const isOpen = menu.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking a link
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
  }

  /* ─── FAQ Accordion ─── */
  document.querySelectorAll('[data-faq]').forEach(function (item) {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Close all in same parent column
      item.parentElement.querySelectorAll('[data-faq]').forEach(function (sibling) {
        sibling.classList.remove('open');
        const siblingBtn = sibling.querySelector('.faq-question');
        if (siblingBtn) siblingBtn.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ─── Smooth Scroll for Anchor Links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerHeight = document.getElementById('site-header')
          ? document.getElementById('site-header').offsetHeight
          : 64;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  /* ─── Scroll Animation (Intersection Observer) ─── */
  const observerOptions = { threshold: 0.1, rootMargin: '-50px' };
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card-elevated, .stat-item, .why-card, .usp-card').forEach(function (el) {
    el.style.opacity = '0';
    observer.observe(el);
  });

});
