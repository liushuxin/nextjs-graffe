import styles from "../../styles/calc.module.css";
import { useState } from "react";
export default function Calcultor() {
  const onClick = () => {
    const gapA = day2A - day1A;
    const percentA = (gapA / day1A) * 100;
    const allPercent = percentA + 20;
    const value = ((100 + allPercent) / 100) * day1;

    setDay2(value);
  };

  return <div className={styles.wrapper}>计算器</div>;
}
