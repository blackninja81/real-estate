'use client'

import React from 'react';
import "@splidejs/react-splide/css";
import PartnerCard from './PartnerCard';
import Style from '@/styles/General.module.scss';
import "@splidejs/splide/dist/css/splide.min.css";
import {Partners} from '../../constants/Constants';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


const PartnerSlider = () => {
  return (
    <div className={Style.partners}><h1>Meet Our Partners</h1>
    <Splide
         options={{
           rewind: true,
           gap: "1rem",
           type: 'loop',
           pagination:'none',
           perPage: 6,
           autoScroll: {
             pauseOnHover: false,
             pauseOnFocus: true,
             rewind: false,
             speed: 1
           },
           
           breakpoints: {
             1440:{
               perPage: 3,
             },
             640: {
                 perPage: 1,
             },
             900: {
                 perPage: 3,
             },
           }

         }}
         extensions={{ AutoScroll }}
         >
    {Partners.map(partner => (
          <SplideSlide key={partner.id}>
            <PartnerCard key={partner.id} partner={partner}/>
            </SplideSlide>
            ))}
            </Splide>
    </div>
  )
}

export default PartnerSlider