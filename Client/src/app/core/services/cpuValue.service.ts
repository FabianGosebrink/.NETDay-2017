import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { PlatformInformationProvider } from './platformInformation.provider';

@Injectable()
export class CpuValueService {

    public onNewCpuValue = new EventEmitter<string>();

    constructor(
        private electronService: ElectronService,
        private ngZone: NgZone,
        private platformInformationProvider: PlatformInformationProvider) {

        if (platformInformationProvider.isElectron) {
            this.registerCpuEvent();
        }
    }

    private registerCpuEvent() {
        if (this.electronService.ipcRenderer) {
            this.electronService.ipcRenderer.on('newCpuValue', (event, data) => {
                // console.log(data);
                this.onNewCpuValue.emit(data);
            });
        }
    }
}