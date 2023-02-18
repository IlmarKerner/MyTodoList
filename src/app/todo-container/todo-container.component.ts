import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent {
  todo: string = '';
  MyTodos$: Observable<any>;
  MyTodos:Array<any>; // könnte man auch ausklammern
  title:string = '';
  description:string = '';

  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'MyTodos');
    this.MyTodos$ = collectionData(coll);

    this.MyTodos$.subscribe( (newTodos) => {
      console.log('neue todos', newTodos)
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

  saveTodo() {
    const coll = collection(this.firestore, 'MyTodos');
    setDoc(doc(coll), {title: this.title, description: this.title}); 
    this.title = '';
    this.description = '';
    this.cancel();
  }
  
  cancel() {
    document.getElementById('fill-card')?.classList.remove('show');
    document.getElementById('fill-card')?.classList.add('gone');
    setTimeout(() => {
      document.getElementById('fill-card')?.classList.add('d-none');
    }, 225);
  }
}
