function toggleMenu() {
  const dropdown = document.getElementById('menuDropdown');
  dropdown.classList.toggle('hidden');
}

// Smooth scroll to section + close menu
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  document.getElementById('menuDropdown').classList.add('hidden');
}

// Close on outside click
document.addEventListener('click', (e) => {
  const menuBtn = document.getElementById('menuBtn');
  const dropdown = document.getElementById('menuDropdown');
  if (menuBtn && dropdown && !menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add('hidden');
  }
});

// Menu link clicks → smooth scroll + close
document.addEventListener('click', (e) => {
  const link = e.target.closest('#menuDropdown a');
  if (link) {
    e.preventDefault();
    const href = link.getAttribute('href');
    const sectionId = href.startsWith('#') ? href.slice(1) : href;
    scrollToSection(sectionId);
  }
});
