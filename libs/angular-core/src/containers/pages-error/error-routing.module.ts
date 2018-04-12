import { Routes } from '@angular/router'
import { PagesErrorComponent } from './pages-error.component'

export const messages = {
  '400': 'We are sorry but your request contains bad syntax and cannot be fulfilled',
  '401': 'We are sorry but you are not authorized to access this page',
  '403': 'We are sorry but you do not have permission to access this page',
  '404': 'We are sorry but our service is currently not available',
  '500': 'We are sorry but your request contains bad syntax and cannot be fulfilled',
  '503': 'We are sorry but our service is currently not available',
}

export const ErrorRoutes: Routes = [
  {
    path: '400',
    component: PagesErrorComponent,
    data: { code: '400', message: messages['400'] },
  },
  {
    path: '401',
    component: PagesErrorComponent,
    data: { code: '401', message: messages['401'] },
  },
  {
    path: '403',
    component: PagesErrorComponent,
    data: { code: '403', message: messages['403'] },
  },
  {
    path: '404',
    component: PagesErrorComponent,
    data: { code: '404', message: messages['404'] },
  },
  {
    path: '400',
    component: PagesErrorComponent,
    data: { code: '400', message: messages['400'] },
  },
  {
    path: '503',
    component: PagesErrorComponent,
    data: { code: '503', message: messages['503'] },
  },
]
