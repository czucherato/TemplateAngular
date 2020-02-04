import { OnInit, Component, Inject } from '@angular/core';
import { BarService, BarServiceMock } from './bar.service';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    providers: [
        {
            provide: BarService, useClass: BarServiceMock
        }
    ]
})
export class BarComponent implements OnInit {

    constructor(
        private barService: BarService,
        @Inject('configManualUnidade') private ApiConfigManual: BarUnidadeConfig,
        @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig
        ){ }
    
    barBebida1: string;
    ConfigManual: BarUnidadeConfig;
    Config: BarUnidadeConfig;

    ngOnInit(): void {
        this.barBebida1 = this.barService.obterBebidas();
        this.ConfigManual = this.ApiConfigManual;
        this.Config = this.ApiConfig;
     }

}