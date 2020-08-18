import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day3 = () => {
  return (
    <>
      <Head><title>JLI | Day 3</title></Head>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 3 - Tuesday 18th August
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
          event={"Lecture by Martin Cox"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Lecture by Dr Jamie Whyte"}
          location={"Caplan Lecture Theatre"}
        />

        <TimetableBlock
          time={"15:15 - 16:30"}
          event={"Break"}
          location={""}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Seminar with Robin Koerner"}
          location={"Friedman Room"}
        />

        <TimetableBlock
          time={"17:30 - 18:15"}
          event={"Seminar with Martin Cox"}
          location={"Ryan Room"}
        />

        <TimetableBlock
          time={"19:00 - 20:00"}
          event={"DINNER"}
          location={"RAU Dining Room"}
        />

        <TimetableBlock
          time={"20:00 - 20:45"}
          event={"Panel on Tutorial Essays with Martin Cox, Robin Koerner and Dr Jamie Whyte"}
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

Day3.page = 'day3';
Day3.group = 'H';

export default Day3;
