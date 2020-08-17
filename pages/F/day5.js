import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day5 = () => {
  return (
    <>
      <Head><title>JLI | Day 5</title></Head>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 5 - Thursday 20th August
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

Day5.page = 'day5';
Day5.group = 'F';

export default Day5;
