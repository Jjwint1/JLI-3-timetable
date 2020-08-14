import styles from './TimetableBlock.module.scss'

export class TimetableBlock extends React.Component {

    render() {
        return(
            <div>
                <div className={styles.timetableContainer}>
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
                </div>
            </div>
        )
    }
    
}