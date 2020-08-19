import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day9 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 9 - Monday 24th August
        </div>

        <TimetableBlock
          time={"9:30 - 10:15"}
          event={"Lecture"}
          location={"Caplan Lecture Theatre"}
        />

      </div>
    </>
  )
}

Day9.page = 'day9';
Day9.group = 'matteo';

export default Day9;
