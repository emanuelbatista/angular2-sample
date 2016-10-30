import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TestListComponent} from './test-list/test-list.component';

const appRoutes: Routes=
[{
    path: "list",
    component: TestListComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);