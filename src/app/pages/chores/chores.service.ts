import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notas } from 'src/app/shared/models/notas.interface';

@Injectable({
  providedIn: 'root',
})
export class ChoresService {
  notas!: Observable<Notas[]>;

  private notasCollection!: AngularFirestoreCollection<Notas>;

  constructor(private readonly afs: AngularFirestore) {
    this.notasCollection = this.afs.collection<Notas>('notas');
    this.getNote();
  }

  onDeleteNote(nid: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await this.notasCollection.doc(nid).delete();
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  }

  onSaveNote(nota: Notas, nid: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = nid || this.afs.createId();
        const data = { id, ...nota };
        const res = await this.notasCollection.doc(id).set(data);
        resolve(res);
      } catch (err) {
        return err;
      }
    });
  }

  getNote(): void {
    this.notas = this.notasCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Notas))
      );
  }
}
