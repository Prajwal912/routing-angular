import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['anyId'],
      name: this.route.snapshot.params['anyName']
    }
    this.route.params.subscribe(
      ((params) => {
           this.user.id = params['anyId']
           this.user.name = params['anyName']
      })
    )
  }


}
