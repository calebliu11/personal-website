import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Caleb Liu | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal site!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Caleb Liu.',
  subtitle: "I'm a budding software developer studying at WashU.",
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne:
    "I'm a junior at Washington University in St. Louis studying CS and operations " +
    'and supply chain management. Interested in learning more about all aspects of computer science, including blockchain, full stack development, and AI and machine learning.',
  paragraphTwo:
    "This summer, I'll be interning in San Mateo, CA at Roblox, while in the Fall of 2022 " +
    "I'm excited to complete a Software Engineering co-op at Block, formerly known as Square.",
  paragraphThree:
    'In my free time, you can find me playing tennis, watching Netflix, and studying chess openings.' +
    ' Challenge me at calebliu11 on chess.com or lichess.org!',
  resume:
    'https://docs.google.com/document/d/1qGyQpxf-VJMeOGYB7E2KMF7F3St1YC0g/edit?usp=sharing&ouid=113838882024246049946&rtpof=true&sd=true', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'poker.png',
    title: 'Virtual Poker',
    info: "Designed a fully-playable virtual poker game in Java, where a user can play against the computer in one-on-one no-limit Texas Hold'em on an interactive GUI.",
    info2:
      'The game utilizes graphics created with Swing, has full-fledged betting functionality, employs accurate probabilities, and uses intelligent rule-based decision-making for the computer.',
    url: 'https://github.com/calebliu11/project-virtualpoker/blob/master/README.md',
    repo: 'https://github.com/calebliu11/project-virtualpoker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email me',
  email: 'calebliu11@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/caleb-liu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/calebliu11',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
