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
          event={"History Precept with Prateek Joshy"}
          location={"Ryan Room"}
        />

        <TimetableBlock
          time={"10:30 - 11:15"}
          event={"Tutorials with Danish Kahn"}
          location={"Hobbes Room"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Seminar with Dr Jamie Whyte"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"13:30 - 14:15"}
          event={"History Precept with Danish Kahn"}
          location={"Ryan Room"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Tutorials with Prateek Joshy"}
          location={"Hobbes Room"}
        />

        <TimetableBlock
          time={"15:30 - 16:15"}
          event={"Seminar with Terence Kealy"}
          location={"Friedman Room"}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Tutorials with Prateek Joshy and Danish Kahn"}
          location={"Hobbes Room / Ryan Room"}
        />

        <TimetableBlock
          time={"19:00 - 20:00"}
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
Day8.group = 'G';

export default Day8;
