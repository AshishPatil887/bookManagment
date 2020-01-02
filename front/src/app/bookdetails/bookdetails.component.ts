import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
bookData:any;
  constructor(public Auth:AuthService,public router:Router) {
    
    this.Auth.get_booksList()
    .subscribe(result=>{
        console.log(result);
        this.bookData=result;
        
    })
   }

  ngOnInit() {
  }

  edit(id){
    
   
    this.router.navigate(['/books', { id: id }]);
  }


  delete(id){
    const req={
      _id:id
    }
    this.Auth.BooksDelete(req)
    .subscribe(result=>{
        console.log(result);
        this.bookData=result;
        if(this.bookData.success){
          this.Auth.get_booksList()
            .subscribe(result=>{
                console.log(result);
                this.bookData=result;
        
          })
        }
    })
  }

  goto(){
    this.router.navigateByUrl('books');
  }
}
