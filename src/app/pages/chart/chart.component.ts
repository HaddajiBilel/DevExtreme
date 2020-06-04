import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiCommService } from '../../shared/services/api-comm.service'
import { DxChartComponent } from 'devextreme-angular';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
  visualRange: any = {};
  public data =[];
  public Stockdata=[];

  constructor(private dataService: ApiCommService) { 
    this.dataService.sendGetRequest().subscribe((Data: any[])=>{
      
      for (let item in Data) {
        console.log(item);
        let ticker=
        {
           time: new Date(Data[item]['date']),
           open: Number(Data[item]['open']), 
           high: Number(Data[item]['high']), 
           low: Number(Data[item]['low']), 
           close: Number(Data[item]['close']), 
           volume: Number(Data[item]['volume']) 
        };
        this.data.push(ticker)
    }
    })

  }

  legendClick(e: any) {
    var series = e.target;
    if(series.isVisible()) { 
        series.hide();
    } else {
        series.show();
    }
  }

  valueChanged(e: any) {
    this.chart.instance.zoomArgument(new Date(e.value[0]), new Date(e.value[1]));
  }
  
  ngOnInit() {
    
  }

}
