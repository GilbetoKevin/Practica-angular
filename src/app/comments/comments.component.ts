import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentario de lo que sea</h3>
    <img src='https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg?s=1100&c=85&f=webp'>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas incidunt natus voluptates consectetur dolore ea ab veniam vitae! Nam inventore culpa rerum fuga libero ipsa ipsum dicta minus. Ad, quia?</p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto; 
  }
  `
})
export class CommentsComponent {

}
