import {Goal} from '@custom_types/Goal';
import {User} from '@custom_types/User';

export interface Task {
    id?:string;
    mainTarget?: Goal | null;
    title?:string;
    description?:string;
    startDate?:Date;
    endDate?:Date;
    performer?:User | null;
    createdBy?:User;
    fromTask?:Task | null;
    toTask?:Task | null;
    isCompleted?: boolean;
    priority?: number;
    cost?: number;
}
