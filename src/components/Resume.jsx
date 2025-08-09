export default function Resume({ info }) {
  const { firstName, lastName, phone, email, address, summary } = info;
  return (
    <div className="resume">
      <header>
        <div className="name">
          <h1>
            {firstName} {lastName}
          </h1>
          <h5>Mechanical Engineer</h5>
        </div>

        <div className="contact-info">
          <div className="div" id="div">
            <h5>Address</h5>
            <p>{address}</p>
          </div>
          <div className="div" id="div">
            <h5>Phone</h5>
            <p>{phone}</p>
          </div>
          <div className="div" id="div">
            <h5>Email</h5>
            <p class="email">{email}</p>
          </div>
        </div>
      </header>
      <main>
        <div className="summary">
          <h5>Summary</h5>
          <p>{summary}</p>
        </div>
        <div className="education">
          <h5>Education</h5>
          <p>Some stuff I will change later</p>
        </div>
        <div className="experience">
          <h5>Experience</h5>
          <p>Some stuff I will change later</p>
        </div>
        <div className="skills">
          <h5>Skills</h5>
          <p>Some stuff I will change later</p>
        </div>
        <div className="languages">
          <h5>Languages</h5>
          <p>Some stuff I will change later</p>
        </div>
      </main>
    </div>
  );
}
