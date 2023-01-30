import { Thought, Thoughts } from './thought';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';
  constructor( private http: HttpClient) { }

  listThoughts(): Observable<Thoughts> {
    return this.http.get<Thoughts>(this.API)
  }

  createThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  editThought(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  deleteThought(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }

  searchByd(id: number) :Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }
}
