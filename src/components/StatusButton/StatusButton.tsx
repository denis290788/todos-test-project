'use client';

import { useAppDispatch } from '@/store';
import { updateStatus } from '@/store/taskSlice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface StatusButtonProps {
    taskId: string;
    isDone: boolean;
}

const StatusButton: React.FC<StatusButtonProps> = ({ taskId, isDone }) => {
    const dispatch = useAppDispatch();

    const handleStatus = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(updateStatus(taskId));
    };

    return (
        <button onClick={handleStatus} className="">
            {isDone ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
        </button>
    );
};

export default StatusButton;
