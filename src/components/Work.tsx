import "./styles/Work.css";

import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    name: "Cybredge Pvt. Ltd.",
    category: "Website",
    tools: "HTML, CSS, JavaScript, React, Tailwind",
    image: "/images/cybredgewebsite.png",
  },
  {
    id: "02",
    name: "Portfolio",
    category: "Web App",
    tools: "Html, Css, React, Tailwind",
    image: "/images/Portfoliowebsite.png",
  },
  {
    id: "03",
    name: "E-commerce Store",
    category: "Frontend",
    tools: "React, Redux, CSS",
    image: "/src/assets/project3.png",
  },
  {
    id: "04",
    name: "Landing Page",
    category: "UI/UX",
    tools: "HTML, CSS, GSAP",
    image: "/src/assets/project4.png",
  },
  {
    id: "05",
    name: "Admin Dashboard",
    category: "Web App",
    tools: "React, Charts, API",
    image: "/src/assets/project5.png",
  },
  {
    id: "06",
    name: "Blog Platform",
    category: "Full Stack",
    tools: "React, Node, MongoDB",
    image: "/src/assets/project6.png",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName(
      "work-box"
    ) as HTMLCollectionOf<HTMLElement>;

    if (!box.length) return;

    const container = document.querySelector(
      ".work-container"
    ) as HTMLElement | null;

    if (!container) return;

    const parent = box[0].parentElement;
    if (!parent) return;

    const rectLeft = container.getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = parent.getBoundingClientRect().width;

    const padding =
      parseInt(window.getComputedStyle(box[0]).padding || "0") / 2;

    translateX =
      rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      id: "work",
    },
  }).to(".work-flex", {
    x: -translateX,
    duration: 40,
  });
}, []);


  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools & Features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
