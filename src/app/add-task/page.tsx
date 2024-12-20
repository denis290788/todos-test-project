'use client';

import styles from './page.module.scss';
import { useAppDispatch } from '@/store';
import { addTask } from '@/store/taskSlice';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

interface TaskForm {
    id: string;
    title: string;
    isDone: boolean;
}

const AddTask = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<TaskForm>({
        mode: 'onChange',
    });

    const submit: SubmitHandler<TaskForm> = (data) => {
        dispatch(addTask(data.title));

        router.push('/');

        reset({
            title: '',
        });
    };

    return (
        <div className={styles.addFormContainer}>
            <h2>Добавь туду!</h2>
            <form className="" onSubmit={handleSubmit(submit)}>
                <div className={styles.formInput}>
                    <label htmlFor="title" className={styles.label}>
                        Задача
                    </label>
                    <input
                        className={errors.title ? `${styles.input} ${styles.error}` : styles.input}
                        id="title"
                        type="text"
                        placeholder="Доделать тестовое?"
                        {...register('title', { required: 'Заголовок обязателен' })}
                    />
                    <div className={styles.errorContainer}>
                        {errors.title && (
                            <div className={styles.errorText}>{errors.title.message}</div>
                        )}
                    </div>
                </div>

                <div className={styles.buttonSection}>
                    <button
                        className={styles.formButton}
                        onClick={() => {
                            router.push('/');
                            reset({
                                title: '',
                            });
                        }}
                    >
                        <ArrowBackIcon />
                    </button>
                    <button className={styles.formButton} type="submit" disabled={!isValid}>
                        <AddIcon />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
