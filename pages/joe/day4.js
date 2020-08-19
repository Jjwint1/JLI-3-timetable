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
          time={"10:30 - 11:15"}
          event={"Group F"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Group A"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Group B"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"15:30 - 16:15"}
          event={"Group E"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Group D"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Group C"}
          location={"Davies Room"}
        />
      </div>
    </>
  )
}

Day4.page = 'day4';
Day4.group = 'joe';

export default Day4;