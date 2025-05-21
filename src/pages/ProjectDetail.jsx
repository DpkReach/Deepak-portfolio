import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FaGithub } from 'react-icons/fa';


import Bigdata_Image1 from '../assets/images/BigData_images/Image1.png';
import Bigdata_Image2 from '../assets/images/BigData_images/Image2.png';
import Bigdata_Image3 from '../assets/images/BigData_images/Image3.png';
import Bigdata_Image4 from '../assets/images/BigData_images/Image4.png';
import Nlp_Image1 from '../assets/images/NLP_images/image1.png';
import Nlp_Image2 from '../assets/images/NLP_images/image2.png';
import Nlp_Image3 from '../assets/images/NLP_images/image3.png';
import Nlp_Image4 from '../assets/images/NLP_images/image4.png';
import Nlp_Image5 from '../assets/images/NLP_images/image5.png';
import Nlp_Image6 from '../assets/images/NLP_images/image6.png';
import Nlp_Image7 from '../assets/images/NLP_images/image7.png';
import A11y_Image1 from '../assets/images/A11y_images/image1.png';
import A11y_Image2 from '../assets/images/A11y_images/image2.png';
import A11y_Image3 from '../assets/images/A11y_images/image3.png';
import A11y_Image4 from '../assets/images/A11y_images/image4.png';
import A11y_Image5 from '../assets/images/A11y_images/image5.png';
import DV_Image1 from '../assets/images/DV_images/image1.png';
import DV_Image2 from '../assets/images/DV_images/image2.png';
import DV_Image3 from '../assets/images/DV_images/image3.png';
import DV_Image4 from '../assets/images/DV_images/image4.png';
import DV_Image5 from '../assets/images/DV_images/image5.png';
import DV_Image6 from '../assets/images/DV_images/image6.png';

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
       Bigdata_Image1,Bigdata_Image2,Bigdata_Image3,Bigdata_Image4
    ],
    githubLink: "https://github.com/DpkReach/Predictive-Successful-Funding",
  },
  {
    id: "2",
    title: "Natural Language Processing for WikiText",
    description: `Connection of Summarization and Classification towards
                  More Enhanced NLP Applications`,
    proposal: `1. Problem Overview:
    • Understanding Large Text Data: The WikiText dataset consists of long, detailed text; this
    usually causes more problems regarding processing and efficiently analyzing the text
    data.
    • Efficient Classification: The classification of such large datasets can be computationally
    expensive and less effective because they possess lots of redundant information.

    2. Scope of the Project:
    Objective: In this regard, we try to overcome the challenges mentioned above by embedding
    summarization in the pre-processing step toward efficient and effective classification on the
    WikiText dataset.`,
    images: [
        Nlp_Image1,Nlp_Image2,Nlp_Image3,Nlp_Image4,Nlp_Image5,Nlp_Image6,Nlp_Image7
    ],
    githubLink: "https://github.com/Ajaysimha29/Nlp_project_3",
  },
  {
    id: "3",
    title: "Accessibility Chatbot",
    description:
      `Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being
       about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile
       devices, or those with slow network connections. Chatbots are an artificial intelligence (AI) component that can be integrated into
       and utilized with any popular messaging interface`,
    proposal:
      `• Developers and designers who would like to consider and query Accessibility guidelines and Laws while they
       are developing the product.
       • An online accessibility chatbot and its associated material might be intended for a wide range of users,
       including people with disabilities, organizations, developers, designers, and everyone else interested in
       advancing inclusion and accessibility in the digital sphere.`,
    images: [
      A11y_Image1,A11y_Image2,A11y_Image3,A11y_Image4,A11y_Image5
    ],
    githubLink: "https://github.com/sivasurasani/Accessebility-ChatBot",
  },
  {
    id: "4",
    title: "Climate Disaster Visualization",
    description:
    `The illustration between the climate changes and natural disasters occurred in each country.
     • The associations between climate change and natural disasters demonstrates how rising
     temperatures worldwide, unpredictable weather, and extreme occurrences such as floods, storms,
     and wildfires are growing more connected.

     • We did different visual representation which effect of climate change causes natural disasters by
     raising their frequency, intensity, and unpredictability, which have differing degrees of impact
     across countries.`.replace(/\s*\n\s*/g, ' '),
    proposal:
    `Global warming has increased the frequency and severity of natural disasters such as floods, storms, and earthquakes. This project aims to analyze how changes in climate variables—temperature, humidity, wind speed, CO₂ emissions, and sea level—are linked to these disasters and their economic impact over the years.​

     In this project we Demonstrate:​
        Trends in Climate Variables, Disaster Occurrence Patterns, Economic Impact Analysis, Correlation Insights, Country-Level Insights, Interactive Visual Dashboards​`,
    images: [
        DV_Image1,DV_Image2,DV_Image3,DV_Image4,DV_Image5,DV_Image6
    ],
    githubLink: "https://github.com/DpkReach/Climate_Disaster_Visualization",
  }
];

function ProjectDetail() {
  const { projectId } = useParams(); // Get the projectId from the URL
  const project = projects.find(p => p.id === projectId);

  const [isOpen, setIsOpen] = useState(false); // For controlling the Lightbox visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // To track the current image index

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail-container">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/*}<p>
        <strong>Proposal:</strong> {project.proposal} */}
        <p style={{ whiteSpace: 'pre-line' }}>{project.proposal}</p>

      {/*}<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub <FaGithub size={24} />
      </a> */}
      <a className="my_name_1" href={project.githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub <FaGithub size={24} />
      </a>

    <div className="image-gallery"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
      }}
    >
      {project.images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Visualization ${index + 1}`}
          style={{
            width: '100%',
            maxWidth: '200px',
            height: 'auto',
            objectFit: 'cover',
            cursor: 'pointer',
            borderRadius: '8px',
          }}
          onClick={() => {
            setCurrentImageIndex(index);
            setIsOpen(true);
          }}
        />
      ))}
    </div>
    {isOpen && (
            <Lightbox
              open={isOpen}
              close={() => setIsOpen(false)}
              index={currentImageIndex}
              slides={project.images.map((src) => ({ src }))}
            />
          )}
    </div>

  );
}

export default ProjectDetail;

