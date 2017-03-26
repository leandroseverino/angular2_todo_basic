"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Task = (function () {
    function Task() {
    }
    return Task;
}());
var TASKS = [
    { id: 1, name: 'Trabalhar' },
    { id: 2, name: 'Lavar Pratos' },
    { id: 3, name: 'Tirar Poeira' },
    { id: 4, name: 'Compras no Supermercado' },
    { id: 5, name: 'Cuidar das Crianças' },
    { id: 6, name: 'Jogar Videogame' },
    { id: 7, name: 'Almoçar' },
    { id: 8, name: 'Jantar' },
    { id: 9, name: 'Fazer Exercício' },
    { id: 10, name: 'Pagar Contas' }
];
var TaskEditComponent = (function () {
    function TaskEditComponent() {
    }
    return TaskEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Task)
], TaskEditComponent.prototype, "task", void 0);
TaskEditComponent = __decorate([
    core_1.Component({
        selector: 'task-edit',
        template: "\n\t<div *ngIf=\"task\">\n\t\t<input type=\"text\" [(ngModel)]=\"task.name\" />\n\t</div>\n\t"
    })
], TaskEditComponent);
exports.TaskEditComponent = TaskEditComponent;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Lista de Tarefas";
        this.tasks = TASKS;
    }
    AppComponent.prototype.onClick = function (task) {
        this.selectedTask = task;
        console.log(task);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<h1>{{ title }}</h1>\n\t<ul>\n\t   <li *ngFor=\"let t of tasks\" (click)=\"onClick(t)\">\n\t   \t\t{{ t.id }} - {{ t.name}}\n\t   </li>\n\t</ul>\n\t<task-edit [task]=\"selectedTask\"></task-edit>\n\t"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map