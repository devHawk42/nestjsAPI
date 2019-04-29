import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    @Get()
    getTask(): {'hello' : string} {
        return {'hello':'world'};
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task)
        return 'new task';
    }

    @Put()
    updateTask(): string {
        return 'update task';
    }

    @Delete()
    deleteTask(): string {
        return 'delete task';
    }
}
