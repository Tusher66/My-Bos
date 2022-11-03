import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data=[
    {
      "name":"book",
      "value":1455
    },
    {
      "name":"book",
      "value":1455
    },
    {
      "name":"book",
      "value":1455
    }
  ];

  colorScheme:any = {
    domain: ['#08DDC1', '#FFDC1B', '#FF5E3A']
  };

  view: any = [200, 200];


  // options
  // responsive: true;
  showLegend: boolean = false;
  showLabels: boolean = false;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  // colorScheme = {
  //   domain: ['#50E87B', '#FF5252', '#03A9F4']
  // };

  // @Input() collapsed=false;
  // @Input() screenWidth=0;
  constructor() { }

  ngOnInit(): void {
  }

  // getBodyClass(): string{
  //   let styleClass='';
  //   if(this.collapsed && this.screenWidth>768){
  //     styleClass='body-trimmed';

  //   }

  //   else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 ){
  //     styleClass='body-md-screen'
  //   }
  //   return styleClass;
  // }

}
