import { Component } from '@angular/core';
import { ApiDBService } from './services/api-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API';
apigetdata: any;
constructor(private api : ApiDBService) {

}
ngOnInit(){
  this.getApiData();
}
  getApiData()
  {
    this.api.get().subscribe(
      (data)=>{
        this.apigetdata=data;
        console.log(this.apigetdata);
        
      }
      
    )
  }
}
