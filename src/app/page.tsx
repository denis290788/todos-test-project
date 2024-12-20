'use client';

import styles from './page.module.scss';
import { useState } from 'react';
import TaskControls from '@/components/TaskControls/TaskControls';
import TaskList from '@/components/TaskList/TaskList';

export default function Home() {
    const [showDone, setShowDone] = useState(false);

    const toggleTodos = () => {
        setShowDone((prevState) => !prevState);
    };
    return (
        <div className={styles.main}>
            <TaskControls onToggleTodos={toggleTodos} showDone={showDone} />
            <TaskList showDone={showDone} />
        </div>
    );
}
