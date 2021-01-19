import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>My Recent Projects</h1>
          <div className='pricing__container'>
            <div class="works__img">
              <img src="https://i.imgur.com/T6WHKg9.png" width="400" height="400" />
              <div class="works__data">

                {/* <span class='works__title'>LafLefNi</span> */}
                <a href="https://github.com/imadaqel/GreenField5" target="_blank" postion><GitHubIcon /> </a>
                <a href="https://github.com/imadaqel/GreenField5" target="_blank" postion><OpenInBrowserIcon /> </a>

              </div>
            </div>

            <div class="works__img">
              <img src="https://i.imgur.com/Eqbuf6b.png" width="400" height="400" />
              <div class="works__data">

                {/* <span class='works__title'>LafLefNi</span> */}
                <a href="https://github.com/imadaqel/GreenField5" target="_blank" postion><GitHubIcon /> </a>
                <a href="https://github.com/imadaqel/GreenField5" target="_blank" postion><OpenInBrowserIcon /> </a>

              </div>
            </div>
            <div class="works__img">
              <img src="https://res.cloudinary.com/imad2514/image/upload/v1611085706/Screenshot_303_rpoxp1.png" width="400" height="400" />
              <div class="works__data">

                {/* <span class='works__title'>LafLefNi</span> */}
                <a href="https://github.com/imadaqel/GreenField5" target="_blank" postion><GitHubIcon /> </a>
                <a href="https://github.com/imadaqel/GreenField5" target="_blank" postion><OpenInBrowserIcon /> </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
