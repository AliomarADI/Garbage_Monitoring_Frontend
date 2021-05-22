import {Component, Injectable, OnInit} from '@angular/core';
import {GarbagePoint} from '../../model/garbagePoint';
import {GarbageService} from '../../service/garbageService';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-garbage-register',
  templateUrl: './garbage-register.component.html',
  styleUrls: ['./garbage-register.component.scss']
})
@Injectable({
  providedIn: 'root'
})

export class GarbageRegisterComponent implements OnInit {
  kz = [`Almaty` , `Astana` , `Kyzylorda` , `Astana`];
  usa = [`New York` , `California` , `Florida` , `Shymkent`];
  turkey = [`Ankara` , `Istanbul` , `Bodrum` , `Efes`];
  italy = [`Rome` , `Milan` , `Pisa` , `Lucca`];
  cities = [];
  constructor(private garbageService: GarbageService) { }

  garbage: GarbagePoint = new GarbagePoint(null,"","","","","");
  phoneNumber: number;

  ngOnInit(): void {
  }

  createGarbagePoint(garbage: GarbagePoint){
    console.log(garbage)
    this.garbageService.createGarbagePoint(garbage).subscribe(value => {
      garbage = value;
    });
  }

}
