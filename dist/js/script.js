// dropdown footer
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownIcon = document.getElementById('dropdownIcon');
    if (dropdownMenu.classList.contains('hidden')) {
      dropdownMenu.classList.remove('hidden');
      dropdownIcon.classList.add('rotate-180');
    } else {
        dropdownMenu.classList.add('hidden');
        dropdownIcon.classList.remove('rotate-180');
    }
}


document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdown = document.querySelector('[onclick="toggleDropdown()"]');
    if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
        document.getElementById('dropdownIcon').classList.remove('rotate-180');
    }
});
