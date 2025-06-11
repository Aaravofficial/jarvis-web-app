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

    const selectedText = btn.textContent;
    optionToggle.innerHTML = `${selectedText} <span id="arrow">^</span>`;
    optionsWrapper.classList.add('hidden');

    renderContent(btn.dataset.option);
  });
});

function renderContent(option) {
  batchContent.innerHTML = '';

  if (option === 'all-classes') {
    const msg = document.createElement('div');
    msg.className = 'motivational';
    msg.innerHTML = `
      🧑🏻‍⚕️ <strong>Enjoy  ur  NEET  Journey</strong> 🧑🏻‍⚕️<br>
      🎊 <strong>Stay  Motivated</strong> 🎊<br>
      📚 <strong>Keep Studying</strong> 🖋️
    `;
    batchContent.appendChild(msg);

    const subjects = batchSubjects[batchName] || ["No data found for this batch."];
    const grid = document.createElement('div');
    grid.className = 'sections';

    subjects.forEach(subject => {
      const b = document.createElement('button');
      b.className = 'section-btn';
      b.textContent = subject;
      grid.appendChild(b);
    });

    batchContent.appendChild(grid);
  } else {
    const p = document.createElement('p');
    p.textContent = `Content for "${option}" is coming soon!`;
    batchContent.appendChild(p);
  }
}

// Render All Classes by default
renderContent('all-classes');

// SUBJECT MAPPING (as provided)
const batchSubjects = {
  "Yakeen NEET 2026": [
    "Physics", "Botany", "Zoology",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Yakeen NEET 2.0 2026": [
    "Physics : MR Sir", "Physics : Saleem Sir",
    "Physical Chemistry : Amit Mahajan Sir", "Physical Chemistry : Sudhanshu Kumar Sir",
    "Organic Chemistry : Pankaj Sijariya Sir", "Organic Chemistry : Shubh Karan Chaudhary Sir",
    "Inorganic Chemistry : Mohit Dadheech Sir", "Inorganic Chemistry : Kunwar Om Pandey Sir",
    "Botany : Rupesh Chaudhary Sir", "Botany : Vipin Sharma Sir",
    "Zoology : Samapti Sinha Ma'am", "Zoology : Dr Akanksha Agarwal Ma'am"
  ],
  "Arjuna JEE 2026": [
    "Physics", "Maths",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Arjuna JEE 2.0 2026": [
    "Physics", "Maths",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Lakshya JEE 2026": [
    "Physics", "Maths",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Lakshya JEE 2.0 2026": [
    "Physics", "Maths",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Prayas JEE 2026": [
    "Physics", "Maths",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Prayas JEE 2.0 2026": [
    "Physics", "Maths",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Arjuna NEET 2026": [
    "Physics", "Botany", "Zoology",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Arjuna NEET 2.0 2026": [
    "Physics", "Botany", "Zoology",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Lakshya NEET 2026": [
    "Physics", "Botany", "Zoology",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ],
  "Lakshya NEET 2.0 2026": [
    "Physics", "Botany", "Zoology",
    "Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"
  ]
};
