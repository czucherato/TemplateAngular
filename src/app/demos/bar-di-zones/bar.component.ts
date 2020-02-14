import { HttpClient } from '@angular/common/http';
import { OnInit, Component, Inject, Injector } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarService, BarServiceMock, BarFactory, BebidaService } from './bar.service';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    providers: [
        {
            provide: BarService, useClass: BarServiceMock
        },
        {
            provide: BarService, useFactory: BarFactory,
            deps: [
                // HttpClient, BAR_UNIDADE_CONFIG
                HttpClient, Injector
            ]
        },
        {
            provide: BebidaService, useExisting: BarService
        }
    ]
})
export class BarComponent implements OnInit {

    constructor(
        private barService: BarService,
        @Inject('configManualUnidade') private ApiConfigManual: BarUnidadeConfig,
        @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
        private bebidaService: BebidaService
        ){ }
    
    barBebida1: string;
    barBebida2: string;
    ConfigManual: BarUnidadeConfig;
    Config: BarUnidadeConfig;
    dadosUnidade: string;

    ngOnInit(): void {
        this.barBebida1 = this.barService.obterBebidas();
        this.ConfigManual = this.ApiConfigManual;
        this.Config = this.ApiConfig;
        this.dadosUnidade = this.barService.obterUnidade();
        this.barBebida2 = this.bebidaService.obterBebidas();
     }

}