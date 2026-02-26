import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private readonly notes = signal<Note[]>([
    { id: 1, title: 'First Note', content: 'This is the first note.', createdAt: new Date() },
    { id: 2, title: 'Second Note', content: 'This is the second note.', createdAt: new Date() },
  ]);

  getNotes() {
    return this.notes();
  }

  addNote(tittle: string, content: string) {
    const newNote: Note = {
      id: Date.now(),
      title: tittle || 'Untitled Note',
      content: content || '',
      createdAt: new Date(),
    };
    this.notes.update((notes) => [...notes, newNote]);
  }

  deleteNote(id: number) {
    this.notes.update((notes) => notes.filter((note) => note.id !== id));
  }

  updateNote(id: number, title: string, content: string) {
    this.notes.update((notes) =>
      notes.map((note) =>
        note.id === id
          ? { ...note, title: title || note.title, content: content || note.content }
          : note,
      ),
    );
  }
}
