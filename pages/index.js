import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { TimetableBlock } from '../components/TimetableBlock/TimetableBlock'

export default function Home() {
  return (
    <>
      <Head><title>JLI Timetable</title></Head>
      <div className={styles.header}>
        <p className={styles.title}>John Locke Institute</p>
        <p className={styles.tagLine}>2020 Timetable</p>
      </div>

      <div className={styles.timetable}>

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
