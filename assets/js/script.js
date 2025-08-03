// Load saved theme
var ready = (callback) => {
    if(document.readyState != "loading")
        callback();
    else
        document.addEventListener("DOMContentLoaded", callback);
}

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

ready(() => {
    // Add onClick listener to toggleButton
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    })
})