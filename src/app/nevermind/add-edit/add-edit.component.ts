import { Input,Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service'
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  @Input() temp: any; 
  id:string | undefined;
  name:string | undefined;
  constructor(private service:SharedService) { }
  ngOnInit(): void {
    this.id = this.temp.id;
    this.name = this.temp.name;
  }
  addName(){
    var val = {id:this.id,
              name:this.name};
    this.service.addNevermind(val).subscribe(res=>{
      alert(res.toString())
    });
  } 

  updateName()
  {
    var val = {id:this.id,
      name:this.name};
    this.service.updateNevermind(val).subscribe(res=>{
      alert(res.toString())
    });
  }
}
