'use client'
import React from 'react'
import HomeStyle from '../../styles/Home.module.scss'
import { PropertyDetails } from '@/constants/Constants'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import PropertyCard from './Card'
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Rent = () => {
  return (
    <div className={HomeStyle.top_pick}>
          <Splide
          options={{
            rewind: true,
            gap: "1rem",
            pagination:'none',
            perPage: 4,
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
                  perPage: 2,
              },
            }

          }}
          extensions={{ AutoScroll }}
          >
          {PropertyDetails.map(property => (
          <SplideSlide key={property.id}>
            <PropertyCard key={property.id} property={property}/>
            </SplideSlide>
            ))}
      </Splide>
        
    </div>
  )
}

export default Rent