import {Component, Input} from '@angular/core';

class Task {
	id:number;
	name:string;
}

let TASKS:Task[] = [
	{id: 1, name: 'Trabalhar'},
	{id: 2, name: 'Lavar Pratos'},
	{id: 3, name: 'Tirar Poeira'},
	{id: 4, name: 'Compras no Supermercado'},
	{id: 5, name: 'Cuidar das Crianças'},
	{id: 6, name: 'Jogar Videogame'},
	{id: 7, name: 'Almoçar'},
	{id: 8, name: 'Jantar'},
	{id: 9, name: 'Fazer Exercício'},
	{id: 10, name: 'Pagar Contas'}
];



@Component({
	selector: 'task-edit',
	template: `
	<div *ngIf="task">
		<input type="text" [(ngModel)]="task.name" />
	</div>
	`
})
export class TaskEditComponent {
	@Input()
	task:Task;	
}


@Component({
	selector: 'my-app',
	template: `
	<h1>{{ title }}</h1>
	<ul>
	   <li *ngFor="let t of tasks" (click)="onClick(t)">
	   		{{ t.id }} - {{ t.name}}
	   </li>
	</ul>
	<task-edit [task]="selectedTask"></task-edit>
	`
})
export class AppComponent{
	title = "Lista de Tarefas";
	tasks:Task[] = TASKS;
	selectedTask:Task;

	onClick(task) {
		this.selectedTask = task;
		console.log(task);
	}
}