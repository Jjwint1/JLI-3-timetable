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
          time={"8:30 - 9:30"}
          event={"Breakfast"}
          location={"RAU Dining Hall"}
        />
      </div>
    </>
  )
}

Day9.page = 'day9';
Day9.group = 'G';

export default Day9;
