'use client'
import React from 'react'
import HomeStyle from '../../styles/Home.module.scss'
import { PropertyDetails } from '@/constants/Constants'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import PropertyCard from './Card'

const TopMonth = () => {
  return (
    <div className={HomeStyle.top_pick}>
      <h2>Top Picks Of The Month</h2>
          <Splide
          options={{
            rewind: true,
            gap: "1rem",
            perPage: 3,
            
            breakpoints: {
              640: {
                  perPage: 1,
              },
              900: {
                  perPage: 2,
              },
            }

          }}
          >
          {PropertyDetails.map(property => (
          <SplideSlide>
            <PropertyCard key={property.id} property={property}/>
            </SplideSlide>
            ))}
      </Splide>
        
    </div>
  )
}

export default TopMonth