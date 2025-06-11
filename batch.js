const params = new URLSearchParams(location.search);
const batchName = params.get('name') || "UNKNOWN BATCH";

document.getElementById('batchNameDisplay').textContent = batchName.toUpperCase();

const optionToggle = document.getElementById('optionToggle');
const arrow = document.getElementById('arrow');
const optionsWrapper = document.getElementById('optionsWrapper');
const batchContent = document.getElementById('batchContent');
const batchOptions = document.querySelectorAll('.batch-option');

optionToggle.addEventListener('click', () => {
  optionsWrapper.classList.toggle('hidden');
  arrow.textContent = optionsWrapper.classList.contains('hidden') ? 'ˇ' : '^';
});

batchOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    batchOptions.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const selected = btn.dataset.option;
    optionToggle.innerHTML = `${btn.textContent} <span id="arrow">ˇ</span>`;
    optionsWrapper.classList.add('hidden');
    arrow.textContent = 'ˇ';
    renderContent(selected);
  });
});

// default content
renderContent('all-classes');

const batchSections = { /* your mapping */ };

function renderContent(option) {
  batchContent.innerHTML = '';
  if (option === 'all-classes') {
    const msg = document.createElement('div');
    msg.className = 'motivational';
    msg.innerHTML = `🧑🏻‍⚕️ <strong>Enjoy your NEET/JEE Journey</strong> 🧑🏻‍⚕️<br>
                     🎊 <strong>Stay Motivated</strong> 🎊<br>
                     📚 <strong>Keep Studying</strong> 🖋️`;
    batchContent.appendChild(msg);

    const sections = batchSections[batchName] || ["No data"];
    const grid = document.createElement('div');
    grid.className = 'sections';
    sections.forEach(sec => {
      const b = document.createElement('button');
      b.className = 'section-btn';
      b.textContent = sec;
      grid.appendChild(b);
    });
    batchContent.appendChild(grid);

  } else {
    const para = document.createElement('p');
    para.textContent = `Content for "${option}" will come soon.`;
    batchContent.appendChild(para);
  }
}
