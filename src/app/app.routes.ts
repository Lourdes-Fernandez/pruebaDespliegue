import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { Test2Component } from './pages/test2/test2.component';

export const routes: Routes = [
    {
        path: '',
        component: TestComponent
    },
    {
        path: 'test2',
        component: Test2Component
    }
];
