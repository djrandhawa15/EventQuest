// Navigation helper
function setActiveNav(pageName) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Local storage helpers
const storage = {
    get: (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch {
            return null;
        }
    },
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove: (key) => {
        localStorage.removeItem(key);
    }
};

// User session
const session = {
    isLoggedIn: () => !!storage.get('user'),
    getUser: () => storage.get('user'),
    setUser: (user) => storage.set('user', user),
    logout: () => {
        storage.remove('user');
        window.location.href = 'login.html';
    }
};

// Check auth on protected pages
function requireAuth() {
    if (!session.isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Initialize page
function initPage(pageName) {
    setActiveNav(pageName);
}
