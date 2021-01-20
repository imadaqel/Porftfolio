import GitHubIcon from '@material-ui/icons/GitHub';
// import { Button } from './Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
const handleEmailMe = () => {
  window.open("imadaqel97@gmail.com")
}

export const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  // topLine: 'DATA ANALYTICS',
  headline: 'Contact Me',
  description:
    <div className="forLinks">

      <h1 href="https://github.com/imadaqel" target="_blank"><GitHubIcon />  /imadaqel </h1>
      <br></br>
      <h1 href="#" target="_blank"> <LinkedInIcon /> /imadaqel </h1>
      <br></br>
      <h1 href="https://www.facebook.com/emadaqel" target="_blank"> <FacebookIcon />  /imadaqel</h1>
      <br></br>
      {/* <h1 className="sidebar__item sidebar__email" onClick={handleEmailMe}> <EmailIcon />imadaqel97@gmail.com </h1> */}
      <h1 font-wigth="35"> <img src="https://res.cloudinary.com/imad2514/image/upload/v1611140212/gmail_1_ddyrsx.svg" alt="github" width="40" height="40" className="sidebar__icon mr-3" />imadaqel97@</h1>

    </div>,

  imgStart: 'start',
  img: 'https://storiesofastuntman.co.uk/wp-content/uploads/2019/11/emotionheader3746068.jpg',
  alt: 'Vault'
};

export const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '100% SECURE',
  headline: 'Stay protected 24/7 anywhere anytime',
  description:
    'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
  buttonLabel: 'Learn More',
  imgStart: '',
  img: 'images/svg-5.svg',
  alt: 'Vault'
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'EASY SETUP',
  headline: 'Super fast and simple onboarding process',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: 'start',
  img: 'images/svg-7.svg',
  alt: 'Vault'
};

// export const homeObjFour = {
//   lightBg: false,
//   lightText: true,
//   lightTextDesc: true,
//   topLine: 'DATA ANALYTICS',
//   headline: 'Every transaction is stored on our secure cloud database',
//   description:
//     'Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.',
//   buttonLabel: 'Sign Up Now',
//   imgStart: 'start',
//   img: 'images/svg-8.svg',
//   alt: 'Vault'
// };
