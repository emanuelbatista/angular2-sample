import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  list: String[];
  
  constructor() { 
    this.list=["dsd","dsd"];
  }

  ngOnInit() {
  }

}
