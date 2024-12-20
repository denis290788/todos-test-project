'use client';

import { deleteTask, TTask } from '@/store/taskSlice';
import { useAppDispatch } from '@/store';
import Link from 'next/link';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import StatusButton from '../StatusButton/StatusButton';
import styles from './TaskCard.module.scss';

interface TaskCardProps {
    task: TTask;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    const dispatch = useAppDispatch();

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(deleteTask(task.id));
    };

    return (
        <div className={styles.card}>
            <Link href={`/tasks/${task.id}`} className={styles.cardContainer}>
                <div className={styles.cardInfo}>
                    <h2 className={styles.cardTitle}>{task.title}</h2>
                </div>
            </Link>
            <div className={styles.cardActions}>
                <StatusButton taskId={task.id} isDone={task.isDone}></StatusButton>
                <button onClick={handleDelete} className={styles.cardButton}>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
