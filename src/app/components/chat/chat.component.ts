import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string;
  elementoscroll : any;

  constructor(public chatSrv : ChatService) {
    this.chatSrv.cargarMensajes()
            .subscribe( () =>{

              setTimeout( () =>{
                this.elementoscroll.scrollTop = this.elementoscroll.scrollHeight;
              }, 20);

            });
  }

  ngOnInit(): void {
    this.elementoscroll = document.getElementById('app-mensajes');
  }


  enviar_mens(){

    if( this.mensaje.length === 0 ){
      return;
    }

    this.chatSrv.agregarMensajes( this.mensaje )
                      .then( () => this.mensaje = "" )
                      .catch( (err)=> console.log('Mensaje enviado', err));

  }



}
