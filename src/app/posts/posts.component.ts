import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})



export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: PostService){
  }
  ngOnInit() {
    this.service.getPosts().subscribe(
    response => {
      this.posts = response
    },
    error => {
      alert('An unexpected error occured')
      console.log(error)
    })
  }


  addInput(input: HTMLInputElement){
    const post:any = {title: input.value}
    input.value=''
    this.service.createPost(post).subscribe(
    response => {
      post.id = response.id
      this.posts.splice(0,0,post);
    },
    error => {
      alert('An unexpected error occured')
      console.log(error)
    })
  }

  updateInput(post:any){
    this.service.updatePost(post).subscribe(
    response => {
      console.log(response)
    },
    error => {
      alert('An unexpected error occured')
      console.log(error)
    })
  }

  deletePost(post:any){
    this.service.deletePost(post.id).subscribe({
    next:(response: any) => {
      console.log('Response:',response)
        const index = this.posts.indexOf(post);
      console.log('Index:',index)

        if(response.status===200){
          this.posts.splice(index,1)
          console.log('post deleted successfully')
        }
        else if(response.status===404){
          alert('This post has already been deleted')
        }
        else{
          alert('An unexpexted error occured')
          console.log('Eror response',response)
        }
      
    },
    error: (error:any) => {
        alert('An unexpected error occured')
        console.error('Error',error) 
    }})
  }

}


