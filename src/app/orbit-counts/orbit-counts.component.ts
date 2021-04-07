import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  count: number;
  total: number;
  

  constructor() { }

  ngOnInit() {
  }

  countTypes (satellites, type) {
    this.count = 0;
    for(let i = 0; i < satellites.length; i++){
      if(satellites[i].type === type) {
        this.count++;
      }
    }
   return this.count;
  }

  findTotalOfAllTypes (satellites) {
    this.total = satellites.length;
    return this.total;
  }

}
