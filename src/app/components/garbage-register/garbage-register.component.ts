import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garbage-register',
  templateUrl: './garbage-register.component.html',
  styleUrls: ['./garbage-register.component.scss']
})
export class GarbageRegisterComponent implements OnInit {
  list: ['Almaty', 'Astana', 'Shymkent'];

  constructor() { }

  ngOnInit(): void {
  }

}
