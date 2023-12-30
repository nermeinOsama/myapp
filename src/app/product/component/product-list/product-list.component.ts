import { Component } from '@angular/core';
import { IAlert } from 'ngx-mui-kit/components/muk-alert';
import { ButtonType, IButton, MukButtonTypes, MukThemePalette, TooltipPositions } from 'ngx-mui-kit/components/muk-button';
import { ICard } from 'ngx-mui-kit/components/muk-cards';
import { Observable } from 'rxjs';
import { GeneralService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  allshow$!: Observable<any[]>;
  photos: ICard[] =[]
  users:any =[]

  length: number = 30;
  pageIndex: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [10, 25, 50];
  isDisabled: boolean = false;
  isShowFirstLastButtons: boolean = true;
  isHidePageSize: boolean = false;
  currentPage: number = 0;
  id: string = "";
  previousLabel: string = "";
  nextLabel: string = "";

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
  //  this.getAllphotos()
   this.getAllUsers()
  }

  alert: IAlert = {
    direction: "ltr",
    panelClass: "class",
    message: "get data successfully!",
    action: "Close",
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top",
  };

  getAllphotos() {
    
    // this.isLoading = true;
   this.generalService.getAllphotos()
    .subscribe(res => {
      if (res) {
      
          this.photos = res.map(
            (photo) => {
              return {
                title: photo.title,
                subtitle: photo.albumId,
                image: photo.url,
                "buttons": [
                  {
                    text:'Add',
                    isMukButton:false,
                    isLoading:false,
                    color:MukThemePalette.Primary,
                    matType:MukButtonTypes.Raised,
                    spinnerColor:'white',
                    icon:'add',
                    isDisabled:false,
                    type:ButtonType.Button,
                    toolTip:{
                    position: TooltipPositions.Below,
                    toolTip: 'Add'
                    },
                    onClick:(e:any)=>{
                    console.log('event',e)
                    }
                  },
                  
                  {
                    text:'Edit',
                    isMukButton:false,
                    isLoading:false,
                    color:MukThemePalette.Warn,
                    matType:MukButtonTypes.Raised,
                    spinnerColor:'white',
                    icon:'edit',
                    isDisabled:false,
                    type:ButtonType.Button,
                    toolTip:{
                    position: TooltipPositions.Below,
                    toolTip: 'edit'
                    },
                    onClick:(e:any)=>{
                    console.log('event',e)
                    }
                  },
            
                
            
                ],
                "alignActions": "start"
              };
            }
          );
          
        }
        else{
          console.log('error')
        }
      
    })
       
  }
  getAllUsers() {
    this.generalService.getAllUsers()
     .subscribe(res => {
       if (res) {
         {
           
           this.users = res.map(
             (user) => {
               return {
                
                title: user.id,
                subtitle: user.name,
                image:'https://fakeimg.pl/300/',
                "buttons": [
                {
                  text:'Add',
                  isMukButton:false,
                  isLoading:false,
                  color:MukThemePalette.Primary,
                  matType:MukButtonTypes.Raised,
                  spinnerColor:'white',
                  icon:'add',
                  isDisabled:false,
                  type:ButtonType.Button,
                  toolTip:{
                  position: TooltipPositions.Left,
                  toolTip: 'Add'
                  },
                  onClick:(e:any)=>{
                  console.log('event',e)
                  }
                },
                
                {
                  text:'Edit',
                  isMukButton:false,
                  isLoading:false,
                  color:MukThemePalette.Warn,
                  matType:MukButtonTypes.Raised,
                  spinnerColor:'white',
                  icon:'edit',
                  isDisabled:false,
                  type:ButtonType.Button,
                  toolTip:{
                  position: TooltipPositions.Right,
                  toolTip: 'edit'
                  },
                  onClick:(e:any)=>{
                  console.log('event',e)
                  }
                },
          
              
          
              ],
              "alignActions": "start"
               };
             } 
             );
             console.log('user',this.users)
         }
     }
   
   else{
     console.log('error')
   }
   })
        
   }

 buttonConfig:IButton={
    text:'Add',
    isMukButton:false,
    isLoading:false,
    color:MukThemePalette.Primary,
    matType:MukButtonTypes.Raised,
    spinnerColor:'white',
    icon:'add',
    isDisabled:false,
    type:ButtonType.Button,
    toolTip:{
    position: TooltipPositions.Right,
    toolTip: 'Add'
    },
    onClick:(e:any)=>{
    console.log('event',e)
    }
}

onClick() {
console.log("clicked");
}

}

