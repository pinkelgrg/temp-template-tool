import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GridDataInterface } from '../grid/grid-data';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GridDataService {
  selectedTemplate: GridDataInterface;

  constructor(private http: Http) {}

  getGridsData() {
    return this.http.get('/src/main/services/mock-grid_data.json')
    .toPromise()
    .then(res => <GridDataInterface[]> res.json())
    .then(data => { return data; });
  }

  setSelectedTemplate(templ: GridDataInterface) {

    this.selectedTemplate = templ;

  }

  getSelectedTemplate() {

    return this.selectedTemplate;

  }
}
