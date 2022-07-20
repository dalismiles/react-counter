import socialIcons from "../../assets/socialIcons";
import "./index.css";

const Footer = () => {
  return (
    <div className="Footer">
      <h5 className="Footer__Title">
        If you-re curious and want to know more about us, please visit our
        pages:
      </h5>
      {socialIcons.map((logo) => (
        <img
          className="Footer__socialIcons"
          src={logo.url}
          alt="social network icon"
        />
      ))}
    </div>
  );
};

export default Footer;
