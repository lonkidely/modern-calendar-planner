import React, {useState} from 'react';
import './LinkedTasks.scss';
import {Form} from 'react-bootstrap';
import {TaskProps} from "@custom_types/TaskProps";
import {Task} from "@custom_types/Task";


export type LinkedTasksProps = {
    tasks: TaskProps[];
    update: (taskBefore, taskAfter:string) => void;
    type?: string;
    setTask?: (task:Task) => void;
    defaultTask?:Task;
};

export const LinkedTasks:React.FC<LinkedTasksProps> = (props: LinkedTasksProps) => {
    const [value, setValue] = useState('');

    return (
        <div className="linked_tasks">
            <Form.Select id="worktype" aria-label="Порядок выполнения">
                <option value="parallel">Параллельно</option>
                {props?.type === "before" ?  <option value="before" selected={true}>Перед текущей</option> : null}
                {props?.type === "after" ? <option value="after" selected={true}>После текущей</option> : null}
            </Form.Select>
            <div className="linked_tasks__divider"></div>
            <Form.Select aria-label="Связанные задачи" onChange={event => {
                props.update(value, event.target.value);
                setValue(() => event.target.value);
                if ((document.getElementById('worktype') as HTMLSelectElement).value !== "parallel") {
                    const selected: Task = {id:event.target[event.target.selectedIndex].id};
                    props?.setTask(selected);
                }
            }}>
                <option value={"default"}>Связанная задача</option>
                {props.tasks.map((val, key) => {
                    return !val.used || value === val.task.title ? <option selected={val.task.id === props?.defaultTask?.id} id={val.task.id} key={key} value={val.task.title}>{val.task.title}</option> : null;
                })}
            </Form.Select>
        </div>
    );
};
