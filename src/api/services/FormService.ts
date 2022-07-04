import { Firestore, getDoc, FirestoreError, collection, doc, setDoc, updateDoc, query, orderBy, startAt, endAt, getDocs, } from 'firebase/firestore';
import { db } from '../firebase';

class FormService {
  private db: Firestore;

  constructor() {
    this.db = db;
  }
    
  async saveForm(params: any) {
    try {
      const docRef = doc(collection(this.db, 'forms'));
      await setDoc(docRef, {
        ...params,
        createdAt: new Date(),
      });

      const snapshot = await getDoc(docRef);
      return snapshot.data();
    }
    catch (err: any) {
      const error: FirestoreError = err;
      return Promise.reject(error.message);
    }
  }
}

export default new FormService();