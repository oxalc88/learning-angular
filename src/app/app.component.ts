import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Oxalc';
  age: number = 23;
  img: string = 'https://www.fayerwayer.com/resizer/j5t99xUsygsnO8VAhqzTEvzC9l8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg';
  btnDisable: boolean = true;
  person = {
    name: 'Kanelita',
    age: 3,
    avatar: 'https://adoptist.com/wp-content/uploads/2020/07/66D8E571-5E50-4084-A556-5E8A037C7E15-800x600.jpeg'
  }

  names: string[] = ['Raul', 'Nico', 'Daniel', 'Silvia'];
  newName = '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  ageIncrement() {
    this.person.age += 1
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = ''
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }
}
