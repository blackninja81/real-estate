"use client";

import React from "react";
import { FaRuler, FaBed, FaShower } from "react-icons/fa";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

import {
  Card,
  Box,
  CardBody,
  CardFooter
} from "@chakra-ui/react";
import "@splidejs/react-splide/css";
import Image from "next/image";
import HomeStyle from "@/styles/Home.module.scss";

const PropertyCard = ({ property }) => {
  return (
    <div className={HomeStyle.propertyCard}>
      <Box>
      <Card key={property.id}>
        <CardBody>
          <Skeleton height='200px' isLoaded>
          <Image
            src={property.thumbnail}
            height={150}
            width={250}
            alt={property.name}
          />
          </Skeleton>
            <h3>{property.name}</h3>
            
            <div className={HomeStyle.price}>
                <p>Ksh {property.price}</p>
              </div>
              <div className={HomeStyle.price}>
                <p>{property.location}, Kenya</p>
              </div>
            
        </CardBody>
        <CardFooter className={HomeStyle.card_footer}>
          <div className={HomeStyle.bed}>
            <FaBed />
            <p>{property.bedrooms} Bedrooms</p>
          </div>
          <div className={HomeStyle.bed}>
            <FaShower />
            <p>{property.bathrooms} Bathrooms</p>
          </div>
          <div className={HomeStyle.bed}>
            <FaRuler />
            <p>Size {property.size}</p>
          </div>
          <div className={HomeStyle.bed}>
            <FaShower />
            <p>Bathrooms {property.bathrooms}</p>
          </div>
        </CardFooter>
      </Card>
      </Box>
    </div>
  );
};

export default PropertyCard;
