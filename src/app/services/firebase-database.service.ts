import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue, DatabaseReference  } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService{

  private dataRef : DatabaseReference;
  constructor(private database : Database) 
  { 
    this.dataRef = ref(database);
  }

  getDataRef() : DatabaseReference{
    return this.dataRef;
  }

  setRefPath(path:string){
    this.dataRef = ref(this.database, path);
  }

  configureInitialData(initialData : any[]){
    set(this.dataRef, initialData);
  }

  getDataWithCallBack(callBack:any){
    onValue(this.dataRef, (snapshot:any) => callBack(snapshot.val()));
  }
}
