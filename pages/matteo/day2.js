import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day2 = () => {
  return (
    <>
      <div className={styles.timetable}>

        <div className={styles.date}>
          Day 2 - Monday 17th August
        </div>

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Group A"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Group C"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"17:30 - 18:15"}
          event={"Group E"}
          location={"Hayek Room"}
        />

      </div>
    </>
  )
}

Day2.page = 'day2';
Day2.group = 'matteo';

export default Day2;
