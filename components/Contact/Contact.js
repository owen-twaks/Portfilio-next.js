import styles from "./Contact.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

const socials = [
  {
    image: "/contact/facebook.svg",
    url: "https://www.facebook.com/matsalani",
    name: "Facebook",
  },
  {
    image: "/contact/twitter.svg",
    url: "https://twitter.com/matsalani",
    name: "twitter",
  },
  {
    image: "/contact/github-sign.svg",
    url: "https://github.com/owen-twaks",
    name: "github",
  },
  {
    image: "/contact/linkedin.svg",
    url: "https://www.linkedin.com/in/owen-matsalani-543b4077/",
    name: "linkedin",
  },
];

export default function Contact() {
  return (
    <div className={styles.container}>
      <SectionTitle title="contact" />
      <div className={styles.socialcontainer} data-aos="fade-up">
        {socials.map((social, index) => (
          <div className={styles.contact} key={index}>
            <a
              href={social.url}
              className={styles.contactbtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.image}
                alt={social.name}
                width={30}
                height={30}
                data-aos="zoom-in"
                data-aos-delay="500"
              />
              <span data-aos="zoom-out" data-aos-delay="550">
                Catch on {social.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
