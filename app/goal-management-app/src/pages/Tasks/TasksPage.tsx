import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import TaskList from '../../components/tasks/TaskList';
import TaskEditor from './TaskEditor';

const TasksPage: React.FC = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">タスク管理</h1>
            <TaskEditor />
            <h2 className="text-xl font-semibold mt-6">タスクリスト</h2>
            {tasks.length > 0 ? (
                <TaskList tasks={tasks} />
            ) : (
                <p className="text-gray-500">タスクがありません。</p>
            )}
        </div>
    );
};

export default TasksPage;