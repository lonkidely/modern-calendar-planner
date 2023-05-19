import React, {useState} from 'react';
import './LinkedTasks.scss';
import {Form} from 'react-bootstrap';
import {TaskProps} from '@custom_types/TaskProps';


type LinkedTasksProps = {
    tasks: TaskProps[];
    update: (taskBefore, taskAfter:string) => void;
};

export const LinkedTasks:React.FC<LinkedTasksProps> = (props: LinkedTasksProps) => {
    const [value, setValue] = useState('');

    return (
        <div className="linked_tasks">
            <Form.Select aria-label="Связанные задачи" onChange={event => {
                props.update(value, event.target.value);
                setValue(() => event.target.value);
            }}>
                <option value={"default"}>Связанная задача</option>
                {props.tasks.map((val, key) => {
                    return !val.used || value === val.title ? <option key={key} value={val.title}>{val.title}</option> : null;
                })}
            </Form.Select>
            <div className="linked_tasks__divider"></div>
            <Form.Select aria-label="Порядок выполнения">
                <option value="default">Порядок выполнения</option>
                <option value="before">Перед текущей</option>
                <option value="after">После текущей</option>
                <option value="parallel">Параллельно</option>
            </Form.Select>
        </div>
    );
};
