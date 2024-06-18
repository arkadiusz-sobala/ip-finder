import { Component, OnInit } from '@angular/core';
import { catchError, filter, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IpSearchService } from 'src/data-access/ip-search.service';
import { ipInfoDTO } from 'src/models/ip-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  searchAddressLoading: boolean;
  userAddressInfo: ipInfoDTO;
  searchedAddressInfo: ipInfoDTO;
  searchHistory: ipInfoDTO[] = [];

  constructor(
    private _ipSearchService: IpSearchService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._getUserAddressInfo();
  }

  getAddressInfo(address: string): void {
    if (!address) {
      this._openSnackbar('No address provided');
      return;
    }
    this._setSearchAddressLoading(true);
    this._fetchAddressInfo(address).subscribe((res) => {
      this.searchedAddressInfo = res;
      this.searchHistory = [res, ...this.searchHistory];
    });
  }

  private _getUserAddressInfo(): void {
    this._fetchAddressInfo('').subscribe((response) => {
      this.userAddressInfo = response;
    });
  }

  private _fetchAddressInfo(address: string): Observable<ipInfoDTO> {
    return this._ipSearchService.getAddressInfo(address).pipe(
      tap(() => this._setSearchAddressLoading(false)),
      tap(({ status }) => this._handleFailedStatus(status)),
      filter(({ status }) => status !== 'fail'),
      catchError(() => {
        this._handleError();
        throw Error;
      })
    );
  }

  private _setSearchAddressLoading(value: boolean): void {
    this.searchAddressLoading = value;
  }

  private _handleFailedStatus(status: string): void {
    if (status === 'fail') {
      this.searchedAddressInfo = undefined;
      this._openSnackbar('Address not found');
    }
  }

  private _handleError(): void {
    this.searchedAddressInfo = undefined;
    this._openSnackbar('Something went wrong');
    this._setSearchAddressLoading(false);
  }

  private _openSnackbar(message: string): void {
    this._snackBar.open(message, null, { duration: 5000 });
  }
}
