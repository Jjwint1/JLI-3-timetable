import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day6 = () => {
  return (
    <>
      <Head><title>JLI | Day 6</title></Head>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 6 - Friday 21st August
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

Day6.page = 'day6';
Day6.group = 'C';

export default Day6;
