import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Event } from './events/event';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class EventService {

  private eventsUrl = "https://www.gov.uk/bank-holidays.json"

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    //const events = of(EVENTS);
    //return events;
   
    return this.http.get<Event[]>(this.eventsUrl).pipe(
      map(events => events['england-and-wales'].events)
    );

  } 

  getEvent(date: string): Observable<Event> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    events: Event[] 
    
    events = this.http.get<Event[]>(this.eventsUrl).pipe(
      map(events => events['england-and-wales'].events))

      return events.find(event => event.date === date)!;

    
  }

}