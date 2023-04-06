import Logo from "@/assets/Logo.svg";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-12">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Are you tired of the same old boring workout routine? Do you crave a
            physical and mental challenge that will leave you feeling energized
            and centered?
            <br /> Look no further than our Yoga Classes!
            <br />
            Our classes are designed for all levels, from beginners to advanced
            yogis.
          </p>
          <p>© Mudra All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Social Links</h4>
          <div className="my-5 flex gap-2">
            <BsLinkedin />
            <a href="https://www.linkedin.com/in/harshit-tiwari-183a1919a/" target="_blank">
              <h3>LinkedIn</h3>
            </a>
          </div>
          <div className="my-5 flex gap-2">
            <BsGithub />
            <a href="https://github.com/Justin-21" target="_blank">
              <h3>Github</h3>
            </a>
          </div>
          <div className="my-5 flex gap-2">
            <BsTwitter />
            <a href="https://twitter.com/thestylingtrack" target="_blank">
              <h3>Twitter</h3>
            </a>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Gorakhpur Uttar Pradesh</p>
          <p>+916387889975</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// BsLinkedin
// BsGithub
// BsTwitter
