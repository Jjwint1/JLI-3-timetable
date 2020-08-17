import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day3 = () => {
  return (
    <>
      <Head><title>JLI | Day 3</title></Head>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 3 - Tuesday 18th August
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

Day3.page = 'day3';
Day3.group = 'G';

export default Day3;
