import { useParams } from 'react-router-dom';

// Sample data for the projects
const projects = [
  {
    id: "1",
    title: "The Predictive and Successful Funding of Young or Early Stage Enterprises",
    description:
      "Bigdata Technologies such as Apache Hadoop, Apache Spark were analysed and machine Learning models (k-means clustering) for predicting if the startups were successful going to an IPO or being acquired or shut in the near future.",
    proposal:
      "This project uses machine learning models like k-means clustering for predicting the outcome of startups and analyzing them using Spark-SQL.",
    images: [
      "/assets/images/project1-1.png",
      "/assets/images/project1-2.png",
    ],
    githubLink: "https://github.com/your-github-link/project1",
  },
  {
    id: "2",
    title: "NLP Project",
    description: "Summarization and classification of WikiText Dataset",
    proposal: "Using NLP techniques to summarize and classify large text datasets.",
    images: [
      "/assets/images/project2-1.png",
      "/assets/images/project2-2.png",
    ],
    githubLink: "https://github.com/your-github-link/project2",
  },
  {
    id: "3",
    title: "Accessibility Chatbot",
    description:
      "Developed a chatbot with question answering model using scikit-learn, Flask API, and React.js",
    proposal:
      "This chatbot provides accessibility features for users with disabilities using machine learning models and a web-based interface.",
    images: [
      "/assets/images/project3-1.png",
      "/assets/images/project3-2.png",
    ],
    githubLink: "https://github.com/your-github-link/project3",
  },
];

function ProjectDetail() {
  const { projectId } = useParams(); // Get the projectId from the URL
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail-container">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>
        <strong>Proposal:</strong> {project.proposal}
      </p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>

      <div className="image-gallery">
        {project.images.map((src, index) => (
          <img key={index} src={src} alt={`Visualization ${index + 1}`} width="200" height="150" />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;

