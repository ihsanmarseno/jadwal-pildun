"use client"

import moment from "moment";
import React from "react";
import Card from "../components/card";
import 'moment/locale/id'
import { motion, Variants } from "framer-motion";

interface Props {
  matches?: Match[];
  date: string;
}

const DateTitle = ({ date }: Props) => {
  moment.locale('id')
  const day = moment(date).format("dddd");
  const _date = moment(date).format("Do MMMM YYYY");

  return (
    <div className="text-[#182339]">
      <span className="text-3xl font-bold">{day}</span>
      <span className="text-2xl">, {_date}</span>
    </div>
  );
};

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

export default function SectionRow({ matches, date }: Props) {
  return (
    <motion.div
      className="card-container my-[40px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}>
      <DateTitle date={date} />
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[10px]" variants={cardVariants}>
        {matches?.map((match, index) => (
          <Card key={index} match={match} />
        ))}
      </motion.div>
    </motion.div>
  );
}
