import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  columns:any[]=[
    {name:"col-1",size:"12",sizem:"6",sezelg:"3",sizexl:"2"},
    {name:"col-2",size:"12",sizem:"6",sezelg:"3",sizexl:"2"},
    {name:"col-3",size:"12",sizem:"6",sezelg:"3",sizexl:"2"},
    {name:"col-4",size:"12",sizem:"6",sezelg:"3",sizexl:"2"},
    {name:"col-5",size:"12",sizem:"6",sezelg:"3",sizexl:"2"},
    {name:"col-6",size:"12",sizem:"6",sezelg:"3",sizexl:"2"},
    {name:"col-7",size:"12",sizem:"6",sezelg:"3",sizexl:"2"},
    {name:"col-8",size:"12",sizem:"6",sezelg:"3",sizexl:"2"},
  ];
  list:string[]=['Super Mario World','Pokémon Yellow','Mega Man X','The Legend of Zelda','Super Mario World','Pokémon Yellow','Mega Man X','The Legend of Zelda','Super Mario World','Pokémon Yellow','Mega Man X','The Legend of Zelda','Super Mario World','Pokémon Yellow','Mega Man X','The Legend of Zelda'];
  constructor() { }

  ngOnInit() {
  }

}
