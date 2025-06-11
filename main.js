// Main JavaScript for homepage
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
      <h3>${item.name}</h3>
      <img src="${item.thumbnail}" alt="${item.name}" class="thumbnail"/>
      <a href="batch.html?name=${encodeURIComponent(item.name)}" class="welcome-btn">WELCOME</a>
    `;

    contentGrid.appendChild(card);
  });
}
