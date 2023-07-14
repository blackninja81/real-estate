"use client";

import React from "react";
import {
  Card,
  ButtonGroup,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { BsHouseDoor } from 'react-icons/bs'
import buy from '../../../public/Assets/home.gif'
import rent from '../../../public/Assets/coin.gif'
import sell from '../../../public/Assets/sale.gif'
import HomeStyle from "@/styles/Home.module.scss";
import Image from "next/image";

const ListWithUs = () => {
  return (
    <div className={HomeStyle.listwithus}>
      <Card className={HomeStyle.text}>
        <CardBody>
            <Image src={buy} height={150} width={150} alt="image alt"/>
        <h2>Buy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            reiciendis voluptates eveniet perspiciatis necessitatibus quod
            minus, molestiae animi aut, voluptas ipsum. Magni fugiat deleniti
            aliquam.
          </p>
        </CardBody>
        <Button className={HomeStyle.button}>Learn More</Button>
      </Card>
      <Card className={HomeStyle.text}>
        <CardBody>
        <Image src={rent} height={150} width={150} alt="image alt"/>
            <h2>Rent</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            reiciendis voluptates eveniet perspiciatis necessitatibus quod
            minus, molestiae animi aut, voluptas ipsum. Magni fugiat deleniti
            aliquam.
          </p>
        </CardBody>
        <Button className={HomeStyle.button}>Learn More</Button>

      </Card>
      <Card className={HomeStyle.text}>
        <CardBody>
        <Image src={sell} height={150} width={150} alt='property-name'/>
        <h2>Sell</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            reiciendis voluptates eveniet perspiciatis necessitatibus quod
            minus, molestiae animi aut, voluptas ipsum. Magni fugiat deleniti
            aliquam.
          </p>
        </CardBody>
        <Button className={HomeStyle.button}>Learn More</Button>

      </Card>
    </div>
  );
};

export default ListWithUs;
