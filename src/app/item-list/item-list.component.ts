import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../item.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  
displayedColumns: string[] = ['title', 'price', 'category'];
dataSource: MatTableDataSource<any> = new MatTableDataSource([2]);
filterValue: string = '';

@ViewChild(MatSort, {static: true }) sort! : MatSort;

constructor(private itemservice : ItemService){}

ngOnInit(): void {
  this.fetchItems();
}

fetchItems(){
  this.itemservice.getItems().subscribe((data: any[]) => {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  });
}
 
// Filters value for the table data
applyFilter() {
  this.dataSource.filter = this.filterValue.trim().toLowerCase();
}

}
