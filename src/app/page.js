import Image from "next/image";
import HomeStyle from "../styles/Home.module.scss";
import Layout from "@/components/HomePage/Layout";
import Landing from "@/components/HomePage/Landing";
import TopMonth from "@/components/HomePage/TopMonth";
import Sell from "@/components/HomePage/Sell";
import Rent from "@/components/HomePage/Rent";

export const metadata = {
  title: "JIJI rentals",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className={HomeStyle.mainHome}>
      <Layout>
        <Landing />
        <TopMonth />
        <Rent />
        <Sell />
      </Layout>
    </main>
  );
}
