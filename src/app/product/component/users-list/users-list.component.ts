import { Component } from '@angular/core';
import { MatNoDataRow, MatTableDataSource } from '@angular/material/table';
import { IAction } from 'ngx-mui-kit/common/interfaces';
import {
  ButtonType,
  IButton,
  MukButtonTypes,
  MukThemePalette,
  TooltipPositions,
} from 'ngx-mui-kit/components/muk-button';
import {
  ActionsStyle,
  Column,
  ITableConfig,
} from 'ngx-mui-kit/components/muk-table';
import { GeneralService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.generalService.getAllUsers().subscribe((res) => {
      console.log(res);

      if (res) {
        {
          this.tableConfig.dataSource.data = res;
        }
      } else {
        console.log('error');
      }
    });
  }

  tableConfig: ITableConfig<any> = {
    dataSource: new MatTableDataSource(),
    totalElements: 50,
    pageSize: 10,
    displayedColumns: [
      {
        label: 'name',
        path: 'name',
        type: Column.Text,
        isPrimary: true,
      },
      {
        label: 'id',
        path: 'id',
        type: Column.Number,
        isPrimary: true,
      },
      {
        label: 'company name',
        path: 'company.name',
        type: Column.Text,
        isPrimary: true,
      },
      {
        label: 'controls',
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
    ],
    isLoading: false,
    loadMoreButtonConfig: {
      text: 'Load More',
      color: MukThemePalette.Primary,
      isMukButton: true,
    },
  };

  onPaginatorChange(pageIndex: number) {
    console.log('pageIndex', pageIndex);
  }

  // onTakeAction(e:IAction<T>){
  //   console.log("takeAction",e)
  // }

  onTakeAction(e: any) {
    console.log('takeAction', e);
  }
  onSortChange(e: any) {
    console.log('takeAction', e);
  }
  buttonConfig: IButton = {
    text: 'Add',
    isMukButton: false,
    isLoading: false,
    color: MukThemePalette.Primary,
    matType: MukButtonTypes.Raised,
    spinnerColor: 'white',
    icon: 'add',
    isDisabled: false,
    type: ButtonType.Button,
    toolTip: {
      position: TooltipPositions.Below,
      toolTip: 'Add',
    },
    onClick: (e: any) => {
      console.log('event', e);
    },
  };
}
// onSortChange(e:Sort){
//   console.log("takeAction",e)
// }
// onSortChange(e:Sort){
//   console.log("takeAction",e)
// }
