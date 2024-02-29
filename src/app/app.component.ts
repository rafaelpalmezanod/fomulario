import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component'
import { RegistroComponent }  from './registro/registro.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormularioComponent, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario';
}
