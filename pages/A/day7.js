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
      </div>
    </>
  )
}

Day7.page = 'day7';

export default Day7;
