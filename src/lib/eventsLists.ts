// Provide list of events for only last two years
// After changing here like for year yr2024 also update it in event components

type Event = {
  name: string;
  description: string;
  thumbnail: string;
  album: string;
};

type EventsByYear = {
  [year: string]: Event[];
};

const EventsList: EventsByYear = {
  yr2023: [
    {
      name: "ORIENTATION'24",
      description: "Darpan Orientation of the year 2024-25",
      thumbnail: `/events/phoenix.jpg`,
      album: "",
    },
    {
      name: "ANUGOONJ'24",
      description: "The Annual Cultural Festival of GGSIPU, Delhi. Delhi's Largest Social and Cultural College Festival. 8th - 10th February 2024.",
      thumbnail: `/events/anu2.jpg`,
      album: "",
    },
    {
      name: "ELYSIAN'24",
      description: "Annual Photography competiton held all over the state",
      thumbnail: `/events/2023/creatrix.jpg`,
      album: "",
    },
    {
      name: "MIHIMA'23",
      description: "Sparkling memories from a luminous Diwali Celebration,Darpan presents the cinematic hues of MIHIMA'23,the diwali fest of GGSIPU organized by USAP.",
      thumbnail: "/events/mihima.jpg",
      album: "",
    },
    {
      name: "ORIENTATION'23",
      description: "The Annual Cultural Festival of GGSIPU, Delhi. Delhi's Largest Social and Cultural College Festival. 3rd - 5th March 2023.",
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
    {
      name: "ELYSINA'23",
      description: "Annual Tech Fest of JEC covered by fotokraft year 2022",
      thumbnail: `/events/2022/phoenix.jpg`,
      album: "",
    },
  ],
  yr2022: [
    
  ],
};

export default EventsList;
