import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
    declarations: [HomeComponent],
    imports: [BrowserModule, CommonModule],
    exports: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
