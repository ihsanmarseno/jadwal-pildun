/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from 'framer-motion'

export default function SectionHeader() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="w-full mt-[60px]"
    >
      <img src="img/header1.png" alt="header" className="mx-auto shadow-lg" />
    </motion.div>
  );
}
