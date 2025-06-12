const params = new URLSearchParams(window.location.search);
const batchName = params.get('name') || "UNKNOWN BATCH";
document.getElementById('batchNameDisplay').textContent = batchName.toUpperCase();

const optionsToggle = document.getElementById("optionToggle");
const optionsWrapper = document.getElementById("optionsWrapper");
const batchContent = document.getElementById("batchContent");

optionsToggle.addEventListener("click", () => {
  optionsWrapper.classList.toggle("hidden");
  document.getElementById("arrow").textContent = optionsWrapper.classList.contains("hidden") ? "ˇ" : "^";
});

document.querySelectorAll(".batch-option").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".batch-option").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    optionsToggle.innerHTML = btn.textContent + ' <span id="arrow">ˇ</span>';
    optionsWrapper.classList.add("hidden");

    renderContent(btn.dataset.option);
  });
});

// Batch subjects mapping
const batchSubjects = {
  "YAKEEN NEET 2026": ["Physics","Botany","Zoology","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "YAKEEN NEET 2.0 2026": ["Physics : MR Sir","Physics : Saleem Sir","Physical Chemistry : Amit Mahajan Sir","Physical Chemistry : Sudhanshu Kumar Sir","Organic Chemistry : Pankaj Sijariya Sir","Organic Chemistry : Shubh Karan Chaudhary Sir","Inorganic Chemistry : Mohit Dadheech Sir","Inorganic Chemistry : Kunwar Om Pandey Sir","Botany : Rupesh Chaudhary Sir","Botany : Vipin Sharma Sir","Zoology : Samapti Sinha Ma'am","Zoology : Dr Akanksha Agarwal Ma'am"],
  "ARJUNA JEE 2026": ["Physics","Maths","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "ARJUNA JEE 2.0 2026": ["Physics","Maths","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "LAKSHYA JEE 2026": ["Physics","Maths","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "LAKSHYA JEE 2.0 2026": ["Physics","Maths","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "PRAYAS JEE 2026": ["Physics","Maths","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "PRAYAS JEE 2.0 2026": ["Physics","Maths","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "ARJUNA NEET 2026": ["Physics","Botany","Zoology","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "ARJUNA NEET 2.0 2026": ["Physics","Botany","Zoology","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "LAKSHYA NEET 2026": ["Physics","Botany","Zoology","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"],
  "LAKSHYA NEET 2.0 2026": ["Physics","Botany","Zoology","Physical Chemistry","Organic Chemistry","Inorganic Chemistry"]
};

function renderContent(option) {
  batchContent.innerHTML = "";

  if (option === "all-classes") {
    const msg = document.createElement("div");
    msg.className = "motivational";
    msg.innerHTML = `
      🧑🏻‍⚕️ <strong>Enjoy your NEET/JEE Journey</strong> 🧑🏻‍⚕️<br/>
      🎊 <strong>Stay Motivated</strong> 🎊<br/>
      📚 <strong>Keep Studying</strong> 🖋️
    `;
    batchContent.appendChild(msg);

    const subjects = batchSubjects[batchName] || ["No data found for this batch."];
    const grid = document.createElement("div");
    grid.className = "sections";

    subjects.forEach(subject => {
  const link = document.createElement("a");
  link.className = "section-btn";
  link.style.textDecoration = "none";
  link.style.display = "inline-block";
  link.style.color = "inherit";
  link.textContent = subject;

  // Match subject to its HTML page
  if (subject === "Physics : MR Sir") {
    link.href = "physics-mr.html";
  } else if (subject === "Physics : Saleem Sir") {
    link.href = "physics-saleem.html";  // create later if needed
  } else {
    link.href = "#"; // or leave unlinked for now
  }

  grid.appendChild(link);
});

    batchContent.appendChild(grid);
  } else {
    const placeholder = document.createElement("p");
    placeholder.textContent = `🛠️ "${option}" content will be added soon.`;
    placeholder.style.textAlign = "center";
    placeholder.style.color = "#666";
    batchContent.appendChild(placeholder);
  }
}

// Load default
renderContent("all-classes");
