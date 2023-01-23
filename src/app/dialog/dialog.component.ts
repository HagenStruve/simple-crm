import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  data: any;
  picker1: any;
  user = new User();
  birthDate!: Date;
  result: any
  loading = false;


  constructor(public dialogRef: MatDialogRef<DialogComponent>, private firestore: AngularFirestore) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();

    this.firestore.collection('users').add(this.user.toJSON()).then((result) => {
    });
    
 
    setTimeout(() => {
      this.dialogRef.close();
      this.loading = false;
    }, 3000);
    
  }


  ngOnInit(): void {
  }

}
