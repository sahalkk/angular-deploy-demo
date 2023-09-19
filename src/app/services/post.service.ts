import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PostResponse{
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}
    getPosts(){
      return this.httpClient.get<any[]>(this.url)
    }

    createPost(post: any){
      return this.httpClient.post<PostResponse>(this.url, post)
    }

    updatePost(post: any){
      return this.httpClient.patch<PostResponse>(this.url+'/'+post.id, post)
    }

    deletePost(post: any){
      return this.httpClient.delete<PostResponse>(this.url+'/'+post.id, post)
    }
   
}
