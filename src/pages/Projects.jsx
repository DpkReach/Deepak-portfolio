import { useNavigate } from 'react-router-dom'; // import useNavigate hook from react-router-dom

function Projects() {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to navigate to project detail page when a card is clicked
  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Project 1 */}
      <div className="project-card" onClick={() => handleProjectClick(1)}>
        <img src="project_image.jpg" alt="Project Thumbnail" />
        <h3>The Predictive and Successful Funding of Young or Early Stage Enterprises</h3>
        <p>
          Bigdata Technologies such as Apache Hadoop, Apache Spark were analysed and machine Learning models (k-means clustering) for predicting if the startups were successful going to an IPO or being acquired or shut in the near future. To query the results of analysis Spark-sql was used for querying the data.
        </p>
      </div>

      {/* Project 2 */}
      <div className="project-card" onClick={() => handleProjectClick(2)}>
        <img src="project_image.jpg" alt="Project Thumbnail" />
        <h3>NLP Project</h3>
        <p>Summarization and classification of WikiText Dataset</p>
      </div>

      {/* Project 3 */}
      <div className="project-card" onClick={() => handleProjectClick(3)}>
        <img src="project_image.jpg" alt="Project Thumbnail" />
        <h3>Accessibility Chatbot</h3>
        <p>Developed a chatbot with question answering model using scikit-learn, Flask API, and React.js</p>
      </div>
    </section>
  );
}

export default Projects;


