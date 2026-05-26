const universitiesContainer =
  document.getElementById("universities");

const addUniversityBtn =
  document.getElementById("addUniversity");

const predictBtn =
  document.getElementById("predictBtn");

const results =
  document.getElementById("result-item");

const clearBtn =
  document.getElementById("clearBtn");

let count = 0;

// SELECT YARATISH
function createUniversitySelect() {

  if (count >= 5) {
    alert("Maksimum 5 ta universitet");
    return;
  }

  const box = document.createElement("div");
  box.className = "uni-box";

  count++;

  const label = document.createElement("div");
  label.className = "uni-label";
  label.innerHTML = `<span class="uni-num">${count}</span> Universitet ${count}`;
  box.appendChild(label);

  const select = document.createElement("select");

  universities.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${item.university} - ${item.direction}`;
    select.appendChild(option);
  });

  box.appendChild(select);
  universitiesContainer.appendChild(box);
}

// BUTTON EVENT
addUniversityBtn.addEventListener("click", () => {
  createUniversitySelect();
});

// HELPERS
function getLevel(percent) {
  if (percent >= 80) return "Juda yuqori";
  if (percent >= 60) return "Yuqori";
  if (percent >= 40) return "O'rtacha";
  return "Past";
}

// PREDICTION
predictBtn.addEventListener("click", async () => {

  const score = Number(document.getElementById("score").value);

  if (!score) {
    alert("DTM ball kiriting");
    return;
  }

  const selects = document.querySelectorAll("#universities select");

  results.innerHTML = "<h2>📊 Natijalar</h2>";

  let bestVariant = null;
  let globalBest  = null;

  // ================= GLOBAL AI CHECK =================
  for (const uni of universities) {
    const percent = await predictChance(score, uni.grant, uni.contract);
    const level   = getLevel(percent);

    if (!globalBest || percent > globalBest.percent) {
      globalBest = { ...uni, percent, level };
    }
  }

  // ================= USER SELECTED =================
  for (const select of selects) {
    const uni     = universities[select.value];
    const percent = await predictChance(score, uni.grant, uni.contract);
    const level   = getLevel(percent);

    if (!bestVariant || percent > bestVariant.percent) {
      bestVariant = { ...uni, percent, level };
    }

    const card = document.createElement("div");
    card.className = "result-item";

    card.innerHTML = `
      <h3>${uni.university}</h3>
      <p><b>Yo'nalish:</b> ${uni.direction}</p>
      <p><b>Grant:</b> ${uni.grant} · <b>Kontrakt:</b> ${uni.contract}</p>
      <p><b>Ehtimollik:</b> ${percent}%</p>
      <p><b>Holat:</b> ${level}</p>
    `;

    results.appendChild(card);
  }

  // ================= USER BEST =================
  if (bestVariant) {
    const recommendCard = document.createElement("div");
    recommendCard.className = "result-item recommend";

    recommendCard.innerHTML = `
      <div class="badge">✓ Tanlov ichidan eng yaxshi</div>
      <h3>${bestVariant.university}</h3>
      <p>${bestVariant.direction}</p>
      <p><b>${bestVariant.percent}%</b> — ${bestVariant.level}</p>
    `;

    results.prepend(recommendCard);
  }

  // ================= GLOBAL AI BEST =================
  const aiCandidates = [];

  for (const uni of universities) {
    const percent = await predictChance(score, uni.grant, uni.contract);
    const diff    = uni.grant - score;
    const level   = getLevel(percent);
    aiCandidates.push({ ...uni, percent, level, diff });
  }

  // ================= FILTER (score ±10) =================
  let filtered = aiCandidates.filter(u => Math.abs(u.grant - score) <= 10);
  if (filtered.length === 0) filtered = aiCandidates;

  filtered.sort((a, b) => b.percent - a.percent);

  const top3   = filtered.slice(0, 3);
  const safety = [...aiCandidates].sort((a, b) => a.percent - b.percent)[0];

  // ================= RENDER TOP 3 =================
  top3.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "result-item ai-recommend";

    card.innerHTML = `
      <div class="badge" style="background:#eff6ff;color:#1d4ed8;">✦ AI Tavsiya #${i + 1}</div>
      <h3>${item.university}</h3>
      <p>${item.direction}</p>
      <p>Ehtimollik: <b>${item.percent}%</b> — ${item.level}</p>
    `;

    results.prepend(card);
  });

  // ================= SAFETY =================
  if (safety) {
    const safeCard = document.createElement("div");
    safeCard.className = "result-item recommend";

    safeCard.innerHTML = `
      <div class="badge">🛡 Safety variant (eng past risk)</div>
      <h3>${safety.university}</h3>
      <p>${safety.direction}</p>
      <p>Ehtimollik: <b>${safety.percent}%</b></p>
    `;

    results.appendChild(safeCard);
  }
});

// CLEAR
clearBtn.addEventListener("click", () => {
  document.getElementById("score").value  = "";
  document.getElementById("scoreBadge").textContent = "— ball";
  universitiesContainer.innerHTML = "";
  results.innerHTML = "<h2>📊 Natijalar</h2><div class='empty-state'>Ma'lumot kiriting va bashorat tugmasini bosing</div>";
  count = 0;
  createUniversitySelect();
});

// SCORE BADGE
document.getElementById("score").addEventListener("input", () => {
  const v = document.getElementById("score").value;
  document.getElementById("scoreBadge").textContent = v ? v + " ball" : "— ball";
});

// INIT
createUniversitySelect();

window.addEventListener("load", async () => {
  await createModel();
  console.log("AI ready");
});