import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day8 = () => {
  return (
    <>
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
          event={"Tutorials with Martin Cox, Robin Koerner and Jamie Whyte"}
          location={"Friedman Room, Locke Room, Hayek Room"}
        />

        <TimetableBlock
          time={"10:30 - 11:15"}
          event={"Seminar with Terence Kealy"}
          location={"Friedman Room"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Precept with Joe and Matteo"}
          location={"Davies Room / Hayek Room"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Seminar with Dr Jamie Whyte"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"15:30 - 16:15"}
          event={"Tutorials with Martin Cox, Robin Koerner and Jamie Whyte"}
          location={"Davies Room, Locke Room, Hayek Room"}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Tutorials with Robin Koerner"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"17:30 - 18:15"}
          event={"Tutorials with Robin Koerner"}
          location={"Hobbes Room"}
        />

        <TimetableBlock
          time={"18:40 - 20:00"}
          event={"DINNER"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"20:00 - 20:45"}
          event={"Lecture by Brooks Newmark"}
          location={"Caplan Lecture Theatre"}
        />
      </div>
    </>
  )
}

Day8.page = 'day8';
Day8.group = 'C';

export default Day8;
