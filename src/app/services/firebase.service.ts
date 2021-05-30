import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Account } from '../shared/models/account.model'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) { }

  get(collectionName: string): Observable<Account[]> {
    return this.firestore.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('accountType', 'asc');
      return query;
    }).valueChanges() as Observable<Account[]>;
  }

  async add(collectionName: string, data: Account, id?: string): Promise<string> {
    const uid = id ? id : this.firestore.createId();
    data.id = uid;
    await this.firestore.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  getRichest(collectionName: string): Observable<Account[]> {
    return this.firestore.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('creditLimit', ">=", 50000);
      return query;
    }).valueChanges() as Observable<Account[]>;
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.firestore.collection(collectionName).doc(id).valueChanges();
  }

  update(collectionName: string, id: string, data: any) {
    return this.firestore.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id: string) {
    return this.firestore.collection(collectionName).doc(id).delete();
  }
}
