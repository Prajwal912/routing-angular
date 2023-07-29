import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription : Subscription
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['anyId'],
      name: this.route.snapshot.params['anyName']
    }
   this.paramSubscription =  this.route.params.subscribe(
      ((params) => {
           this.user.id = params['anyId']
           this.user.name = params['anyName']
      })
    )
  }

  ngOnDestroy(): void {
   this.paramSubscription.unsubscribe()
  }


}
