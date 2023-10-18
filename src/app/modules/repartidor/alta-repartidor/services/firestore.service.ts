import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  save(data: any, path: string) {
    const col = collection(this.firestore, path);
    addDoc(col, data);
  }

  async get(path: string): Promise<any[]> {
    const col = collection(this.firestore, path);

    try {
      const querySnapshot = await getDocs(col);
      const repartidores = querySnapshot.docs.map(doc => doc.data());
      return repartidores;
    } catch (error) {
      throw error;
    }
  }
}
