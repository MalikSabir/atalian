import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../api-services/api-services.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public data = [
    {name: 'Ajay', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'Jas', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
  ];


  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  orderList: any;
  orders: any;
  // public order: Orders[]=[];
  

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();


  public date: any;
  constructor(private apiServices: ApiServicesService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    this.apiServices.getOrders().subscribe(res=>{
      this.orderList=JSON.parse(res.res.body).orders;
      this.orders=JSON.parse(res.res.body).orders;
      this.date = this.datepipe.transform(this.orderList[0].created_at, 'yyyy/MM/dd');
    })
  }

  viewDetail(id: string){
    localStorage.setItem("product_id",id);
  }

}
