import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day10 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 10 - Tuesday 25th August
        </div>

        <TimetableBlock
          time={"8:30 - 9:30"}
          event={"Breakfast"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"9:30 - 11:15"}
          event={"Mock Admissions Test"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Panel with Martin Cox, Robin Koerner and Jamie Whyte"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"12:30 - 13:30"}
          event={"LUNCH"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"13:30 - 14:45"}
          event={"Panel with Martin Cox, Robin Koerner and Jamie Whyte"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"17:00 - 18:30"}
          event={"Concert & Awards Ceremony"}
          location={"Chapel"}
        />

        <TimetableBlock
          time={"18:45 - 20:15"}
          event={"Farewell Dinner"}
          location={"RAU Dining Hall"}
        />
      </div>
    </>
  )
}

Day10.page = 'day10';
Day10.group = 'F';

export default Day10;
