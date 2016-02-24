import {Component} from 'angular2/core';
import {LogEntries} from './LogEntries.component';
@Component({
    selector: 'captains-log',
    template: 		
		`
		<div class="captns-log-container">
			<h1>Captains Log</h1>
			<p>{{greeting}}</p>
			
			This is the captains-log component. 
			
		</div>	
		<div class="log-entries">
			<log-entries></log-entries>
		</div>		
		`,
		
directives: [LogEntries]
})
export class CaptainsLog { 	
		
	public greeting = 'Welcome to the captains log.'; 	
		
	ngOnInit() {
		console.log('init for captnslog'); 		
	}
}
