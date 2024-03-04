import { Component, EventEmitter, Output } from '@angular/core';
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
  @Input()apellido = ""
  @Input()email= ""

  @Output() enviarDatosPadres = new EventEmitter<any>()

  enviardatospadres(){
    let Datos :any ={
      nombre:this.nombre,
      apellido:this.apellido,
      email:this.email
    }
   this.enviarDatosPadres.emit(Datos)
  } 
  
}
