import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day3 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 3 - Tuesday 18th August
        </div>

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Group B"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Group D"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"17:30 - 18:15"}
          event={"Group F"}
          location={"Davies Room"}
        />

      </div>
    </>
  )
}

Day3.page = 'day3';
Day3.group = 'joe';

export default Day3;
