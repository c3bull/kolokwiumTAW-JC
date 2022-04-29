import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JCDataService {
  public url: string = 'https://taw-posts.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getAllOrders() {
    return this.http.get(this.url + '/api/posts')
  }

  getSingleOrder(id: number) {
    return this.http.get(this.url + '/api/posts/' + id)
  }

}
