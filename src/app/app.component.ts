import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  //template: '<tree-root [nodes]="nodes" [options]="options"></tree-root>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  

   nodes = [
    {
      id: 1,
      name: 'Prague',
      icon: 'place',
      children: [
        { id: 2, name: 'Cohen', icon: 'person' },
        { id: 3, name: 'Steele', icon: 'person' }
      ]
    },
    {
      id: 4,
      name: 'Russian Connections',
      icon: 'add_box',
      children: [
        { id: 5, name: 'Bannon',
          icon: 'add_box',
          children: [
            { id: 6, name: 'Donald Trump Jr', icon: 'add_box',
             children : [
              { id: 8, name: 'Donald Trump Jr', icon: 'person' },
              { id: 9, name: 'Jared Kushner', icon: 'person' }             
             ] },
            { id: 7, name: 'Jared Kushner', icon: 'person' }
          ]             
        },
        { id: 8, name: 'Donald Trump Jr', icon: 'person' },
        { id: 9, name: 'Jared Kushner', icon: 'person' },
        { id: 10, name: 'Michael T. Flynn', icon: 'person' },
        { id: 11, name: 'Russian ambassador, Sergey I. Kislyaks', icon: 'person' },
        { id: 12, name: 'Paul Manafort', icon: 'person' },
        { id: 13, name: 'Carter Page', icon: 'person' },
        { id: 14, name: 'Rodge Stone', icon: 'person' },
        { id: 15, name: 'Guccifer 2.0', icon: 'person' }
      ]
    }
  ];
  options = {};

  f1() : void{
    console.log("hi");

  }
}
