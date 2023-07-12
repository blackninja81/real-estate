"use client";

import React from "react";
import { FaRuler, FaBed, FaShower } from 'react-icons/fa'
import cimage from "../../../public/Assets/landing.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import '@splidejs/react-splide/css';
import Image from "next/image";
import HomeStyle from "@/styles/Home.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const PropertyCard = ({ property }) => {
  return (
    <div className={HomeStyle.propertyCard}>
      
          <Card>
            <CardBody>
              <Image
                src={cimage}
                height={100}
                width={250}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{property.name}</Heading>
                <Text>
                  {property.description}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Ksh {property.price}<br/>
                  <div className={HomeStyle.bed}>
                <p>Size: {property.size}</p>
                </div>
                  
                </Text>
              </Stack>
            </CardBody>
            <Divider/>
            <CardFooter className={HomeStyle.card_footer}>
        
              <div className={HomeStyle.bed}>
                <FaBed/><p>Bedrooms {property.bedrooms}</p>
                </div>
                <div className={HomeStyle.bed}>
                <FaShower/><p>Bathrooms {property.bathrooms}</p>
                </div>
            </CardFooter>
          </Card>
        
    </div>
  );
};

export default PropertyCard;
