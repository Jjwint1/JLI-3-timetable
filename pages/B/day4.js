import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day4 = () => {
  return (
    <>
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
          event={"Lecture by Douglas Carswell"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"10:30 - 11:15"}
          event={"TSA Training with Martin Cox and Robin Koerner"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"TSA Precept with Robin Koerner"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"12:30 - 13:15"}
          event={"LUNCH"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"13:30 - 14:15"}
          event={"Lecture by Dr McMahon: How to Ace the Admissions Interview"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Precept with Joe and Matteo"}
          location={"Davies Room / Hayek Room"}
        />

        <TimetableBlock
          time={"15:30 - 16:15"}
          event={"Seminar with Douglas Carswell"}
          location={"Friedman Room"}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Class with Afzal Amin"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"17:30 - 18:15"}
          event={"Mock Interviews with Dr Rob McMahon and Dr Jamie Whyte"}
          location={"Hobbes Room / Ryan Room"}
        />

        <TimetableBlock
          time={"18:30 - 20:00"}
          event={"DINNER"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"20:00 - 20:45"}
          event={"Lecture by Douglas Carswell"}
          location={"Caplan Lecture Theatre"}
        />
      </div>
    </>
  )
}

Day4.page = 'day4';
Day4.group = 'B';

export default Day4;
