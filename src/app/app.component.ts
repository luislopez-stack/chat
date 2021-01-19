import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fireChat';
  public itemsChats: Observable<any[]>;

  constructor(db: AngularFirestore, public chatSrv:ChatService){

    this.itemsChats = db.collection('chats').valueChanges();

  }
}
