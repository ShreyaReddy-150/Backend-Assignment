import { Component, OnInit } from '@angular/core';
import { Books } from '../bookInterface';
import { BookServiceService } from '../book-service.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  bookData: Books[] = []
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService.getbookDataAPI().subscribe(data => this.bookData = data)
  }
  
  delete(userId:number,bookId:number) {
    console.log('Delete Button clicked')
    this.bookService.deleteBookFromFavourites(userId,bookId).subscribe(data => {
      console.log(data);
  })
}

}
