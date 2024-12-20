'use client';

import { useAppSelector } from '@/store';
import { useParams, useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StatusButton from '@/components/StatusButton/StatusButton';
import { selectorTasksData } from '@/store/taskSlice';

const TaskDetails = () => {
    const tasks = useAppSelector(selectorTasksData);
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const task = tasks.find((p) => p.id === id);

    return (
        <div className="">
            {task && (
                <div className="">
                    <div className="">
                        <h2 className="">{task.title}</h2>
                        <p className="">{task.id}</p>
                        <p className="">
                            {task.isDone ? 'Задача выполнена' : 'Задача невыполнена'}
                        </p>
                    </div>
                </div>
            )}
            <div className="">
                {task && <StatusButton taskId={id} isDone={task.isDone}></StatusButton>}
                <button
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    <ArrowBackIcon />
                </button>
            </div>
        </div>
    );
};

export default TaskDetails;
