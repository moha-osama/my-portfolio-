import React from "react";

const GitHubIcon = () => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
  </svg>
);

const ResumeIcon = () => (
  <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
    <path d="M5 4a.5.5 0 000 1h6a.5.5 0 000-1H5zm-.5 2.5A.5.5 0 015 6h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM5 8a.5.5 0 000 1h6a.5.5 0 000-1H5zm0 2a.5.5 0 000 1h3a.5.5 0 000-1H5z" />
    <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm10-1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
  </svg>
);

const links = [
  {
    label: "github",
    icon: <GitHubIcon />,
    link: "https://github.com/moha-osama",
  },
  {
    label: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/mohamed-osama-4a38a0206/",
  },
  {
    label: "resume",
    icon: <ResumeIcon />,
    link: "https://drive.google.com/file/d/1pQoI4FPvK6Jr5SKrKt1fl2JP50Df8glX/view?usp=drive_link",
  },
  {
    label: "mail",
    icon: <MailIcon />,
    link: "mailto:zmuhamedosama@gmail.com",
  },
];

const Links = () => {
  return (
    <div className="pt-8 md:pt-12 md:pb-8 w-1/2">
      <ul className="flex items-center justify-between">
        {links.map((item) => (
          <li key={item.label}>
            <a href={item.link} className="hover:text-[#dea30d] duration-300">
              <div className="text-3xl">{item.icon}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
