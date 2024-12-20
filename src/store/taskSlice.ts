import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type TTask = {
    id: string;
    title: string;
    isDone: boolean;
};

interface TTaskState {
    data: TTask[];
    status: 'Idle' | 'Loading' | 'Success' | 'Failed';
    error: string | null;
}

const initialState: TTaskState = {
    data: [],
    status: 'Idle',
    error: null,
};

export const getTasks = createAsyncThunk('tasks/fetchTasks', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('https://jsonplaceholder.org/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }

        const data = await response.json();
        const tasks: TTask[] = data.map((item: any) => ({
            id: item.id.toString(),
            title: item.title,
            isDone: false,
        }));

        return tasks;
    } catch (error) {
        return rejectWithValue((error as Error).message);
    }
});

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.data.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.data = state.data.filter((task) => task.id !== action.payload);
        },
        updateStatus: (state, action) => {
            const taskId = action.payload;
            const task = state.data.find((task) => task.id === taskId);

            if (task) {
                task.isDone = !task.isDone;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.pending, (state) => {
                state.status = 'Loading';
                state.error = null;
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.status = 'Success';
                state.data = action.payload;
            })
            .addCase(getTasks.rejected, (state, action) => {
                state.status = 'Failed';
                state.error = action.payload as string;
            });
    },
    selectors: {
        selectorTasksData: (state) => state.data,
        selectorTasksStatus: (state) => state.status,
        selectorTasksError: (state) => state.error,
    },
});

export const { selectorTasksData, selectorTasksStatus, selectorTasksError } = taskSlice.selectors;

export const { addTask, deleteTask, updateStatus } = taskSlice.actions;
