import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  totalCount: number = 0;
  totalSpaceDebris: number = 0;
  totalCommunication: number = 0;
  totalProbe: number = 0;
  totalPositioning: number = 0;
  totalSpaceStation: number = 0;
  totalTelescope: number = 0;

  constructor() { }

  ngOnInit() {
  }

  calculateTotalTypes (satellites) {
    for (let i = 0; i < satellites.length; i++) {
      if(satellites.type === 'Space Debris'){
        this.totalSpaceDebris++
      }
      if(satellites.type === 'Communication'){
        this.totalCommunication++
      }
      if(satellites.type === 'Probe'){
        this.totalProbe++
      }
      if(satellites.type === 'Positioning'){
        this.totalPositioning++
      }
      if(satellites.type === 'Space Station'){
        this.totalSpaceStation++
      }
      if(satellites.type === 'Telescope'){
        this.totalTelescope++
      }
    }
    this.totalCount = satellites.length;
  }
}
