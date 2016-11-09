import {Injectable} from '@angular/core';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import { Employee } from '../models/employee.model';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable} from  'rxjs/Observable'; 
@Injectable()

export class FormPoster {

    constructor(private http: Http){

    }

    postEmployeeForm(employee: Employee):Observable<any>{
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers});
        return this.http.post('http://localhost:3100/postemployee', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    extractData(res: Response){
        let body = res.json();
        return body.data || {};
    }
    handleError(error: any){
        console.error('post error:', error);
        return Observable.throw(error.statusText);
    }
} 