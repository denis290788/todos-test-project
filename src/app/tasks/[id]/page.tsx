'use client';

import { useAppSelector } from '@/store';
import { useParams, useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StatusButton from '@/components/StatusButton/StatusButton';
import { selectorTasksData } from '@/store/taskSlice';
import styles from './page.module.scss';

const TaskDetails = () => {
    const tasks = useAppSelector(selectorTasksData);
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const task = tasks.find((p) => p.id === id);

    return (
        <div className={styles.taskDetails}>
            {task && (
                <div className={styles.info}>
                    <h2 className={styles.title}>{task.title}</h2>
                    <p className={styles.id}>Номер задачи: {task.id}</p>
                    <p className={styles.status}>
                        {' '}
                        Статус:
                        {task.isDone ? ' задача выполнена' : ' задача невыполнена'}
                    </p>
                </div>
            )}
            <div className={styles.buttonSection}>
                <button
                    className={styles.backButton}
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    <ArrowBackIcon />
                </button>
                {task && <StatusButton taskId={id} isDone={task.isDone}></StatusButton>}
            </div>
        </div>
    );
};

export default TaskDetails;
