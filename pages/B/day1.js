import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day1 = () => {
  return (
    <>
      <Head><title>JLI | Day 1</title></Head>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 1 - Sunday 16th August
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

        <TimetableBlock
          time={"10:30 - 11:15"}
          event={"Seminar with Martin Cox"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Lecture by Jamie Whyte"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"12:30 - 13:30"}
          event={"Lunch"}
          location={"RAU Dining Hall"}
        />
      </div>
    </>
  )
}

Day1.page = 'day1';
Day1.group = 'B';

export default Day1;
