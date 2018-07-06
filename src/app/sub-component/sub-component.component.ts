import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent implements OnInit {

    public students = [];

    constructor(private _studservice:StudentServiceService)
    {
    }

    ngOnInit()  
    {
      this._studservice.GetStudentDetails()
      .subscribe(data=>this.students=data);
    }
}
