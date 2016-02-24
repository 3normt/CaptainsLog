import {Component} from 'angular2/core';
import {LogEntryModel} from './logEntry';
import {LogEntryService} from './logEntry.service';

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
    `,
    providers: [LogEntryService]
})

export class LogEntryComponent {
    private id = 1;
    public model:LogEntryModel;
    
    constructor(private _logEntryService: LogEntryService){
        
    }
    
    ngOnInit(){
        this.id++;
        this.model = new LogEntryModel(this.id, "", "");        
    }
    
    onSubmit(){
        this._logEntryService.addLogEntry(this.model);
        console.log(this._logEntryService.getLogEntries());
    }
}