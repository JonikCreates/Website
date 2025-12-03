// Small interactions: nav toggle, copy email, year, clear form
document.addEventListener('DOMContentLoaded', function(){
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // copy email button
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.dataset.email || copyBtn.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = email; }, 1500);
      } catch (e) {
        // fallback — open mailto
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // clear form
  const clearBtn = document.getElementById('clear-btn');
  const form = document.getElementById('contact-form');
  if (clearBtn && form) {
    clearBtn.addEventListener('click', () => form.reset());
  }
});