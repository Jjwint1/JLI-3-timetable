import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day4 = () => {
  return (
    <>
      <Head><title>JLI | Day 4</title></Head>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 4 - Wednesday 19th August
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

Day4.page = 'day4';
Day4.group = 'A';

export default Day4;
