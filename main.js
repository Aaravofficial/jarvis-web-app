import contentData from './content.json';

const courseSelect = document.getElementById('courseSelect');
const searchInput = document.getElementById('searchInput');
const contentContainer = document.getElementById('contentContainer');

// Create colorful, attractive uppercase title
const createTitle = (name) => {
  const colors = ['#d32f2f', '#388e3c', '#1976d2', '#f57c00', '#7b1fa2', '#0097a7'];
  const color = colors[name.length % colors.length];
  return `<h2 style="color:${color}; font-weight:bold; font-size: 1.2rem; text-transform: uppercase; margin-bottom: 0.5rem;">${name}</h2>`;
};

// Create card for each batch
const createCard = (item) => {
  return `
    <div class="batch-card">
      ${createTitle(item.name)}
      <img src="${item.thumbnail}" alt="${item.name}" class="thumbnail"/>
      <a href="${item.link}" class="welcome-btn" target="_blank">WELCOME</a>
    </div>
  `;
};

// Render content based on filter + search
const renderContent = () => {
  const selectedCourse = courseSelect.value;
  const searchTerm = searchInput.value.toLowerCase();

  const filteredContent = contentData.filter(item => {
    const matchesCourse = !selectedCourse || item.course === selectedCourse;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm);
    return matchesCourse && matchesSearch;
  });

  if (filteredContent.length === 0) {
    contentContainer.innerHTML = `<p style="text-align:center;color:gray;">No batches found.</p>`;
    return;
  }

  contentContainer.innerHTML = filteredContent.map(createCard).join('');
};

// Event listeners
courseSelect.addEventListener('change', renderContent);
searchInput.addEventListener('input', renderContent);

// Initial render
renderContent();
