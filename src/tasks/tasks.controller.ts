import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';

import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/Task";

@Controller('tasks')
export class TasksController {

    //Instantiate TaskService
    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId: string) {
        return this.taskService.getTask(taskId);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task)
        return 'new task';
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
        return 'update task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        return `delete task number ${id}` ;
    }
}
