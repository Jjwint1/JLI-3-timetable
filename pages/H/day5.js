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
          event={"Lecture by Dr Jamie Whyte"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"10:30 - 11:15"}
          event={"Seminar with Douglas Carswell"}
          location={"Friedman Room"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Mock Interviews with Dr Rob McMahon, Dr Jamie Whyte & Robin Koerner"}
          location={"Hobbes Room / Ryan Room"}
        />

        <TimetableBlock
          time={"12:30 - 13:15"}
          event={"LUNCH"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"13:30 - 14:15"}
          event={"Seminar with Martin Cox"}
          location={"Ryan Room"}
        />

        <TimetableBlock
          time={"17:30 - 18:15"}
          event={"Lecture by Martin Cox"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"18:50 - 20:00"}
          event={"DINNER"}
          location={"RAU Dining Hall"}
        />
      </div>
    </>
  )
}

Day5.page = 'day5';
Day5.group = 'H';

export default Day5;
