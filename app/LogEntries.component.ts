import {Component} from 'angular2/core';
import {LogEntryService} from './logEntry.service';

@Component({
    selector: 'log-entries',
    template: 		
		`
		<div class="log-entries-container">			
			<p>Here comes the log entries</p>	
			
			
			<div class="log-entries">
				<div class="entry" *ngFor="#entry of logEntries">
					{{entry.subject}}
				</div>
			</div>
		</div>
		
		`,
        providers: [LogEntryService]	
})
export class LogEntries { 		
		
	logEntries = [{id: 0, subject: 'Jørgen', description: '...er .... KUL!'},{id: 1, subject: 'Lars', description: '...er .... KUL!'},{id: 2, subject: 'Morten', description: '...er .... KUL!'}]; 
        
    constructor(private _logEntryService: LogEntryService){
        
    }
	ngOnInit() {
		this.logEntries = this._logEntryService.getLogEntries();	
	}
}
