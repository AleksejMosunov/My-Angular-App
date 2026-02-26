import { Component } from '@angular/core';
import { PasswordGeneratorComponent } from '../../password-generator/password-generator';

@Component({
  selector: 'app-home',
  imports: [PasswordGeneratorComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
