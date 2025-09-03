import React from "react";

const SocialMedia = () => {
  const socialMedia = [
    { name: "github", link: "https://github.com/momen5406" },
    { name: "linkedin", link: "https://www.linkedin.com/in/momen5406/" },
    { name: "codepen", link: "https://codepen.io/momen5406" },
  ];

  return (
    <ul className="flex items-center gap-2 text-2xl">
      {socialMedia.map((media, index) => (
        <li key={index}>
          <a href={media.link} className="hover:text-white">
            <i className={`fa-brands fa-${media.name}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
