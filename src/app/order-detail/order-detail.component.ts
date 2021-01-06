import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../api-services/api-services.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor(private apiServices: ApiServicesService, public datepipe: DatePipe) { }
  orderDetail: any;
  itemDetail: any;
  shippingLine: any;
  total: any;
  id=null;
  ip=null;
  shipping_address="No shipping address set."
  first_name=null;
  last_name=null;
  address=null;
  email=null;
  phone=null;
  date: any;
  time: any;
  status= null;
  quantity=null;
  name=null;
  ngOnInit(): void {
    this.apiServices.getOneOrder().subscribe(res=>{
      this.orderDetail=JSON.parse(res.res.body).order;
      this.itemDetail=JSON.parse(res.res.body).order.line_items;
      this.shippingLine=JSON.parse(res.res.body).order.shipping_lines;
      this.total=JSON.parse(res.res.body).order.total;
      this.id=this.orderDetail.id;
      this.ip=this.orderDetail.customer_ip;
      this.shipping_address=this.orderDetail.shipping_address.address_1;
      this.first_name=this.orderDetail.billing_address.first_name;
      this.last_name=this.orderDetail.billing_address.last_name;
      this.address=this.orderDetail.billing_address.address_1;
      this.email=this.orderDetail.billing_address.email;
      this.phone=this.orderDetail.billing_address.phone;
      this.quantity=this.orderDetail.total_line_items_quantity;
      this.name=this.orderDetail.line_items.name;
      this.date = this.datepipe.transform(this.orderDetail.created_at, 'yyyy/MM/dd');
      this.time = this.datepipe.transform(this.orderDetail.created_at, 'HH:MM');
    })
  }
}
