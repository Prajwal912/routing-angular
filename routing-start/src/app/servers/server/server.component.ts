import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
   let id =  +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params['id'])
    })
  }
  routeEdit(){
    //usual method to route
    // this.router.navigate(['/servers', this.server.id,'edit-server'])

    //easy way to route
    this.router.navigate(['edit-server'], {relativeTo: this.route, queryParamsHandling: 'preserve'} )
  }

}
