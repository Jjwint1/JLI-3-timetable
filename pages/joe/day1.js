import styles from '../../styles/Home.module.scss'

import { TimetableBlock } from '../../components/TimetableBlock/TimetableBlock'

const Day1 = () => {
  return (
    <>
      <div className={styles.timetable}>
        <div className={styles.date}>
          Day 1 - Sunday 16th August
        </div>

        

      </div>
    </>
  )
}

Day1.page = 'day1';
Day1.group = 'joe';

export default Day1;
