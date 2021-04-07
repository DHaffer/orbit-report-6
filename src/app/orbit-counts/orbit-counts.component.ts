import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];


  constructor() { }

  ngOnInit() {
  }

  // calculateTotalTypes (satellites, type) {
    
  //   for(let i = 0; i < satellites.length; i++){
  //     if(satellites.type === type) {
  //       this.count++;
  //     }
  //   }
  //   return this.count;
  // }

}
