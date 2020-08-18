import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day7 = () => {
  return (
    <>
      <Head><title>JLI | Day 7</title></Head>
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
          event={"History Precept with Danish Kahn"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Seminar with Dr Jamie Whyte"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"12:30 - 13:15"}
          event={"LUNCH"}
          location={"RAU Dining Hall"}
        />

        <TimetableBlock
          time={"13:30 - 14:15"}
          event={"History Precept with Prateek Joshy"}
          location={"Ryan Room"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Class with Martin Cox"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"15:30 - 18:15"}
          event={"Mock Interviews and Admissions Consultations with Prateek Joshy and Danish Kahn"}
          location={"Ryan Room / Locke Room"}
        />

        <TimetableBlock
          time={"19:00 - 20:00"}
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
Day7.group = 'H';

export default Day7;
