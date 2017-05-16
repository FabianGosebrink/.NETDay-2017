import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuration } from './configuration/app.configuration';

@NgModule({
    imports: [
        // Modules
        CommonModule,
        RouterModule
    ],

    declarations: [
        // Components & directives
        NavigationComponent
    ],

    providers: [
        // Services
        Configuration
    ],

    exports: [
        NavigationComponent
    ]
})

export class SharedModule { }

