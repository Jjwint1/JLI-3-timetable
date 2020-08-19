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
          time={"10:30 - 11:15"}
          event={"Group A"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"11:30 - 12:15"}
          event={"Group C"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"13:30 - 14:15"}
          event={"Group E"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"14:30 - 15:15"}
          event={"Group B"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"16:30 - 17:15"}
          event={"Group D"}
          location={"Hayek Room"}
        />

        <TimetableBlock
          time={"17:30 - 18:15"}
          event={"Group F"}
          location={"Hayek Room"}
        />
      </div>
    </>
  )
}

Day7.page = 'day7';
Day7.group = 'matteo';

export default Day7;
