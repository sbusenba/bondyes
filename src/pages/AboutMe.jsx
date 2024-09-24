import "/src/pages/aboutme.css";
const AboutMe = () => {
  return (
    <div id="profile">
      <h4>About me</h4>
      <hr />
      <div className="about-me">
        <div className="bio">
          <div className="headshot">
            <img src="imgs/headshot.jpg"></img>
            <h3>Steven Busenbarrick</h3>
          </div>

          <p>
            I am an aspiring web developer with a bachelors degree in Biomedical
            Sciences from the University of South Florida. For the past year and
            a half I have been following the Odin Project curriculum, teaching
            myself web development, and working on my own passion projects. I
            have a son in Ridgefield School District, and believe funding
            education will not only help him, but all children in the district,
            and the community as a whole.
          </p>
        </div>
        <div className="about-links">
          <a href="https://github.com/sbusenba">
            <img src="imgs/github-mark.svg" />
          </a>
          <a href="https://www.linkedin.com/in/steven-busenbarrick-71058a80/">
            <img src="imgs/linkedin-svgrepo-com.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
