import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Diamond } from '../com.logiticks.diamondsale.dda';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class DiamondService {


		private NAMESPACE: string = 'Diamond';




    constructor(private dataService: DataService<Diamond>) {
    };

    public getAll(): Observable<Diamond[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Diamond> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Diamond> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Diamond> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Diamond> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
