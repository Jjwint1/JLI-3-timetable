import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day10 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 10 - Tuesday 25th August
        </div>

        <TimetableBlock
          time={"8:30 - 9:30"}
          event={"Breakfast"}
          location={"RAU Dining Hall"}
        />
      </div>
    </>
  )
}

Day10.page = 'day10';
Day10.group = 'matteo';

export default Day10;
