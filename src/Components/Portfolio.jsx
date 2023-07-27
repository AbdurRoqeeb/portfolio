/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "TMDb Movies Data Analysis",
    description:
      "In this project, I performed an exploratory analysis on TMDb movies dataset. The dataset contains information about 10,000 movies obtaned from The Movie Database (TMDb).",
    url: "https://github.com/AbdurRoqeeb/TMDb-Movies-Data-Analysis",
  },
  {
    title: "Analysis of Airplane Crashes Between 1908 and 2009",
    description:
      "In this project, I did the analysis and visualization of airplane crashes data in Microsoft Power BI.",
    url: "https://github.com/AbdurRoqeeb/Analysis-of-Airplane-Crashes-from-1908-to-2009",
  },
  {
    title: "COVID-19 data visualization in Excel",
    description:
      "Visualization of COVID 19 data in Microsoft Excel.",
    url: "https://github.com/AbdurRoqeeb/COVID19-Data",
  },
  {
    title: "2021/2022 EPL goals analysis",
    description:
      "Analysis and Visualization of Goals scored in the 2021/2022 season of the English Premier League in Power BI.",
    url: "https://github.com/AbdurRoqeeb/2021-2022-Premier-League-Goal-Analysis",
  },
  {
    title: "Data Exploration in Postgresql",
    description:
      "In this project, I carried out an exploratory analysis on International Breweries data in Postgresql.",
    url: "https://github.com/AbdurRoqeeb/Utiva-Data-Science-Fellowship-SQL-Capstone-Project",
  },
  {
    title: "Airlines Delay Capstone Project",
    description:
      "Airlines Delay Visualization in Microsoft Power BI.",
    url: "https://github.com/AbdurRoqeeb/Airlines-Delay-Capstone-Project",
  },
  {
    title: "Twitter Analysis on #NG30DaysOfLearning",
    description:
      "Analysis and visualization of #NG30DaysOfLearning data in Power BI.",
    url: "https://github.com/AbdurRoqeeb/Twitter-Analysis-of-NG30DaysOfLearning",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
