import { NgModule } from '@angular/core';
import { CollapseDirective } from './collapse/collapse.directive';

@NgModule( {
    imports: [CollapseDirective],
    exports: [CollapseDirective]
} )
export class GridModule { }
