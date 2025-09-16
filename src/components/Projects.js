// src/components/Projects.js
function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>Key Projects</h2>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Client Management Portal</h5>
          <p className="card-text">
            Self-built PHP + MySQL admin dashboard for freelancers and clients.<br />
            • CRUD for user profiles, project tracking & invoice generation.<br />
            • CSV bulk import/export cut manual entry by 70%.<br />
            • jQuery/AJAX gives live validation, search, and pagination.
          </p>
          <span className="badge">PHP</span>
          <span className="badge">MySQL</span>
          <span className="badge">jQuery</span>
        </div>
      </div>
      {/* Add more project cards here if you have additional projects */}
    </section>
  );
}

export default Projects;
