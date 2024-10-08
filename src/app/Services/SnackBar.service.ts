import { Injectable } from '@angular/core';
import { ToastContent } from 'carbon-components-angular';
import { Subject } from 'rxjs';
import { SnackBarType } from '../Enum/SnackBarType.enum';

@Injectable({
  providedIn: 'root'
})

export class SnackBarService {

  constructor() { }

  private showSnackBarSubject = new Subject<void>();
  private hideSnackBarSubject = new Subject<void>();
  private refreshSnackBarSubject = new Subject<ToastContent>();

  showSnackBar$ = this.showSnackBarSubject.asObservable();
  hideSnackBar$ = this.hideSnackBarSubject.asObservable();
  refreshSnackBar$ = this.refreshSnackBarSubject.asObservable();

  public show() {
    this.showSnackBarSubject.next();
  }

  public refresh(notifica: ToastContent) {
    this.refreshSnackBarSubject.next(notifica);
  }

  public hide() {
    this.hideSnackBarSubject.next();
  }

  // Metodi per return oggetto notifica in base ai casi
  public GetSuccessObj(type: SnackBarType , title: string, subtitle: string, caption: string): any {

    var data: ToastContent = {
      type: 'success',
      title: title,
      subtitle: subtitle,
      caption: caption,
      smart: true,      
      lowContrast: true,
      showClose: false,
    }

    var notifica = {
      type: type,
      data: data
    }

    return notifica
  }

  public GetErrorObj(type: SnackBarType, title: string, subtitle: string, caption: string): any {

    var data: ToastContent = {
      type: 'error',
      title: title,
      subtitle: subtitle,
      caption: caption,
      smart: true,      
      lowContrast: true,
      showClose: false,
    }

    var notifica = {
      type: type,
      data: data
    }

    return notifica
  }
}
