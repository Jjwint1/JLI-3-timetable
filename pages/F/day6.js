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
          time={"9:45"}
          event={"Coach Departs from RAU"}
          location={"RAU Chapel"}
        />

        <TimetableBlock
          time={""}
          event={"Visit to Oxford"}
          location={""}
        />

        <TimetableBlock
          time={"17:00"}
          event={"Coach Departs from Oxford"}
          location={""}
        />

        <TimetableBlock
          time={"18:50"}
          event={"DINNER"}
          location={"RAU Dining Hall"}
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

Day6.page = 'day6';
Day6.group = 'F';

export default Day6;
