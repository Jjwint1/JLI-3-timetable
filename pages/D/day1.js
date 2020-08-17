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
          time={"15:00 - 17:00"}
          event={"Students arrive"}
          location={"RAU"}
        />

        <TimetableBlock
          time={"17:30 - 18:15"}
          event={"Lecture by Robin Koerner"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"18:30 - 19:45"}
          event={"DINNER"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"19:45 - 20:30"}
          event={"Maths Placement Test"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"20:30 - 21:15"}
          event={"Lecture by Dr Jamie Whyte"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"00:00"}
          event={"Lights Out"}
          location={""}
        />
      </div>
    </>
  )
}

Day1.page = 'day1';
Day1.group = 'D';

export default Day1;
