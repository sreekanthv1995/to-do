import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{

  taskArray = [{taskName:'Task 01',isCompleated:false}]

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  onSubmit(form:NgForm){
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleated: false
    })
    form.reset();
  }

  onDelete(index:number){
      console.log(index);
      this.taskArray.splice(index, 1)
      
  }

  onCheck(index:number){
    console.log(this.taskArray)
    this.taskArray[index].isCompleated = !this.taskArray[index].isCompleated;
  }


}
