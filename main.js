```js
let allContent = [];

fetch('content.json')
  .then(res => res.json())
  .then(data => {
    allContent = data;
    populateCourses();
    renderContent(data);
  });

const searchInput = document.getElementById('searchInput');
const courseSelect = document.getElementById('courseSelect');
const contentContainer = document.getElementById('contentContainer');
const toggleDarkMode = document.getElementById('toggleDarkMode');

searchInput.addEventListener('input', applyFilters);
courseSelect.addEventListener('change', applyFilters);
toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function populateCourses() {
  const uniqueCourses = [...new Set(allContent.map(item => item.course))];
  uniqueCourses.forEach(course => {
    const option = document.createElement('option');
    option.value = course;
    option.textContent = course;
    courseSelect.appendChild(option);
  });
}

function applyFilters() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCourse = courseSelect.value;

  const filtered = allContent.filter(item => {
    const matchesName = item.name.toLowerCase().includes(searchText);
    const matchesCourse = !selectedCourse || item.course === selectedCourse;
    return matchesName && matchesCourse;
  });

  renderContent(filtered);
}

function renderContent(data) {
  contentContainer.innerHTML = '';

  if (data.length === 0) {
    contentContainer.innerHTML = '<p>No matching content found.</p>';
    return;
  }

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'batch-card';

    card.innerHTML = `
      <h2>${item.name.toUpperCase()}</h2>
      <img src="${item.thumbnail}" alt="${item.name}" class="thumbnail" />
      <a href="${item.link}" class="welcome-btn" target="_blank">WELCOME</a>
    `;

    contentContainer.appendChild(card);
  });
}
```
