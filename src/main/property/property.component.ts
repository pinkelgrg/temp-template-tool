import { Component, OnInit, Input } from "@angular/core";
import {SelectItem} from "primeng/primeng";
import {TemplateData} from "./../shared/template-data";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-property",
  templateUrl: "./property.component.html",
  styleUrls: ["./property.component.css"]
})
export class PropertyComponent {
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
  
  templateEngineList :any= [
    {
      "key" : "Choose...",
      "value" : ""
    },{
      "key" : "String Replacement",
      "value" : "0"
    },{
      "key" : "Handlebars",
      "value" : "10"
    }
    // These options are will be supported by adTag BE in the future.
    // ,{
    //   "key" : "Handlebars with Pre-Compiled",
    //   "value" : "11"
    // },{
    //   "key" : "Handlebars with Client-Side Rendering",
    //   "value" : "12"
    // }
  ]
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
      "value" :""
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
  ];
  platformList: any = [
    {
      "key" : "Platform",
      "value" : ""
    },{
      "key" : "Desktop",
      "value" : "Desktop"
    },{
      "key" : "Mobile",
      "value" : "Mobile"
    },{
      "key" : "Desktop and Mobile",
      "value" : "Desktop and Mobile"
    }
  ]
  model = new TemplateData(this.publisherName,this.noOfAds,this.imageSize,this.hasThumbnails,this.platform,this.longAds,this.height,this.width,this.autoFit,this.templateVersion,this.autoDelay,this.templateEngine,this.html);
  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log(this.publisherName);
    console.log(this.noOfAds);
  }
  
  updatePublisher(event){
    this.publisherName = event.target.value;
    console.log(this.publisherName);
  }

  updateNoOfAds(event){        
    this.noOfAds = parseInt(event.target.value.trim(),10);
    console.log(this.noOfAds);
  }
  
  updateImageSize(event){
    this.imageSize = event.target.value.trim();
    console.log(this.imageSize);
  }
  
  updateHasThumbnails(event){    
    this.hasThumbnails = parseInt(event.target.value.trim(),10);
    console.log(this.hasThumbnails);
  }

  updatePlatform(event){
    this.platform = event.target.value.trim();
    console.log(this.platform);
  }
  updateLongAds(event){    
    this.longAds = parseInt(event.target.value.trim(),10);
    console.log(this.longAds);
  }
  updateHeight(event){
    this.height = event.target.value.trim();
    console.log(this.height);
  }
  updateWidth(event){
    this.width = event.target.value.trim();
    console.log(this.width);
  }
  updateAutoFit(event){
    this.autoFit = parseInt(event.target.value.trim(),10);
    console.log(this.autoFit);
  }
  updateTemplateVersion(event){
    this.templateVersion = event.target.value.trim();
    console.log(this.templateVersion);
  }
  updateAutoDelay(event){
    this.autoDelay = parseInt(event.target.value.trim(),10);
    console.log(this.autoDelay);
  }
  updateTemplateEngine(event){
    this.templateEngine = parseInt(event.target.value.trim(),10);
    console.log(this.templateEngine);
  }
  propertyFormSubmit(){
    let link = ['/editor'];
    this.router.navigate(link);
  }

}
 