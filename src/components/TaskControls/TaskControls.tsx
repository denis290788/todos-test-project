import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TaskIcon from '@mui/icons-material/Task';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import styles from './TaskControls.module.scss';

interface TaskControlsProps {
    onToggleTodos: () => void;
    showDone: boolean;
}

const TaskControls: React.FC<TaskControlsProps> = ({ onToggleTodos, showDone }) => {
    const router = useRouter();

    return (
        <div className={styles.controlBar}>
            <div className={styles.buttonsSection}>
                <button onClick={onToggleTodos} className={styles.controlButton}>
                    {!showDone ? <TaskIcon fontSize="large" /> : <ArrowBackIcon fontSize="large" />}
                </button>
                <button
                    className={styles.controlButton}
                    onClick={() => {
                        router.push('/add-task');
                    }}
                >
                    <AddIcon fontSize="large" />
                </button>
            </div>
        </div>
    );
};

export default TaskControls;
