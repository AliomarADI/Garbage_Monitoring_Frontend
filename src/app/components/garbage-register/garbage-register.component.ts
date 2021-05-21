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
  kz = [`Almaty` , `Astana` , `Kyzylorda` , `Shymkent`];
  usa = [`Almaty` , `Astana` , `Kyzylorda` , `Shymkent`];
  turkey = [`Almaty` , `Astana` , `Kyzylorda` , `Shymkent`];
  italy = [`Almaty` , `Astana` , `Kyzylorda` , `Shymkent`];

  constructor(private garbageService: GarbageService) { }

  garbage: GarbagePoint = new GarbagePoint(null,"","","","","",null);
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
