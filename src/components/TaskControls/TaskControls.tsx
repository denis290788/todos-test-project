import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TaskIcon from '@mui/icons-material/Task';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

interface ProductControlsProps {
    onToggleTodos: () => void;
    showDone: boolean;
}

const ProductControls: React.FC<ProductControlsProps> = ({ onToggleTodos, showDone }) => {
    const router = useRouter();

    return (
        <div className="">
            <div className="">
                <button onClick={onToggleTodos} className="">
                    {!showDone ? <TaskIcon fontSize="large" /> : <ArrowBackIcon fontSize="large" />}
                </button>
                <button
                    className=""
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

export default ProductControls;
