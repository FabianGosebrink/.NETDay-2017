import { AbstractNotificationService, MessageType } from './notification.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DesktopNotificationService implements AbstractNotificationService {

    showNotification(type: MessageType, title: string, message: string, icon?: string): void {

        if (!Notification) {
            alert('Desktop notifications not available in your browser. Try Chromium.');
            return;
        }

        let messageBody: NotificationOptions = {};

        messageBody.body = message;

        if (icon) {
            messageBody.icon = icon;
        }

        let titleToShow = MessageType[type] + ': ' + title;

        Notification.requestPermission().then(() => {
            let myNotification = new Notification(titleToShow, messageBody);
        });
    }
}
