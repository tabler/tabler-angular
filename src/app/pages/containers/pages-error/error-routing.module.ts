import { Routes } from '@angular/router'
import { PagesErrorComponent } from './pages-error.component'

export const messages = {
  400: 'We are sorry but your request contains bad syntax and cannot be fulfilled',
  401: 'We are sorry but you are not authorized to access this page',
  403: 'We are sorry but you do not have permission to access this page',
  404: 'We are sorry but our service is currently not available',
  500: 'We are sorry but your request contains bad syntax and cannot be fulfilled',
  503: 'We are sorry but our service is currently not available',
}

export const ErrorRoutes: Routes = Object
  .keys(messages).map(code => (
    {
      path: code,
      component: PagesErrorComponent,
      data: {
        code: code,
        message: messages[ code ],
      }
    }
  ))
