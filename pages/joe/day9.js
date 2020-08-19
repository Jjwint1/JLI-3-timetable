import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day9 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 9 - Monday 24th August
        </div>

        <TimetableBlock
          time={"10:30 - 11:15"}
          event={"Group A & B - Maths Test"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"10:30 - 12:15"}
          event={"Group E - TSA Training"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Group C & D - Maths Test"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"13:30 - 14:15"}
          event={"Group E & F - Maths Test"}
          location={"Locke Room"}
        />

        <TimetableBlock
          time={"13:30 - 15:15"}
          event={"Group C & D - TSA Training"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"15:30 - 17:15"}
          event={"Group A & B - TSA Training"}
          location={"Hayek Room"}
        />

      </div>
    </>
  )
}

Day9.page = 'day9';
Day9.group = 'joe';

export default Day9;
