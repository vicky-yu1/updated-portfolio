import './styles/Resume.scss';

const Resume = () => {
  return (
      <div className="resume-section" id="resume">
          <h2>Resume</h2>
          <div className="text">Click <a href="https://drive.google.com/uc?export=download&id=1Z2vyzJEH7AWOqsau8ZNRCzqgKe95HDGm"> here</a> to download my resume!</div>
          <iframe src="https://drive.google.com/file/d/1Z2vyzJEH7AWOqsau8ZNRCzqgKe95HDGm/preview" width="640" height="480" allow="autoplay"></iframe>
      </div>
  );
};

export default Resume;
