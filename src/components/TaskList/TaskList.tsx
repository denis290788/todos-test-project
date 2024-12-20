'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect } from 'react';
import { getTasks, selectorTasksData, selectorTasksStatus } from '@/store/taskSlice';
import TaskCard from '../TaskCard/TaskCard';
import styles from './TaskList.module.scss';

interface TaskListProps {
    showDone: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ showDone }) => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(selectorTasksData);
    const status = useAppSelector(selectorTasksStatus);

    useEffect(() => {
        if (status === 'Idle') {
            dispatch(getTasks());
        }
    }, [dispatch, status]);

    const filteredTasks = showDone ? tasks.filter((t) => t.isDone) : tasks;

    return (
        <div>
            {status === 'Loading' && <p className={styles.message}>Загружаю</p>}
            {status === 'Failed' && <p className={styles.message}>Какая-то ошибка</p>}

            {status === 'Success' && (
                <div className={styles.tasksList}>
                    {filteredTasks.length === 0 ? (
                        <p className={styles.message}>Тут пусто ):</p>
                    ) : (
                        filteredTasks.map((task) => (
                            <div key={task.id}>
                                <TaskCard task={task} />
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default TaskList;
