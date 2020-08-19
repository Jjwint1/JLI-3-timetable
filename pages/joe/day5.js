import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day5 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 5 - Thursday 20th August
        </div>

        <TimetableBlock
          time={"10:30 - 11:15"}
          event={"Group F"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Group C"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"13:30 - 14:15"}
          event={"Group D"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Group B"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"15:30 - 16:15"}
          event={"Group F"}
          location={"Davies Room"}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Group A"}
          location={"Davies Room"}
        />
      </div>
    </>
  )
}

Day5.page = 'day5';
Day5.group = 'joe';

export default Day5;
