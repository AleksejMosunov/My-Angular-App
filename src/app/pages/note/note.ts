import { Component, signal } from '@angular/core';
import { NoteService } from '../../services/note-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule],
  templateUrl: './note.html',
  styleUrl: './note.css',
})
export class NoteComponent {
  constructor(private noteService: NoteService) {}

  onNoteClick() {
    alert('Note clicked!');
    console.log('Note clicked');
  }

  protected get notes() {
    return this.noteService.getNotes();
  }

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
