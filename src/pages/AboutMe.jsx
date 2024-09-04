import "/src/pages/aboutme.css";
const AboutMe = () => {
  return (
    <div>
      <div className="about-me">
        <div className="headshot">
          <img src="public/imgs/headshot.jpg"></img>
        </div>
        <h3>Steven Busenbarrick</h3>
        <h4>About me</h4>
        <p>
          I am an aspiring web developer with a bachelors degree in biomedical
          sciences. For the past year and a half I have been following the Odin
          Project curriculum. I&apos;ve learned some pretty cool things and this
          site&apos;s purpose is to share them with you.
        </p>
        <div className="about-links">
          <a href="https://github.com/sbusenba">
            <img src="public/imgs/github-mark.svg" />
          </a>
          <a href="https://www.linkedin.com/in/steven-busenbarrick-71058a80/">
            <img src="public/imgs/linkedin-svgrepo-com.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
