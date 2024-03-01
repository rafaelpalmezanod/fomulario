import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from '../registro/registro.component';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RegistroComponent ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
    nombre = ""
    apellido = ""
    email = ""
    nombreenviado=""
    apellidoenviado=""
    emailenviado=""

    enviar(){
      this.nombreenviado=this.nombre
      this.apellidoenviado=this.apellido
      this.emailenviado=this.email

    }

}
 




