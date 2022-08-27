import image1 from "../Images/icon01.png";
import image2 from "../Images/icon02.png";
import image3 from "../Images/icon03.png";

export const testimonialsData = [
  {
    image: (<img src={image1}/>),
    review:
      "What is your challenge? We'll craft a strategy that hits the sweet spot. Our channel unbiased approach will optimize your campaign across all touchpoints. We're not one-size-fits-all, we are daring enough to look where others won't.",
    name: 'STRATEGY',
    status : 'DIVE IN'
  },
  {
    image: (<img src={image2}/>),
    review: "Great Content Isn't A Luxury, It's A Necessity. We create memorable experiences. Our in-house production team create sticky, engaging content that stops thumbs scrolling and is hard to forget.",
    name: 'CONTENT',
    status: 'DIVE IN'
  },
  {
    image : (<img src={image3}/>),
    review:"Stop winking in the dark! We help you find and win the right audience and maximise your conversion rate. Let’s get your content infront of the right audience. Stay always on and amplified." ,
    name: 'DISTRIBUTION',
    status: "DIVE IN"
  }
];