import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;
  chkComplete: FormControl;
  txtInput: FormControl;
  editing = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.complete);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkComplete.valueChanges.subscribe(x => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }


  edit(): void {
    this.editing = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  finishEdition(): void {
    this.txtInput.setValue(this.todo.text);
    this.editing = false;
    if (this.txtInput.invalid && this.txtInput.value === this.todo.text) {
      return;
    }
    this.store.dispatch(
      actions.editTodo({
        id: this.todo.id,
        text: this.txtInput.value
      })
    );
  }

  deleteTodo() {
    this.store.dispatch(
      actions.deleteTodo({id: this.todo.id})
    );
  }
}
