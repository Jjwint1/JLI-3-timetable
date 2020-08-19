import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day6 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 6 - Friday 21st August
        </div>

        <TimetableBlock
          time={"9:45"}
          event={"Oxford Trip"}
          location={""}
        />
      </div>
    </>
  )
}

Day6.page = 'day6';
Day6.group = 'matteo';

export default Day6;
