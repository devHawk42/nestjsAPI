import { Injectable } from '@nestjs/common';
import { Task } from "./interfaces/Task";

@Injectable()
export class TasksService {
    tasks: Task[] = [
        {
            id: 1,
            title:'Testing',
            description: 'testing desc',
            done: true
        },
        {
            id: 2,
            title:'Testing',
            description: '2 testing desc',
            done: false
        },
        {
            id: 3,
            title:'Testing',
            description: '3 testing desc',
            done: true
        }
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): Task{
        return this.tasks.find(task => task.id === id);
    }

}