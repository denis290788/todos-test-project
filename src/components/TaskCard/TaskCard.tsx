'use client';

import { deleteTask, TTask } from '@/store/taskSlice';
import { useAppDispatch } from '@/store';
import Link from 'next/link';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import StatusButton from '../StatusButton/StatusButton';

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
        <div className="">
            <Link href={`/tasks/${task.id}`} className="">
                <div className="">
                    <h2 className="">{task.title}</h2>
                </div>
            </Link>
            <div className="">
                <StatusButton taskId={task.id} isDone={task.isDone}></StatusButton>
                <button onClick={handleDelete} className="">
                    <DeleteIcon />
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
