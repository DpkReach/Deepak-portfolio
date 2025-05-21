import { useNavigate } from 'react-router-dom'; // import useNavigate hook from react-router-dom
import { FaLinkedin, FaEnvelope,FaMoneyBillWave } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';
import {FaComments, FaChartBar} from 'react-icons/fa';
//import { GiMoneyBag } from 'react-icons/gi';

function Projects() {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to navigate to project detail page when a card is clicked
  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects">
      {/*}<h2>Projects</h2>*/}

      {/* Project 1 */}
      <div className="project-card" onClick={() => handleProjectClick(1)}>
        {/*}<img src="project_image.jpg" alt="Project Thumbnail" />*/}
        <FaMoneyBillWave size={50} color="#67230c" />
        <h3 class="h3_project">The Predictive and Successful Funding of Young or Early Stage Enterprises</h3>
        <p class="p_project">
          Bigdata Technologies such as Apache Hadoop, Apache Spark were analysed and machine Learning models (k-means clustering) for predicting if the startups were successful going to an IPO or being acquired or shut in the near future. To query the results of analysis Spark-sql was used for querying the data.
        </p>
      </div>

      {/* Project 2 */}
      <div className="project-card" onClick={() => handleProjectClick(2)}>
        {/*}<img src="project_image.jpg" alt="Project Thumbnail" />*/}
        <AiOutlineFileText size={50} color="#67230c" />
        <h3 class="h3_project">NLP Project</h3>
        <p class="p_project">Summarization and classification of WikiText Dataset</p>
      </div>

      {/* Project 3 */}
      <div className="project-card" onClick={() => handleProjectClick(3)}>
        <FaComments size={50} color="#67230c" />
        <h3 class="h3_project">Accessibility Chatbot</h3>
        <p class="p_project">Developed a chatbot with question answering model using scikit-learn, Flask API, and React.js</p>
      </div>

      <div className="project-card" onClick={() => handleProjectClick(4)}>
         <FaChartBar size={50} color="#67230c" />
         <h3 class="h3_project">Climatic Disaster Visualization</h3>
         <p class="p_project">The Climate Crisis: ​
                              An illustration of its effect on Natural Disasters</p>
      </div>
    </section>
  );
}

export default Projects;


