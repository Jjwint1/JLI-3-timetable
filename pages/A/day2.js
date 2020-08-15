import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day2 = () => {
  return (
    <>
      <Head><title>JLI | Day 2</title></Head>
      <div className={styles.timetable}>

        <div className={styles.date}>
          Day 2 - Monday 17th August
        </div>

        <TimetableBlock
          time={"8:30 - 9:30"}
          event={"Breakfast"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"9:30 - 10:15"}
          event={"Lecture by Jamie Whyte"}
          location={"Caplan Lecture Theatre"}
        />
      </div>
    </>
  )
}

Day2.page = 'day2';

export default Day2;
