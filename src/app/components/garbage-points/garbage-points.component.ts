import { Component, OnInit } from '@angular/core';
import {GarbageService} from "../../service/garbageService";
import {GarbagePoint} from "../../model/garbagePoint";

@Component({
  selector: 'app-garbage-points',
  templateUrl: './garbage-points.component.html',
  styleUrls: ['./garbage-points.component.scss']
})
export class GarbagePointsComponent implements OnInit {
  points:GarbagePoint[]=null;
  phoneNumber:string;
  constructor(private garbageService: GarbageService) { }

  ngOnInit(): void {

  }

  getAllByUserNumber(userNumber:string){
    this.garbageService.getGarbagePointsByUserId(userNumber).subscribe(value => {
      this.points=value;
      console.log(this.points);
      console.log(value);
    })
  }
}
