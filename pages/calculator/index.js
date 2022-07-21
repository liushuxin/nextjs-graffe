import styles from "../../styles/calc.module.css";
import { useState } from "react";
export default function Calcultor() {
  const [day1A, setDay1A] = useState(2293.17);
  const [day2A, setDay2A] = useState(2309.84);
  const [day1, setDay1] = useState(14.41);
  const [day2, setDay2] = useState(0);
  const onClick = () => {
    const gapA = day2A - day1A;
    const percentA = (gapA / day1A) * 100;
    const allPercent = percentA + 20;
    const value = ((100 + allPercent) / 100) * day1;

    setDay2(value);
  };

  const onBlur = () => {
    onClick();
  };
  return (
    <div className={styles.wrapper}>
      计算器
      <div className={styles.calcWrapper}>
        <div className={styles.calcContent}>
          <div className={styles.divItem} style={{ height: "20px" }}></div>
          <div className={styles.divItem}>初始值</div>
          <div className={styles.divItem}>结束值</div>
        </div>
        <div className={styles.calcContent}>
          <div className={styles.divItem}>SZAZ</div>
          <div className={styles.divItem}>
            <input
              placeholder="第一天"
              value={day1A}
              onChange={(e) => setDay1A(e.target.value)}
              onBlur={onBlur}
            />
          </div>
          <div className={styles.divItem}>
            <input
              placeholder="第二天"
              value={day2A}
              onBlur={onBlur}
              onChange={(e) => setDay2A(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.calcContent}>
          <div className={styles.divItem}>YG</div>
          <div className={styles.divItem}>
            <input
              placeholder="第一天"
              value={day1}
              onBlur={onBlur}
              onChange={(e) => setDay1(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <button onClick={onClick}>Calculator</button>
      </div>
      <div>
        TP Price:
        <span style={{ fontSize: "25px", color: "red" }}>{day2}</span>
      </div>
    </div>
  );
}
