import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, Timestamp, addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc } from '@angular/fire/firestore';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzas: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.pizzas = collection(this.firestore, 'pizzas');
  }

  async getPizzasAsync() {
    const querySnapshot = await getDocs(query(this.pizzas));
    const result: Pizza[] = [];

    querySnapshot.forEach(document => {
      const data = document.data();

      const repartidor = new Pizza(
        document.id,
        data['ingredientes'],
        data['precio'],
        data['peso']);

      result.push(repartidor);
    });

    return result;
  }

  async altaPizzaAsync(objeto: Pizza) {
    try {
      // Create a DocumentReference by combining the collection reference and document name
      const pizzaDocRef = doc(this.pizzas, objeto.nombre);

      // Use setDoc with the DocumentReference to set the document
      await setDoc(pizzaDocRef, {
        ingredientes: objeto.ingredientes,
        precio: objeto.precio,
        peso: objeto.peso
      });
    } catch (err: any) {
      throw err;
    }
  }

  async bajaPizzaAsync(objeto: Pizza) {
    try {
      // Create a DocumentReference by combining the collection reference and document name
      const pizzaDocRef = doc(this.pizzas, objeto.nombre);

      // Use deleteDoc with the DocumentReference to delete the document
      await deleteDoc(pizzaDocRef);
    } catch (err: any) {
      throw err;
    }
  }

  async modificarPizzaAsync(objeto: Pizza) {
    try {
      // Create a DocumentReference by combining the collection reference and document name
      const pizzaDocRef = doc(this.pizzas, objeto.nombre);

      // Use updateDoc with the DocumentReference to update the document
      await updateDoc(pizzaDocRef, {
        ingredientes: objeto.ingredientes,
        precio: objeto.precio,
        peso: objeto.peso
      });
    } catch (err: any) {
      throw err;
    }
  }
}
