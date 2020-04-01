import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
@Injectable()
export class LocalStorageService {

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {};

    public setStorage(gridObject: string){
        this.storage.set('data', gridObject);
    }
    public getStorage(){
        return this.storage.get('data');
    }
}
