import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IAction } from 'ngx-mui-kit/common/interfaces';
import { ButtonType, IButton, MukButtonTypes, MukThemePalette, TooltipPositions } from 'ngx-mui-kit/components/muk-button';
import { ActionsStyle, Column, ITableConfig } from 'ngx-mui-kit/components/muk-table';
import { GeneralService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users:any =[]
  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.getAllUsers()
   }
   
  getAllUsers() {
   this.generalService.getAllUsers()
    .subscribe(res => {
      if (res) {
        {
          
          this.users = res
          // this.users = res.map(
          //   (user) => {
          //     return {
          //       bol1: false,
          //       bol2: false,
          //       currency1: user.id,
          //       currency2: 5555,
          //       date1: user.phone,
          //       image: 'https://fakeimg.pl/300/',
          //       text: user.name,
          //     };
          //   } 
          //   );
            // this.tableConfig.dataSource =this.users
            console.log('user',this.users)
            console.log(' this.tableConfig.dataSource', this.tableConfig.dataSource)
        }
    }
  
  else{
    console.log('error')
  }
  })
       
  }


  tableConfig: (ITableConfig<any>) =
     {
    dataSource:  this.users.map(
      (user :any) => {
        return {
          bol1: false,
          bol2: false,
          currency1: user.id,
          currency2: 5555,
          date1: user.phone,
          image: 'https://fakeimg.pl/300/',
          text: user.name,
        };
      } ),
    totalElements: 50,
    pageSize: 10,
    displayedColumns: [
      {
        label: 'Bol1',
        path: 'bol1',
        type: Column.Boolean,
        isPrimary: true,
      },
      {
        label: 'Bol2',
        path: 'bol2',
        type: Column.Boolean,
        mapValues: { true: 'Yes', false: 'No' },
        isTruncated: true,
      },
      // {
      //   label: 'Content',
      //   path: 'content',
      //   type: Column.Content,
      //   contentIndex: 0,
      // },
      {
        label: 'Currency1',
        path: 'currency1',
        type: Column.Currency,
      },
      {
        label: 'Currency2',
        path: 'currency2',
        type: Column.Currency,
        currency: 'EGP',
      },
      {
        label: 'Date1',
        path: 'date1',
        type: Column.Date,
      },
      
      
      {
        label: 'Image',
        path: 'image',
        type: Column.Image,
      },
      // {
      //   label: 'Number1',
      //   path: 'number1',
      //   type: Column.Number,
      //   withoutComma: true,
      // },
      // {
      //   label: 'Number2',
      //   path: 'number2',
      //   type: Column.Number,
      // },
      {
        label: 'Text',
        path: 'text',
        type: Column.Text,
        isSortable: true,
      },
      {
        label: 'Actions1',
        path: 'actions1',
        type: Column.Actions,
        actions: [
          {
            text: 'Add',
            isMukButton: false,
            isLoading: false,
            color: MukThemePalette.Warn,
            matType: MukButtonTypes.Flat,
            // spinnerColor:'white',
            icon: 'add',
            isDisabled: false,
            type: ButtonType.Button,
            toolTip: {
              position: TooltipPositions.Below,
              toolTip: 'Test',
            },
          },
        ],
      },
      {
        label: 'Actions2',
        path: 'actions2',
        type: Column.Actions,
        actionsStyle: ActionsStyle.Dots,
        actions: [
          {
            text: 'Add',
            isMukButton: false,
            isLoading: false,
            color: MukThemePalette.Warn,
            matType: MukButtonTypes.Flat,
            // spinnerColor:'white',
            icon: 'add',
            isDisabled: false,
            type: ButtonType.Button,
            toolTip: {
              position: TooltipPositions.Below,
              toolTip: 'Test',
            },
          },
        ],
      },
    ],
    isLoading: false,
    loadMoreButtonConfig: {
      text: 'Load More',
      color: MukThemePalette.Primary,
      isMukButton: true,
    },
  }
  

onPaginatorChange(pageIndex:number){
  console.log("pageIndex",pageIndex)
}

// onTakeAction(e:IAction<T>){
//   console.log("takeAction",e)
// }

onTakeAction(e:any){
  console.log("takeAction",e)
}
onSortChange(e:any){
  console.log("takeAction",e)
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
  position: TooltipPositions.Below,
  toolTip: 'Add'
  },
  onClick:(e:any)=>{
  console.log('event',e)
  }
}
}
// onSortChange(e:Sort){
//   console.log("takeAction",e)
// }
// onSortChange(e:Sort){
//   console.log("takeAction",e)
// }

