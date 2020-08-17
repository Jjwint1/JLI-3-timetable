import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day8 = () => {
  return (
    <>
      <Head><title>JLI | Day 8</title></Head>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 8 - Sunday 23rd August
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

Day8.page = 'day8';
Day8.group = 'E';

export default Day8;
