const batchName = new URLSearchParams(window.location.search).get('batch') || "Unknown Batch";

// Set Batch Name
document.getElementById('batchNameDisplay').textContent = batchName.toUpperCase();

// DOM Elements
const optionToggle = document.getElementById('optionToggle');
const arrow = document.getElementById('arrow');
const optionsWrapper = document.getElementById('optionsWrapper');
const batchContent = document.getElementById('batchContent');
const batchOptions = document.querySelectorAll('.batch-option');

// Option Toggle Click
optionToggle.addEventListener('click', () => {
  optionsWrapper.classList.toggle('hidden');
  arrow.textContent = optionsWrapper.classList.contains('hidden') ? 'ˇ' : '^';
});

// Option Selection
batchOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    batchOptions.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const option = btn.dataset.option;
    optionToggle.innerHTML = `${btn.textContent} <span id="arrow">${optionsWrapper.classList.contains('hidden') ? 'ˇ' : '^'}</span>`;
    optionsWrapper.classList.add('hidden');
    arrow.textContent = 'ˇ';

    renderContent(option);
  });
});

// Default load
renderContent('all-classes');

// Batch-specific sections
const batchSections = {
  "Yakeen NEET 2026": ["Physics", "Botany", "Zoology", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Yakeen NEET 2.0 2026": [
    "Physics : MR Sir", "Physics : Saleem Sir",
    "Physical Chemistry : Amit Mahajan Sir", "Physical Chemistry : Sudhanshu Kumar Sir",
    "Organic Chemistry : Pankaj Sijariya Sir", "Organic Chemistry : Shubh Karan Chaudhary Sir",
    "Inorganic Chemistry : Mohit Dadheech Sir", "Inorganic Chemistry : Kunwar Om Pandey Sir",
    "Botany : Rupesh Chaudhary Sir", "Botany : Vipin Sharma Sir",
    "Zoology : Samapti Sinha Ma'am", "Zoology : Dr Akanksha Agarwal Ma'am"
  ],
  "Arjuna JEE 2026": ["Physics", "Maths", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Arjuna JEE 2.0 2026": ["Physics", "Maths", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Lakshya JEE 2026": ["Physics", "Maths", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Lakshya JEE 2.0 2026": ["Physics", "Maths", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Prayas JEE 2026": ["Physics", "Maths", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Prayas JEE 2.0 2026": ["Physics", "Maths", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Arjuna NEET 2026": ["Physics", "Botany", "Zoology", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Arjuna NEET 2.0 2026": ["Physics", "Botany", "Zoology", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Lakshya NEET 2026": ["Physics", "Botany", "Zoology", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
  "Lakshya NEET 2.0 2026": ["Physics", "Botany", "Zoology", "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"]
};

// Render function
function renderContent(option) {
  batchContent.innerHTML = '';

  if (option === 'all-classes') {
    const message = document.createElement('div');
    message.className = 'motivational';
    message.innerHTML = `
      🧑🏻‍⚕️ <strong>Enjoy your NEET/JEE Journey</strong> 🧑🏻‍⚕️<br>
      🎊 <strong>Stay Motivated</strong> 🎊<br>
      📚 <strong>Keep Studying</strong> 🖋️
    `;
    batchContent.appendChild(message);

    const sections = batchSections[batchName] || ["No section data available for this batch."];
    const sectionGrid = document.createElement('div');
    sectionGrid.className = 'sections';

    sections.forEach(sec => {
      const btn = document.createElement('button');
      btn.className = 'section-btn';
      btn.textContent = sec;
      sectionGrid.appendChild(btn);
    });

    batchContent.appendChild(sectionGrid);
  } else {
    const placeholder = document.createElement('p');
    placeholder.textContent = `Content for "${option}" will be added soon.`;
    batchContent.appendChild(placeholder);
  }
    }
