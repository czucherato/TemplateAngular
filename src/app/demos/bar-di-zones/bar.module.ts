import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [BarComponent],
    exports: [BarComponent]
})
export class BarModule {
    static forRoot(config: BarUnidadeConfig): ModuleWithProviders {
        return {
            ngModule: BarModule,
            providers: [
                { provide: 'configManualUnidade', useValue: config },
                { provide: BAR_UNIDADE_CONFIG, useValue: config }
            ]
        }
    }

    static forChild() {

    }
 }