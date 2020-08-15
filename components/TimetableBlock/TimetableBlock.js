import styles from './TimetableBlock.module.scss'
import { motion } from 'framer-motion'

export class TimetableBlock extends React.Component {

    

    render() {

        const blockVariants = {
            enter: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                }
            },
            exit: {
                opacity: 0,
                y: 200,
                transition: {
                    duration: 0,
                }
            }
        }

        return(
            <motion.div initial="exit" animate="enter" exit="exit">
                <motion.div className={styles.timetableContainer} inital="exit" animate="enter" exit="exit" variants={blockVariants}>
                    <div className={styles.block}>
                        <div className={styles.time}>
                            {this.props.time}
                        </div>
                        <div className={styles.event}>
                            {this.props.event}
                        </div>
                        <div className={styles.location}>
                            {this.props.location}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )
    }
    
}