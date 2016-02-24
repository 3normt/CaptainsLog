import {Component} from 'angular2/core';
import {LogEntryModel} from './logEntry';

@Component({
   selector: 'log-entry',
   //templateUrl: 'app/logEntry.component.html'
   template: 
   `
        <div>
            <span >Star date: </span><br/>
            <input [(ngModel)]="model.subject" id="subjectInput" type="text" placeholder="Subject"/><br/>
            <textarea [(ngModel)]="model.description" id="descriptionText" rows="4"></textarea><br/>
            <button (click)="onSubmit()" type="button">Save</button>
        </div>
    `
})

export class LogEntryComponent {
    private id = 1;
    public model:LogEntryModel;
    
    ngOnInit(){
        this.id++;
        this.model = new LogEntryModel(this.id, "", "");        
    }
    
    onSubmit(){
        this.model = new LogEntryModel(this.id, this.model.subject, this.model.description);
        alert("Yay!");
    }
}