import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordGeneratorComponent } from './password-generator/password-generator';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, CommonModule, FormsModule, PasswordGeneratorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('generate-random-password');
}
