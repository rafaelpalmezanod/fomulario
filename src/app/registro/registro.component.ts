import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  @Input()nombre = ""
  @Input()apelldo = ""
  @Input()email= ""

  
}
