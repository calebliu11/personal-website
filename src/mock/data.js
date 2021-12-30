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
    url: 'https://github.com/calebliu11/virtual-poker/blob/main/README.md',
    repo: 'https://github.com/calebliu11/virtual-poker', // if no repo, the button will not show up
  },
];

export const experiencesData = [
  {
    id: nanoid(),
    img: 'amazon.jpeg',
    title: 'Amazon',
    url: 'https://www.amazon.jobs/en/job_categories/software-development',
    info: 'Wrote Python scripts to generate new and more robust confidence rules for Alexa Shopping.',
    info2:
      'Added logic in Java in the intent classification service to process and determine confidence for non-shoppable utterances.',
    info3:
      'Designed and wired a new remote step to render a soft-landing response to customers who ask Alexa to buy non-shoppable items, improving customer satisfaction metrics.',
  },

  {
    id: nanoid(),
    img: 'mirror.png',
    title: 'Stream Based Supercomputing Lab',
    url: 'https://sbs.wustl.edu/pubs/acmb18.pdf',
    info: 'Modified library routine in C++ to increase efficiency, reduce memory usage, and allow 100% more Arduinos to be used in parallel. ',
    info2:
      'Built 2x2 Arduino/mirror structure to model effective movement patterns and test libraries.',
    info3: 'Calculated effect of increased natural light on working efficiency.',
  },

  {
    id: nanoid(),
    img: 'cse.jpeg',
    title: 'CSE 240 Teaching Assistant',
    url: 'https://cse.wustl.edu/',
    info: 'Grade assignments and lead office hour sessions weekly for the Logic and Discrete Math course.',
    info2:
      'Reinforce learning objectives in discrete structures, proof techniques, and computational models',
  },
];

export const coursesData = [
  {
    id: nanoid(),
    title: 'Fall 2019',
    info: 'CSE 240: Logic and Discrete Math',
    info2: 'Math 233: Calculus III',
  },

  {
    id: nanoid(),
    title: 'Spring 2020',
    info: 'CSE 132: Introduction to Computer Engineering',
    info2: 'CSE 237S: Programming Tools and Techniques',
    info3: 'Math 309: Matrix Algebra',
  },

  {
    id: nanoid(),
    title: 'Fall 2020',
    info: 'CSE 204: Web Development',
    info2: 'CSE 247: Data Structures and Algorithms',
  },

  {
    id: nanoid(),
    title: 'Spring 2021',
    info: 'CSE 217: Introduction to Data Science',
    info2: 'CSE 332S: Object-Oriented Software Development Laboratory',
    info3: 'ESE 326: Probability and Statistics for Engineering',
  },

  {
    id: nanoid(),
    title: 'Fall 2021',
    info: 'CSE 330S: Rapid Prototype Development and Creative Programming',
    info2: 'CSE 412A: Introduction to Artificial Intelligence',
  },

  {
    id: nanoid(),
    title: 'Spring 2022',
    info: 'CSE 347: Analysis of Algorithms',
    info2: 'CSE 361S: Introduction to Systems Software',
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
      name: 'school',
      url: 'mailto:calebliu@wustl.edu',
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
