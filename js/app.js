// ============================================================================
// APP LOGIC
// ============================================================================
// Renders project cards from PROJECTS (see projects-data.js) into the home
// page grid, and renders the shared detail view when the URL hash matches a
// project id (e.g. #lta-aircraft-design). You shouldn't need to edit this
// file to add new projects — just edit projects-data.js.
// ============================================================================

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function statusBadgeClass(status) {
  return status === "In Progress" ? "in-progress" : "complete";
}

function renderProjectGrid() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = PROJECTS.map((project) => {
    const coverImage = project.images && project.images[0];
    return `
      <a class="project-card" href="#${encodeURIComponent(project.id)}">
        ${coverImage ? `
          <div class="card-image">
            <img src="${coverImage.src}" alt="${escapeHtml(project.title)}" loading="lazy" />
          </div>
        ` : ""}
        <div class="card-body">
          <div class="card-top-row">
            <span class="card-category">${escapeHtml(project.category)}</span>
            <span class="status-badge ${statusBadgeClass(project.status)}">${escapeHtml(project.status)}</span>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="card-summary">${escapeHtml(project.summary)}</p>
        </div>
      </a>
    `;
  }).join("");
}

function renderInProgressGrid() {
  const grid = document.getElementById("progress-grid");
  if (!grid) return;
  grid.innerHTML = IN_PROGRESS_PROJECTS.map((item) => `
    <div class="progress-card">
      <div class="card-top-row">
        <span class="card-category">${escapeHtml(item.category)}</span>
        <span class="status-badge in-progress">In Progress</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="card-summary">${escapeHtml(item.description)}</p>
      ${item.started ? `<p class="progress-started">Since ${escapeHtml(item.started)}</p>` : ""}
    </div>
  `).join("");
}

function renderDetailView(project) {
  document.getElementById("detail-category").textContent = project.category;
  document.getElementById("detail-title").textContent = project.title;
  document.getElementById("detail-summary").textContent = project.summary;
  document.getElementById("detail-what").textContent = project.what;
  document.getElementById("detail-how").textContent = project.how;
  document.getElementById("detail-result").textContent = project.result;

  const imagesEl = document.getElementById("detail-images");
  imagesEl.innerHTML = (project.images || []).map((img) => `
    <div class="detail-image">
      <figure>
        <img src="${img.src}" alt="${escapeHtml(img.caption || project.title)}" loading="lazy" />
        ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ""}
      </figure>
    </div>
  `).join("");

  const metaEl = document.getElementById("detail-meta");
  const metaFields = [
    ["Role", project.role],
    ["Tools", project.tools],
    ["Team", project.team],
    ["Status", project.status]
  ];
  metaEl.innerHTML = metaFields.map(([label, value]) => `
    <div class="meta-item">
      <div class="meta-label">${escapeHtml(label)}</div>
      <div class="meta-value">${escapeHtml(value || "")}</div>
    </div>
  `).join("");
}

function getProjectIdFromHash() {
  return decodeURIComponent(window.location.hash.replace(/^#/, ""));
}

function route() {
  const id = getProjectIdFromHash();
  const project = PROJECTS.find((p) => p.id === id);
  const homeView = document.getElementById("home-view");
  const detailView = document.getElementById("detail-view");

  if (project) {
    renderDetailView(project);
    homeView.hidden = true;
    detailView.hidden = false;
    window.scrollTo(0, 0);
  } else {
    homeView.hidden = false;
    detailView.hidden = true;
  }
}

document.getElementById("year").textContent = new Date().getFullYear();

renderProjectGrid();
renderInProgressGrid();
route();
window.addEventListener("hashchange", route);
