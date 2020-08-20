import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { WebSocketsService } from '../../../services/web-sockets.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public nombre = '';

  constructor(private fb: FormBuilder, private wsService: WebSocketsService) {}

  ngOnInit() {
    this.inicializarFormulario();
  }

  public inicializarFormulario() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      // de: ['', [Validators.required]],
    });
  }

  public enviar() {
    console.log(this.form.get('nombre').value);
  }

  /**
   *
   *Obtengo el ombre del usuario que se esta logueando
   * @memberof LoginComponent
   */
  public ingresar() {
    if(this.obtenerNombre.value){
      this.wsService.loginWs(this.obtenerNombre.value);
    }
  }

  get obtenerNombre() {
    return this.form.get('nombre');
  }
}
