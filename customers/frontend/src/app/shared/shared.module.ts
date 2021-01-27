import { NgModule } from '@angular/core'

import { CapitalizePipe } from './capitalize.pipe'

@NgModule({
  // declare pipes, components and directives
  declarations: [CapitalizePipe],

  exports: [CapitalizePipe]
})

export class SharedModule { }
