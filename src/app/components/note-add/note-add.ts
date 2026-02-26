import { Component, signal } from '@angular/core';
import { NoteService } from '../../services/note-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-add',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.css',
})
export class NoteAdd {
  constructor(private noteService: NoteService) {}

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: '',
  });

  protected addNote() {
    const noteData = this.newNote();
    if (!noteData.title || !noteData.content) return;
    this.noteService.addNote(noteData.title, noteData.content);
    this.newNote.set({ title: '', content: '' });
  }
}
