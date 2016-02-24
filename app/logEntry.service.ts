import {Injectable} from 'angular2/core';
import {LogEntryModel} from './logEntry';

@Injectable()
export class LogEntryService {
    private logEntries: LogEntryModel[] = [];
    
    getLogEntries():LogEntryModel[]{
        return this.logEntries;
    }
    
    addLogEntry(logEntry: LogEntryModel):void{
        this.logEntries.push(logEntry);
    }
}