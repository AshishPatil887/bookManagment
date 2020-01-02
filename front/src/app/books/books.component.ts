import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookform: FormGroup;
  submitted = false;
  _id
  showmsg:boolean;
  showmsg1:boolean;
  constructor(private formBuilder: FormBuilder,
              public router:Router,
              public Auth:AuthService,
              private activatedRoute: ActivatedRoute,) { 
                this.activatedRoute.params.subscribe(params => {
                  this._id = params['id'];
                 
                  });
                  console.log(this._id);
                  
              }

  ngOnInit() {
      this.bookform = this.formBuilder.group({  
          bookName: ['', Validators.required],
          bookAuther: ['', Validators.required],
          bookType: ['', Validators.required],
          bookprize: ['', Validators.required],
          bookdesc: ['', Validators.required]
        
      });

      if(this._id){
        const req={
          _id:this._id
        }
        this.Auth.singleBooksList(req)
        .subscribe(result=>{
            console.log(result);
            let data=result
            this.bookform.controls.bookName.setValue(data['bookName']);
            this.bookform.controls.bookAuther.setValue(data['bookAuther']);
            this.bookform.controls.bookType.setValue(data['bookType']);
            this.bookform.controls.bookprize.setValue(data['bookPrice']);
            this.bookform.controls.bookdesc.setValue(data['bookDesc']);
            
        })
      }
  }

  
  get f() { return this.bookform.controls; }

  onSubmit() {
   if(this._id){
    const req ={
      _id:this._id,
      bookName: this.bookform.value.bookName,
      bookAuther:this.bookform.value.bookAuther,
      bookType: this.bookform.value.bookType,
      bookPrice: this.bookform.value.bookprize,
      bookDesc: this.bookform.value.bookdesc
    }

   this.Auth.editBooks(req)
   .subscribe(result=>{
       console.log(result);
       if(result['success']){
        this.showmsg1=true;
        setTimeout(() => {
         
          this.showmsg1=false;
          this.router.navigateByUrl('booksDetails');
         }, 2000);
         this.showmsg1=true;
         
       }
       
       
   })
   }else{
      const req ={
        bookName: this.bookform.value.bookName,
        bookAuther:this.bookform.value.bookAuther,
        bookType: this.bookform.value.bookType,
        bookPrice: this.bookform.value.bookprize,
        bookDesc: this.bookform.value.bookdesc
      }

     this.Auth.ragister_books(req)
     .subscribe(result=>{
         console.log(result['success']);
         if(result['success']){
          this.showmsg=true;
          setTimeout(() => {
           
            this.showmsg=false;
            this.router.navigateByUrl('booksDetails');
           }, 2000);
           this.showmsg=true;
           
         }
       
         
     })
 
    }
  }

  goto(){
    this.router.navigateByUrl('booksDetails'); 
  }


}
