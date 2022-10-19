import { Component, OnInit } from '@angular/core';
import { Event } from './event';
import { EventService } from '../event.service'


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  event?: Event;
  events: Event[] = [];
  
  constructor(private eventService: EventService) {}

    ngOnInit(): void {
      this.getEvents()
    }

    onSelect(event: Event): void {
      this.event = event;
    
    }
    
    getEvents(): void {
       this.eventService.getEvents()
        .subscribe(events => this.events = events);
    }
    
  

}