type Social = {
  label: string;
  link: string;
};

type Presentation = {
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  
  title: "Hey, I'm Ben Demaj👋",
  description:
    "I am an *austrian* developer interested in Hardware and Software Engineering. Currently pursuing a education in *Biomedical Engineering*. Outside of work I like to play guitar to write short blogposts and working out in the gym.   ",
  socials: [
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/ben-demaj-0020b3238",
    },
    {
      label: "Github",
      link: "https://github.com/Bendemaj",
    },
    {
      label: "Contact",
      link: "mailto:bendemaj.ad@gmail.com",
    },
  
  ],
};

export default presentation;
