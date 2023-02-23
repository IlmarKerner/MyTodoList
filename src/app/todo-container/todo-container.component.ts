import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  setDoc,
  doc,
  deleteDoc,
  
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent {
  MyTodos$: Observable<any>;
  MyTodos: Array<any>; // könnte man auch ausklammern
  title: string = '';
  description: string = '';

  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'MyTodos');
    this.MyTodos$ = collectionData(coll);

    this.MyTodos$.subscribe((newTodos) => {
      console.log('neue todos', newTodos);
      // alert('neuer Eintrag!') beispielhaft zusätzlich hinzugefügt
      this.MyTodos = newTodos;
    });
  }

  ngOnInit(): void {}

  openEnterfield() {
    document.getElementById('fill-card')?.classList.remove('d-none');
    document.getElementById('fill-card')?.classList.add('show');
    document.getElementById('fill-card')?.classList.remove('gone');
  }

  // saveTodo() {
  //   if (this.title && this.description) {
  //     const coll = collection(this.firestore, 'MyTodos');
  //     setDoc(doc(coll), { title: this.title, description: this.title });
  //     this.title = '';
  //     this.description = '';
  //     this.cancel();
  //   } else {
  //     alert('Du musst beide Felder ausfüllen!');
  //   }
  // }

  saveTodo() {
    if (this.title && this.description) {
      const coll = collection(this.firestore, 'MyTodos'); // erstellt eine Sammlung in firestore in "MyTodos"
      const newDocRef = doc(coll); // erstellt ein Refernz für ein neues Dokument (2te Spalte)
      const newTodo = { title: this.title, description: this.title, id: newDocRef.id }; // neues Todo-Objekt mit inhalt "title""beschreibung" und "id" wird erstellt
      setDoc(newDocRef, newTodo); // beide Werte werden im firestore gespeichert
      this.title = '';
      this.description = '';
      this.cancel();
    } else {
      alert('Du musst beide Felder ausfüllen!');
    }
  }

  cancel() {
    document.getElementById('fill-card')?.classList.remove('show');
    document.getElementById('fill-card')?.classList.add('gone');
    setTimeout(() => {
      document.getElementById('fill-card')?.classList.add('d-none');
      this.title = '';
      this.description = '';
    }, 225);
  }

  deleteToDo(index: number) { //übergibt den index als nummer
    const coll = collection(this.firestore, 'MyTodos'); //holt die daten aus dem Firestore "MyTodos" und weist diese -> der var. "coll" zu
    const docId = this.MyTodos[index].id; // holt die Id raus und weist diese -> "docId" zu 
    deleteDoc(doc(coll, docId)).then(() => { // löscht die id samt Inhalt der oben zugewiesnen Konstanten raus
      console.log('Dokument erfolgreich gelöscht'); 
    }).catch((error) => {
      console.error('Fehler beim Löschen des Dokuments:', error);
    });
  }
}
