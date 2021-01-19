import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
// import { Button } from './Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  // topLine: 'Exclusive Access',
  headline: 'Imad Aqel',
  description:
    'Passionate Front-end Developer',
  buttonLabel: 'My Resume',
  imgStart: '',
  img: 'https://res.cloudinary.com/imad2514/image/upload/v1610996201/hard_smile_kxknbl.jpg',
  alt: 'Credit Card'
};

const handleEmailMe = () => {
  window.open("imadaqel97@gmail.com")
}
export const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,

  // topLine: '100% SECURE',
  headline: 'My Skills',
  description:
    <div className="skills__data1">
      <img src="https://res.cloudinary.com/imad2514/image/upload/v1611011723/html-5_uwmv5x.svg" alt="github" width="100" height="100" className="sidebar__icon mr-3" />
      <img src="https://res.cloudinary.com/imad2514/image/upload/v1611011724/react_debwlj.svg" alt="github" width="100" height="100" className="sidebar__icon mr-3" />
      <img src="https://res.cloudinary.com/imad2514/image/upload/v1611011723/nodejs_xmfr0e.svg" alt="github" width="100" height="100" className="sidebar__icon mr-3" />
      <img src="https://res.cloudinary.com/imad2514/image/upload/v1611011723/javascript_zful2y.svg" alt="github" width="100" height="100" className="sidebar__icon mr-3" />
      <img src="https://res.cloudinary.com/imad2514/image/upload/v1611011722/python_x1hx6z.svg" alt="github" width="100" height="100" className="sidebar__icon mr-3" />
      <img src="https://res.cloudinary.com/imad2514/image/upload/v1611011722/css-3_kquswu.svg" alt="github" width="100" height="100" className="sidebar__icon mr-3" />
      <img src="https://res.cloudinary.com/imad2514/image/upload/v1611083817/github_2_cnkcir.svg" alt="github" width="100" height="100" className="sidebar__icon mr-3" />
      <img src="https://res.cloudinary.com/imad2514/image/upload/v1611011724/git-logo_uadxgb.svg" alt="github" width="100" height="100" className="sidebar__icon mr-3" />

      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>,

  buttonLabel: 'Learn More',
  imgStart: '',
  img: 'https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png',
  alt: 'Vault'
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  // topLine: 'EASY SETUP',
  headline: 'Front-end develpoer with very good experiance in React,enthusiastic, knowledge-hungry learner',
  description:
    " Front-end develpoer with very good experiance in React,enthusiastic, knowledge-hungry learner and eager to meet challenges and quickly assimilate new concepts.Strong communication, relationship skills, and autonomous learner.",

  imgStart: 'start',
  img: 'https://media.bitdegree.org/storage/media/images/2018/05/how-to-become-blockchain-developer.jpg',
  alt: 'Vault'
};
// Front - end develpoer with very good experiance in React, enthusiastic, knowledge - hungry learner, eager to meet challenges and quickly
// assimilate new concepts.Strong communication, relationship skills, and autonomous learner.
// </h3 >
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
      <h1 className="sidebar__item sidebar__email" onClick={handleEmailMe}> <EmailIcon />imadaqel97@gmail.com </h1>

    </div>,

  imgStart: 'start',
  img: 'https://storiesofastuntman.co.uk/wp-content/uploads/2019/11/emotionheader3746068.jpg',
  alt: 'Vault'
};
