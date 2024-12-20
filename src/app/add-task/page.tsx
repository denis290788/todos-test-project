'use client';

import { useAppDispatch } from '@/store';
import { addTask } from '@/store/taskSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';

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
        dispatch(addTask({ ...data, id: nanoid(), isDone: false }));

        router.push('/');

        reset({
            title: '',
        });
    };

    return (
        <div className="">
            <h2 className="">Добавь туду!</h2>
            <form className="" onSubmit={handleSubmit(submit)}>
                <div className="">
                    <label htmlFor="title" className="">
                        Название
                    </label>
                    <input
                        className={errors.title ? `'' ''` : ''}
                        id="title"
                        type="text"
                        placeholder="Доделать тестовое?"
                        {...register('title', { required: 'Заголовок обязателен' })}
                    />
                    <div className="">
                        {errors.title && <div className="">{errors.title.message}</div>}
                    </div>
                </div>

                <div className="">
                    <button
                        onClick={() => {
                            router.push('/');
                            reset({
                                title: '',
                            });
                        }}
                    >
                        <ArrowBackIcon />
                    </button>
                    <button type="submit" disabled={!isValid} className="">
                        <CheckIcon />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
