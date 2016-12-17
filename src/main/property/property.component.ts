import { Component, OnInit, Input } from "@angular/core";
import {SelectItem} from "primeng/primeng";
import {TemplateData} from "./../shared/template-data";
@Component({
  selector: "app-property",
  templateUrl: "./property.component.html",
  styleUrls: ["./property.component.css"]
})
export class PropertyComponent implements OnInit {  
  publisherName: String;
  noOfAds: Number;
  imageSize: String;
  hasThumbnails: Number;
  platform: String;
  longAds: Number;
  height: String;
  width: String;
  autoFit: Number;
  templateVersion: String;
  autoDelay: Number;
  templateEngine: Number;
  html: String;
  
  boolList: any=[
    {
      "key" : "Choose...",
      "value" : ""
    },{
      "key" : "True",
      "value" : 1
    },{
      "key" : "False",
      "value" : 0
    }
  ]

  noOfAdslist: any = [
    {
      "key" : "No of Ads",
      "value" : 0
    },{
      "key" : 1,
      "value" : 1
    },{
      "key" : 2,
      "value" : 2
    },{
      "key" : 3,
      "value" : 3
    },{
      "key" : 4,
      "value" : 4
    },{
      "key" : 5,
      "value" : 5
    },{
      "key" : 6,
      "value" : 6
    },{
      "key" : 7,
      "value" : 7
    },{
      "key" : 8,
      "value" : 8
    },{
      "key" : 9,
      "value" : 9
    },{
      "key" : 10,
      "value" : 10
    }
  ]
  model = new TemplateData(this.publisherName,this.noOfAds,this.imageSize,this.hasThumbnails,this.platform,this.longAds,this.height,this.width,this.autoFit,this.templateVersion,this.autoDelay,this.templateEngine,this.html);
  constructor() {
    
  }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log(this.publisherName);
    console.log(this.noOfAds);
  }
  
  updatePublisher(event){
    this.publisherName = event.target.value;
  }

  updateNoOfAds(event){        
    this.noOfAds = parseInt(event.target.value.trim(),10);
  }
  
  updateImageSize(event){
    this.imageSize = event.target.value.trim();
  }
  
  updateHasThumbnails(event){
    debugger;
    this.hasThumbnails = parseInt(event.target.value.trim(),10);
  }


}
 