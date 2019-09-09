import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';


@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styles: []
})
export class EntidadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  confirm(){
    swal('Enviado', 'Su solicitud fue enviada', 'success');
  }

}
