import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service'
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  Nevermind:any = [];

  ModalTitle:string | undefined;
  ActivateAddEdit:boolean=false;
  temp:any;
  
  ngOnInit(): void {
    this.refreshNevermind();
  }

  addClick()
  {
    this.temp={
      id:0,
      name:""
    }
    this.ModalTitle = "Add Nevermind";
    this.ActivateAddEdit = true;
  }

  closeClick()
  {
    this.ActivateAddEdit = false;
    this.refreshNevermind();
  }

  editClick(item:any)
  {
    this.temp = item.id;
    this.ModalTitle = "Edit Nevermind"
    this.ActivateAddEdit = true;
  }
  deleteClick(item:any)
  {
    if(confirm("Confirm delete"))
    {
      this.service.deleteNevermind(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshNevermind();
      });
    }
  }
  refreshNevermind()
  {
    this.service.getNevermind().subscribe(data =>{
      this.Nevermind = data;
    });
  }

}
