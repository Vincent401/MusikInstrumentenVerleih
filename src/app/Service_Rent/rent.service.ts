import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Rent } from './rent.model';

@Injectable({providedIn: 'root'})
export class RentService {

    constructor(private httpClient: HttpClient,) { }

    private REST_API_SERVER = "https://localhost:8080";
   
    public sendPostRent(name: String, email: String, telefonnummer: String, straße: String, plz: number, stadt: String, iban: String, instrument: String){ 
        this.httpClient.post<any>(this.REST_API_SERVER + "/kunden", {name, email, telefonnummer, straße, plz, stadt, iban, instrument}).subscribe();        
    }  
}