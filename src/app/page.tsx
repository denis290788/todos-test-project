'use client';

import './page.module.css';
import { useState } from 'react';
import TaskControls from '@/components/TaskControls/TaskControls';
import TaskList from '@/components/TaskList/TaskList';

export default function Home() {
    const [showDone, setShowDone] = useState(false);

    const toggleTodos = () => {
        setShowDone((prevState) => !prevState);
    };
    return (
        <div className="">
            <TaskControls onToggleTodos={toggleTodos} showDone={showDone} />
            <TaskList showDone={showDone} />
        </div>
    );
}
