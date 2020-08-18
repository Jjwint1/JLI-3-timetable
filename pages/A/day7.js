import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day7 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 7 - Saturday 22nd August
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
          event={"Precept with Joe and Matteo"}
          location={"Davies Room / Hayek Room"}
        />

        <TimetableBlock
          time={"12:30 - 13:15"}
          event={"LUNCH"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"13:30 - 14:15"}
          event={"Seminar with Dr Jamie Whyte"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Precept with Robin Koerner"}
          location={"Friedman Room"}
        />

        <TimetableBlock
          time={"15:30 - 16:15"}
          event={"Admissions Briefing with Dr Jamie Whyte & Martin Cox"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"17:30 - 18:15"}
          event={"Class with Martin Cox"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"18:30 - 20:00"}
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

Day7.page = 'day7';
Day7.group = 'A';

export default Day7;
