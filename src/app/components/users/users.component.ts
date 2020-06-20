import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'nx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @Input() users: User[];
  constructor() {}

  ngOnInit(): void {}

  fullName = (user: User) => `${user.last_name} ${user.first_name}`;
}
