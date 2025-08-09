import contactDark from '../assets/contactDark.png';
import educationLight from '../assets/contactLight.png';
import educationDarkLight from '../assets/gradLight.png';
import educationDark from '../assets/gradDark.png';
import skillsDark from '../assets/ideaDark.png';
import skillsLight from '../assets/ideaLight.png';

export default function FormsTabs() {
  return (
    <div className="forms-tab">
      <TabContent icon={contactDark} label="General Info" />
      <TabContent icon={educationDark} label="Education" />
      <TabContent icon={skillsDark} label="Skills" />
    </div>
  );
}

function TabContent({ icon, label }) {
  return (
    <div className= "tab-wrapper">
      <img id={label} src={icon} key={label} />
      <label for={label}>{label}</label>
    </div>
  );
}
