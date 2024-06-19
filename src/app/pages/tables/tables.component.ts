import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { onValue  } from '@angular/fire/database';
import { TableStatus } from './models/table-status';
import { initialData } from './data/initial-data';
import { Table } from './models/table';
import { FirebaseDatabaseService } from '../../services/firebase-database.service';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  tablesNumbers : number[][] = [];
  tablesCount : number = 0;
  disponivel : number = 0;
  clean : number = 0;
  waitingPayment : number = 0;
  fowardKitchen : number = 0;
  readyToDeliver : number = 0;

  tables : Table[] = []

  constructor(private firebaseDabaseService:FirebaseDatabaseService) {
    var dataRef = firebaseDabaseService.getDataRef();

    onValue(dataRef, (snapshot:any) => {
      const data = snapshot.val();
      if(data == null) {
        firebaseDabaseService.configureInitialData(initialData);
        this.tables = initialData;
      }else{
        this.tables = data;
        this.transformData();
    }});
  }

  transformData(){
    this.tablesNumbers = [];
    this.tablesCount = 0;
    this.disponivel = 0;
    this.clean = 0;
    this.waitingPayment = 0;
    this.fowardKitchen = 0;
    this.readyToDeliver = 0;

    for(let i=0; i < this.tables.length / 4; i++){
      let arr = [];
      for(let j=0; (i * 4 + j < this.tables.length && j < 4); j++){
        arr.push(this.tables[i * 4 + j].id)
        switch (this.tables[i * 4 + j].status) {
          case TableStatus.Free:
            this.disponivel++;
            break;
          case TableStatus.FowardKitchen:
            this.fowardKitchen++;
            break;
          case TableStatus.ReadyToDeliver:
            this.readyToDeliver++;
            break;
          case TableStatus.WaitingPayment:
            this.waitingPayment++;
            break;
          case TableStatus.ToClean:
            this.clean++;
            break;
          default:
            break;
        }
      }
      this.tablesNumbers.push(arr);
    }
    this.tablesCount = this.tables.length;
  }

  changeStatus(index:any){
    if(this.tables[index].status == TableStatus.ToClean){
      this.tables[index].status = TableStatus.Free;
    }else{
      this.tables[index].status = this.tables[index].status + 1;
    }
    this.transformData();
  }
}



