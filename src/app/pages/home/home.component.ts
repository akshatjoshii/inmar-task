import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login-service.service';
import {TasksService} from '../../services/tasks/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  tasks: any[];
  completed: boolean;
  constructor(private loginService: LoginService, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks();
    this.user = this.loginService.getUser();
  }
  getTasks(): any {
    this.tasksService.getTasks().subscribe((data: any) => {
     this.tasks = data.filter(task => task.userId === this.user.id);
     console.log(this.tasks);
    });
  }
}
