// MØNTAN1 Academy :: shared behavior
// Progress lives in localStorage under "m1a-progress" as an array of section ids.

(function () {
  const KEY = 'm1a-progress';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch (e) { return []; }
  }
  function save(list) { localStorage.setItem(KEY, JSON.stringify(list)); }

  window.M1A = {
    done(id) { return load().includes(id); },
    complete(id) {
      const list = load();
      if (!list.includes(id)) { list.push(id); save(list); }
    },
    count() { return load().filter(id => id !== 'setup').length; },
  };

  // Mark-complete button on lesson pages: <button data-complete="section-01">
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-complete]');
    if (btn) {
      const id = btn.getAttribute('data-complete');
      const doneState = () => {
        btn.classList.add('done');
        btn.textContent = 'Section complete';
      };
      if (M1A.done(id)) doneState();
      btn.addEventListener('click', () => { M1A.complete(id); doneState(); });
    }

    // Index rows: <a class="section-row" data-section="section-01"> get a DONE stamp
    document.querySelectorAll('[data-section]').forEach(row => {
      if (M1A.done(row.getAttribute('data-section'))) {
        const st = row.querySelector('.st');
        if (st) { st.textContent = 'Complete'; st.classList.add('done'); }
      }
    });

    // Index progress readout: <span id="m1a-count">
    const count = document.getElementById('m1a-count');
    if (count) count.textContent = M1A.count() + ' / 12';

    // Certificate claim (section 12): unlocks at 12/12.
    // TODO: replace the mailto with a Formspree / Netlify Forms endpoint.
    const claim = document.getElementById('claim');
    if (claim) {
      const form = document.getElementById('claim-form');
      const btn = document.getElementById('claim-btn');
      const unlocked = M1A.count() >= 12;
      if (unlocked) claim.classList.add('unlocked');
      else btn.setAttribute('disabled', '');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!unlocked) return;
        const name = document.getElementById('claim-name').value.trim();
        const email = document.getElementById('claim-email').value.trim();
        const subject = encodeURIComponent('M0NTAN1 Academy :: certificate request');
        const body = encodeURIComponent(
          'Name for the certificate: ' + name +
          '\nEmail: ' + email +
          '\nCompleted: all 12 sections' +
          '\nDate: ' + new Date().toISOString().slice(0, 10)
        );
        window.location.href = 'mailto:rick@montanibitcoin.com?subject=' + subject + '&body=' + body;
        btn.textContent = 'Request sent, check your email app';
      });
    }

    // Scroll reveals
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  });
})();
