import {User} from "@custom_types/User";
import {Task} from "@custom_types/Task";

export interface Goal {
    id?:string,
    tasks?:Task[],
    startDate?:Date,
    endDate?:Date,
    title?:string,
    important?:number,
    urgency?:number,
    createdBy?:User,
}
