import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/http/services/users/users.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  users: any = [];
  data: any = {};
  page: number = 1;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUserListing();
  }

  getUserListing() {
    this.usersService.getUsers(2).subscribe((res: any) => {
      this.data = res;
      this.users = res.data;
      console.log(this.users);
      
    });
  }

}
