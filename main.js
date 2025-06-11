let allContent = [];

fetch('content.json')
  .then(res => res.json())
  .then(data => {
    allContent = data;
    populateFilterOptions(data);
    renderContent(data);
  });

const searchInput = document.getElementById('searchInput');
const courseFilter = document.getElementById('courseFilter');
const contentGrid = document.getElementById('contentGrid');
const toggleDarkMode = document.getElementById('toggleDarkMode');

searchInput.addEventListener('input', applyFilters);
courseFilter.addEventListener('change', applyFilters);
toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function populateFilterOptions(data) {
  const uniqueCourses = [...new Set(data.map(item => item.course))];
  uniqueCourses.forEach(course => {
    const option = document.createElement('option');
    option.value = course;
    option.textContent = course;
    courseFilter.appendChild(option);
  });
}

function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const selectedCourse = courseFilter.value;

  const filtered = allContent.filter(item => {
    const matchName = item.name.toLowerCase().includes(search);
    const matchCourse = selectedCourse === 'all' || item.course === selectedCourse;
    return matchName && matchCourse;
  });

  renderContent(filtered);
}

function renderContent(data) {
  contentGrid.innerHTML = '';
  if (data.length === 0) {
    contentGrid.innerHTML = '<p>No matching content found.</p>';
    return;
  }

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3 style="color: #d63384; font-weight: bold; text-transform: uppercase; text-align: center;">${item.name}</h3>
      <img src="${item.thumbnail}" alt="${item.name} Thumbnail" class="thumb" />
      <button class="welcome-btn" onclick="openBatch('${item.name}')">WELCOME</button>
    `;

    contentGrid.appendChild(card);
  });
}

// Modal open function
function openBatch(batchName) {
  document.getElementById('batchTitle').textContent = batchName.toUpperCase();
  document.getElementById('batchModal').style.display = 'block';
  document.getElementById('dropdownButtons').classList.add('hidden');
  document.getElementById('arrow').textContent = 'ˇ';
}

// Dropdown toggle inside modal
function toggleDropdown() {
  const dropdown = document.getElementById('dropdownButtons');
  const arrow = document.getElementById('arrow');
  dropdown.classList.toggle('hidden');
  arrow.textContent = dropdown.classList.contains('hidden') ? 'ˇ' : '^';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('batchModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
