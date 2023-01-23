import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 user = new User();
 allUsers: any = [];
 
  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });
  }



  ngOnInit(): void {
    this.firestore.collection('users').valueChanges({idField: 'customIdName'}).subscribe((changes: any) => {
      console.log('zeigen', changes)
      
      this.allUsers = changes;
    })
  }

}
