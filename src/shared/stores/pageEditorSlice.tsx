import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { SectionData } from '../schemas/typedef/ISectionData';
import { pageAdminEditorData, pageSectionData } from '@/mocks/admin/page';
import { ISection } from '../schemas/typedef/ISectionData';



type EDITORSTATE = {
    pageName: string | undefined,
    sections: ISection[],
    activeSectionCode: string | undefined,
    currentSection: ISection | undefined,
    activeLang: string,
    data: Record<string, Record<string, Partial<SectionData>[]>>
    // {
    //     vi: Record<string, Partial<SectionData>[]>,
    //     en: Record<string, Partial<SectionData>[]>,
    // }

}

const initialState: EDITORSTATE = {
    pageName: "HomePage",
    activeLang: 'vi',
    currentSection: pageAdminEditorData[0],
    sections: pageAdminEditorData,
    activeSectionCode: "HO_1",
    data: { vi: pageSectionData, en: {} }

}
export const editorState = createSlice({
    name: 'editorState',
    initialState,
    reducers: {
        initData: (state, action: PayloadAction<EDITORSTATE>) => {
            state = action.payload
        },
        setActiveSection: (state, action: PayloadAction<string>) => {
            state.activeSectionCode = action.payload
            state.currentSection = state.sections.find(item => item.code === action.payload)
        },
        setActiveLang: (state, action: PayloadAction<string>) => {
            state.activeLang = action.payload
        },
        setData: (state, action: PayloadAction<{ data: Partial<SectionData>, index: number }>) => {
            if (state.activeSectionCode) {
                const { data, index } = action.payload
                if (index < state.data[state.activeLang][state.activeSectionCode].length) {
                    state.data[state.activeLang][state.activeSectionCode][index] = data
                }
            }
        },
    }
}
)
export const { initData, setActiveSection, setData, setActiveLang } = editorState.actions
export default editorState.reducer
