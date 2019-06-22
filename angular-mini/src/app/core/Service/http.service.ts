import { Injectable } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders, HttpHeaderResponse, } from '@angular/common/http';
import { Options } from 'selenium-webdriver/edge';
// import { FileSaverService } from 'ngx-filesaver';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private url = 'http://localhost:28526/api/';
    private headers = new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    });
    private headersFile = new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
    });


    private httpOptions = ({ headers: this.headers, withCredentials: true });
    private httpOptionsFile = ({ headers: this.headersFile, withCredentials: true, responseType: 'blob' });


    constructor(private http: HttpClient,
                // private _FileSaverService: FileSaverService
    ) { }

    get(api) {
        return this.http
            .get(this.url + api, this.httpOptions )
            .pipe(res  => res);
    }
    getFile(api) {
        return this.http
            .get(this.url + api, this.httpOptions )
            .pipe(res  => res);
    }
    post(api: string, data: any) {
        return this.http
            .post(this.url + api,  data, this.httpOptions)
            .pipe(response => response);

    }
    put(api, data) {
        return this.http
            .put(this.url + api,  data, this.httpOptions)
            .pipe(response => response);
    }
    postFile(api, data: any) {
        return this.http
        // @ts-ignore
            .post(this.url + api,  data, this.httpOptionsFile)
            .pipe(response => response);

    }

    makeFileRequest(api: string, files: Array<File>) {
        return new Promise((resolve, reject) => {
            const formData: any = new FormData();
            let xhr = new XMLHttpRequest();
            formData.append('file', files[0]);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', this.url + api, true);
            xhr.withCredentials = true;
            xhr.send(formData);
        });
    }

    DownFile(api, data: any) {
        // @ts-ignore
        return this.http.post(this.url + api, data, this.httpOptionsFile).pipe(map ((res: Response) => {
            return res; // new Blob([res.blob()], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        }));
    }

}
