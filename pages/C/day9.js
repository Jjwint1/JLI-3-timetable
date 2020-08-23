import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day9 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 9 - Monday 24th August
        </div>

        <TimetableBlock
          time={"8:30 - 9:30"}
          event={"Breakfast"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"9:30 - 10:15"}
          event={"Lecture by Matteo Baccaglini"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"10:30 - 11:15"}
          event={"Seminar with Brooks Newmark"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Maths Test"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"12:30 - 13:30"}
          event={"LUNCH"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"13:30 - 15:15"}
          event={"TSA Training with Robin Koerner and Joe Winterburn"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"15:30 - 16:15"}
          event={"Seminar with Martin Cox"}
          location={"Ryan Room"}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Tutorials with Dr Jamie Whyte"}
          location={"Hobbes Room"}
        />

        <TimetableBlock
          time={"18:40 - 20:00"}
          event={"DINNER"}
          location={"RAU Dining Hall"}
        />
      </div>
    </>
  )
}

Day9.page = 'day9';
Day9.group = 'C';

export default Day9;
