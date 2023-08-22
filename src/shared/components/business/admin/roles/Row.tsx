import { ActionPermission, IActionPermissionList, mockdata } from 'src/shared/schemas/models/IRole'
import { setAllActionOfCategoryByType, setActionOfPermisison} from 'src/shared/stores/roleSlice'
import { useCallback, useState } from 'react'
import { Checkbox } from '@/components/common/ui/checkbox'
import { useDispatch } from 'react-redux'

type Props = {
    permisions: IActionPermissionList
    disable?: boolean,
    // categoryName: string
}

export default function Row({ permisions, disable = false }: Props) {
    const [expandField, setExpandField] = useState(false);
    const dispatch = useDispatch();
  
    function confirmChecked(perAction: IActionPermissionList['actionEditDto'][number], type: ActionPermission) {
      console.log(type);
      return perAction.permissionActionDtoList.find(action => action.actionName === type)?.active || false;
    }
    function confirmCheckAllActionOfPermission(state: IActionPermissionList['actionEditDto'], actionName: string) {
      return state.every(per =>
        per.permissionActionDtoList
          .filter(action => action.actionName === actionName)
          .every(action => action.active === true),
      );
    }
    function confirmHasCheckActionOfPermission(state: IActionPermissionList['actionEditDto'], actionName: string) {
      return state.some(per =>
        per.permissionActionDtoList
          .filter(action => action.actionName === actionName)
          .some(action => action.active === true),
      );
    }
    return (
      <>
        <div className='table--header group relative grid grid-cols-6 place-items-center py-4 hover:font-bold hover:text-blue-400'>
          <span className='group place-self-start pl-4 font-bold '>
            <span onClick={() => setExpandField(!expandField)} className='col-span-2 cursor-pointer'>
              {permisions.categoryName} 
              {/* <DownOutlined className='hidden group-hover:inline-block' /> */}
            </span>
          </span>
          {/*  CHECK ALL FIELD OF SUBJECT */}
          <span className='relative font-bold '>
            <Checkbox
              checked={confirmCheckAllActionOfPermission(permisions.actionEditDto, 'create')}
              onChange={e => {
                console.log(e)
                if (disable) return false;
                dispatch(
                  setAllActionOfCategoryByType({
                    categoryName: permisions.categoryName,
                    value: (e.target as HTMLInputElement).checked,
                    actionName: 'create',
                  }),
                );
              }}
            />
            {confirmHasCheckActionOfPermission(permisions.actionEditDto, 'create') &&
              !confirmCheckAllActionOfPermission(permisions.actionEditDto, 'create') && (
                <div className='absolute -left-1 top-0 h-2 w-2 rounded-full bg-blue-700'></div>
              )}
          </span>
          <span className='relative font-bold '>
            <Checkbox
              checked={confirmCheckAllActionOfPermission(permisions.actionEditDto, 'edit')}
              onChange={e => {
                if (disable) return false;
                dispatch(
                  setAllActionOfCategoryByType({
                    categoryName: permisions.categoryName,
                    value: (e.target as HTMLInputElement).checked,
                    actionName: 'edit',
                  }),
                );
              }}
            />
            {confirmHasCheckActionOfPermission(permisions.actionEditDto, 'edit') &&
              !confirmCheckAllActionOfPermission(permisions.actionEditDto, 'edit') && (
                <div className='absolute -left-1 top-0 h-2 w-2 rounded-full bg-blue-700'></div>
              )}
          </span>
          <span className='relative font-bold'>
            <Checkbox
              checked={confirmCheckAllActionOfPermission(permisions.actionEditDto, 'view')}
              onChange={e => {
                if (disable) return false;
                dispatch(
                  setAllActionOfCategoryByType({
                    categoryName: permisions.categoryName,
                    value: (e.target as HTMLInputElement).checked,
                    actionName: 'view',
                  }),
                );
              }}
            />
            {confirmHasCheckActionOfPermission(permisions.actionEditDto, 'view') &&
              !confirmCheckAllActionOfPermission(permisions.actionEditDto, 'view') && (
                <div className='absolute -left-1 top-0 h-2 w-2 rounded-full bg-blue-700'></div>
              )}
          </span>
          <span className='relative font-bold'>
            <Checkbox
              checked={confirmCheckAllActionOfPermission(permisions.actionEditDto, 'delete')}
              onChange={e => {
                if (disable) return false;
                dispatch(
                  setAllActionOfCategoryByType({
                    categoryName: permisions.categoryName,
                    value: (e.target as HTMLInputElement).checked,
                    actionName: 'delete',
                  }),
                );
              }}
            />
            {confirmHasCheckActionOfPermission(permisions.actionEditDto, 'delete') &&
              !confirmCheckAllActionOfPermission(permisions.actionEditDto, 'delete') && (
                <div className='absolute -left-1 top-0 h-2 w-2 rounded-full bg-blue-700'></div>
              )}
          </span>
          <span className='relative font-bold'>
            <Checkbox
              checked={confirmCheckAllActionOfPermission(permisions.actionEditDto, 'approve')}
              onChange={e => {
                if (disable) return false;
                dispatch(
                  setAllActionOfCategoryByType({
                    categoryName: permisions.categoryName,
                    value: (e.target as HTMLInputElement).checked,
                    actionName: 'approve',
                  }),
                );
              }}
            />
            {confirmHasCheckActionOfPermission(permisions.actionEditDto, 'approve') &&
              !confirmCheckAllActionOfPermission(permisions.actionEditDto, 'approve') && (
                <div className='absolute -left-1 top-0 h-2 w-2 rounded-full bg-blue-700'></div>
              )}
          </span>
        </div>
        {/* SUBJECT FIELDS  */}
        {expandField && permisions.actionEditDto.length > 0 && (
          <div className='rounded border-solid border-blue-400 transition-all'>
            {permisions.actionEditDto.map((action, index) => (
              <div className='table--header grid grid-cols-6  place-items-center py-4' key={action.id}>
                <span className='font-bold capitalize'>{action.permissionName}</span>
                <span className='font-bold'>
                  {action.permissionActionDtoList.findIndex(item => item.actionName === 'create') !== -1 && (
                    <Checkbox
                      checked={confirmChecked(action, 'create')}
                      onChange={e => {
                        if (disable) return;
                        dispatch(
                          setActionOfPermisison({
                            categoryName: permisions.categoryName,
                            permissionName: action.permissionName,
                            actionName: 'create',
                            value: (e.target as HTMLInputElement).checked,
                          }),
                        );
                      }}
                    />
                  )}
                </span>
                <span className='font-bold'>
                  {action.permissionActionDtoList.findIndex(item => item.actionName == 'edit') !== -1 && (
                    <Checkbox
                      checked={confirmChecked(action, 'edit')}
                      onChange={e => {
                        if (disable) return;
                        dispatch(
                          setActionOfPermisison({
                            categoryName: permisions.categoryName,
                            permissionName: action.permissionName,
                            actionName: 'edit',
                            value: (e.target as HTMLInputElement).checked,
                          }),
                        );
                      }}
                    />
                  )}
                </span>
                <span className='font-bold'>
                  {action.permissionActionDtoList.findIndex(item => item.actionName === 'view') !== -1 && (
                    <Checkbox
                      checked={confirmChecked(action, 'view')}
                      onChange={e => {
                        if (disable) return;
                        dispatch(
                          setActionOfPermisison({
                            categoryName: permisions.categoryName,
                            permissionName: action.permissionName,
                            actionName: 'view',
                            value: (e.target as HTMLInputElement).checked,
                          }),
                        );
                      }}
                    />
                  )}
                </span>
  
                <span className='font-bold'>
                  {action.permissionActionDtoList.findIndex(item => item.actionName === 'delete') !== -1 && (
                    <Checkbox
                      checked={confirmChecked(action, 'delete')}
                      onChange={e => {
                        if (disable) return;
                        dispatch(
                          setActionOfPermisison({
                            categoryName: permisions.categoryName,
                            permissionName: action.permissionName,
                            actionName: 'delete',
                            value: (e.target as HTMLInputElement).checked,
                          }),
                        );
                      }}
                    />
                  )}
                </span>
                <span className='font-bold'>
                  {action.permissionActionDtoList.findIndex(item => item.actionName === 'approve') !== -1 && (
                    <Checkbox
                      checked={confirmChecked(action, 'approve')}
                      onChange={e => {
                        if (disable) return;
                        dispatch(
                          setActionOfPermisison({
                            categoryName: permisions.categoryName,
                            permissionName: action.permissionName,
                            actionName: 'approve',
                            value: (e.target as HTMLInputElement).checked,
                          }),
                        );
                      }}
                    />
                  )}
                </span>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
  