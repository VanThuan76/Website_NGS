import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionPermission, IActionPermissionList, IPermissionAction } from "../schemas/models/IRole";

export type initStateType = {
    catePermissions: IActionPermissionList[]
}
const initState: initStateType = {
    catePermissions: []
}

export const roleSlice = createSlice(
    {
        name: 'RoleSlice',
        initialState: initState,
        reducers: {
            setCatePermissions: (state, action: PayloadAction<IActionPermissionList[]>) => {
                state.catePermissions = action.payload
            },
            setDefaultCheckPermission: (state, action: PayloadAction<IPermissionAction[]>) => {
                state.catePermissions.forEach(cate => {
                    cate.actionEditDto.forEach(act => {
                        act.permissionActionDtoList.forEach(per => {
                            if (action.payload.some(item => item.id === per.id)) {
                                per.active = true
                            }
                        }
                        )
                    })
                })
            },
            setAllActionOfCategoryByType: (state, action: PayloadAction<{ categoryName: string, actionName: ActionPermission, value: boolean }>) => {
                const { categoryName, value, actionName } = action.payload
                const cate = state.catePermissions.find(cate => cate.categoryName === categoryName)
                if (cate) {
                    cate.actionEditDto.forEach(per =>
                        per.permissionActionDtoList.filter(item => item.actionName === actionName).forEach(action => action.active = value)
                    )
                }
            },
            setActionOfPermisison: (state, action: PayloadAction<{ categoryName: string, permissionName: string, actionName: ActionPermission, value: boolean }>) => {
                const { categoryName, permissionName, actionName, value } = action.payload
                const cate = state.catePermissions.find(cate => cate.categoryName === categoryName)
                if (cate) {
                    const permis = cate.actionEditDto.find(per => per.permissionName === permissionName)
                    if (permis) {
                        const action = permis.permissionActionDtoList.find(action => action.actionName === actionName)
                        if (action) {
                            action.active = value
                        }
                    }
                }
            }

        }
    }
)
export const getAllActiveActionPermission = (state: initStateType['catePermissions']) => {
    let result: initStateType['catePermissions'][number]['actionEditDto'][number]['permissionActionDtoList'] | [] = []
    state.forEach(cate => cate.actionEditDto.
        forEach(act => act.permissionActionDtoList.forEach(per => {
            if (per.active) {
                result = [...result, per]
            }
        })))
    return result
}
export const getAllActionPermission = (state: initStateType['catePermissions']) => {
    let result: initStateType['catePermissions'][number]['actionEditDto'][number]['permissionActionDtoList'] | [] = []
    state.forEach(cate => cate.actionEditDto.
        forEach(act => act.permissionActionDtoList.forEach(per => {
            result = [...result, per]
        })))
    return result
}
export const { setActionOfPermisison, setAllActionOfCategoryByType, setCatePermissions, setDefaultCheckPermission } = roleSlice.actions
export default roleSlice.reducer