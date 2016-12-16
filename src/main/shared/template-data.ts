import {TemplateDataInterface} from "./template-data-interface";

export class TemplateData implements TemplateDataInterface {

    constructor(public publisherName: String,public noOfAds: Number,public imageSize: String,public hasThumbnails: Number,public platform: String,public longAds: Number,public height: String,public width: String,public autoFit: Number,public templateVersion: String,public autoDelay: Number,public templateEngine: Number,public html: String) {}
}