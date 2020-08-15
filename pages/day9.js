import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { TimetableBlock } from '../components/timetableblock/TimetableBlock'

const Day9 = () => {
  return (
    <>
      <Head><title>JLI | Day 9</title></Head>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 9 - Monday 24th August
        </div>

        <TimetableBlock
          time={"8:30 - 9:30"}
          event={"Breakfast"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"9:30 - 10:15"}
          event={"Lecture by Martin Cox"}
          location={"Caplan Lecture Theatre"}
        />
      </div>
    </>
  )
}

Day9.page = 'day9';

export default Day9;
