import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridComponent }  from './grid';
import { PropertyComponent }    from './property';
import { TemplateContainerComponent }    from './template-editor-viewer-container';

const appRoutes: Routes = [
  { path: '', component: GridComponent },
  { path: 'editor', component: TemplateContainerComponent },
  { path: 'property', component: PropertyComponent },
  

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
