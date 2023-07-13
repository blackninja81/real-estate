"use client";

import React from "react";
import { FaRuler, FaBed, FaShower } from "react-icons/fa";
import cimage from "../../../public/Assets/landing.jpg";
import {
  Card,
  Center,
  CardBody,
  Divider,
  CardFooter,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import "@splidejs/react-splide/css";
import Image from "next/image";
import HomeStyle from "@/styles/Home.module.scss";

const PropertyCard = ({ property }) => {
  return (
    <div className={HomeStyle.propertyCard}>
      <Card>
        <CardBody>
          <Image
            src={cimage}
            height={150}
            width={250}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
            <h3>{property.name}</h3>
            
            <div className={HomeStyle.price}>
                <p>Ksh {property.price}</p>
              </div>
              <div className={HomeStyle.price}>
                <p>{property.location}, Kenya</p>
              </div>
            
        </CardBody>
        <Divider />
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
    </div>
  );
};

export default PropertyCard;
