"use client";

import React from "react";
import { FaRuler, FaBed, FaShower } from "react-icons/fa";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

import {
  Card,
  Box,
  CardBody
} from "@chakra-ui/react";
import "@splidejs/react-splide/css";
import Image from "next/image";
import HomeStyle from "../../styles/General.module.scss";

const PartnerCard = ({ partner }) => {
  return (
    <div className={HomeStyle.partnerCard}>
      <Box>
      <Card key={partner.id}>
        <CardBody>
          <Image
            src={partner.name}
            height={150}
            width={200}
            alt={partner.thumbnail}
          />
            
        </CardBody>
      </Card>
      </Box>
    </div>
  );
};

export default PartnerCard;
