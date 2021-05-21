import {Component, Injectable, OnInit} from '@angular/core';
import {Garbage} from '../../model/garbage';
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

  constructor(private garbageService: GarbageService) { }

  garbage: Garbage;
  phoneNumber: number;

  ngOnInit(): void {
  }

  createGarbagePoint(garbage: Garbage, phoneNumber: number): Observable<any>{
    return this.garbageService.createGarbagePoint(garbage, phoneNumber);
  }

}
