/* ============================================================
   Let's Drive Auction — main.js
   ============================================================ */

// ----- Mobile navigation toggle -----
(function () {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
        if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
}());

// ----- Auction filter buttons -----
(function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.auction-card');
    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            cards.forEach(function (card) {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}());

// ----- Live countdown timers -----
(function () {
    // Parse "HH:MM:SS" into total seconds
    function parseTime(str) {
        var parts = str.split(':').map(Number);
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }

    // Format seconds back to "HH:MM:SS"
    function formatTime(s) {
        if (s < 0) s = 0;
        var h = Math.floor(s / 3600);
        var m = Math.floor((s % 3600) / 60);
        var sec = s % 60;
        return [h, m, sec].map(function (v) { return String(v).padStart(2, '0'); }).join(':');
    }

    var timers = {};

    document.querySelectorAll('.countdown').forEach(function (el, idx) {
        var key = 'timer_' + idx;
        timers[key] = parseTime(el.textContent.trim());
        el.setAttribute('data-timer-key', key);
    });

    setInterval(function () {
        Object.keys(timers).forEach(function (key) {
            if (timers[key] > 0) timers[key]--;
        });
        document.querySelectorAll('[data-timer-key]').forEach(function (el) {
            var key = el.getAttribute('data-timer-key');
            el.textContent = formatTime(timers[key]);
        });
    }, 1000);
}());

// ----- Newsletter form -----
(function () {
    var form = document.querySelector('.newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = form.querySelector('input[type="email"]');
        if (!input || !input.value) return;
        var btn = form.querySelector('button');
        var original = btn.textContent;
        btn.textContent = '✓ Subscribed!';
        btn.disabled = true;
        input.value = '';
        setTimeout(function () {
            btn.textContent = original;
            btn.disabled = false;
        }, 3000);
    });
}());

// ----- Contact form -----
(function () {
    var form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        var original = btn.textContent;
        btn.textContent = '✓ Message Sent!';
        btn.disabled = true;
        form.reset();
        setTimeout(function () {
            btn.textContent = original;
            btn.disabled = false;
        }, 3000);
    });
}());

// ----- Bid buttons -----
(function () {
    document.querySelectorAll('.btn-secondary').forEach(function (btn) {
        if (btn.textContent.trim() !== 'Place Bid') return;
        btn.addEventListener('click', function () {
            var card = btn.closest('.auction-card');
            var title = card ? card.querySelector('h3').textContent : 'this vehicle';
            var priceEl = card ? card.querySelector('.price') : null;
            if (priceEl) {
                var current = parseInt(priceEl.textContent.replace(/\D/g, ''), 10);
                var increment = current < 20000 ? 250 : current < 50000 ? 500 : 1000;
                priceEl.textContent = '$' + (current + increment).toLocaleString('en-US');
            }
            var original = btn.textContent;
            btn.textContent = '✓ Bid Placed!';
            btn.disabled = true;
            setTimeout(function () {
                btn.textContent = original;
                btn.disabled = false;
            }, 2000);
        });
    });
}());
