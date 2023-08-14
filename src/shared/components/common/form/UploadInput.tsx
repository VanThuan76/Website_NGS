import { axiosInstance } from '@/schemas/typedef/Axios'
import { IBaseResponse } from '@/schemas/typedef/IBaseResponse'
import { useMutation } from '@tanstack/react-query'
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import EditIcon from '@/components/icons/EditIcon'
import { PreImage } from './PreImage'

type Props = {
    initSrc?: string
    onChange?: (fileSrc: string) => void
    className?: string
}

export default function InputUpload({ initSrc, onChange, className }: Props) {
    const [filePath, setFilePath] = useState(initSrc)
    const inputRef = useRef<HTMLInputElement>(null)
    const uploadService = useMutation({
        mutationFn: (formData: { file: File }) => axiosInstance.post<IBaseResponse<string>>('/uploads/upload-image', formData, { headers: { "Content-Type": 'multipart/form-data' } }),
        onSuccess: (data) => {
            setFilePath(data.data)
            if (onChange) onChange(data.data)

        }
    })
    useEffect(() => {
        setFilePath(initSrc)
        return () => setFilePath(undefined)
    }, [initSrc])

    const handleUploadImage = async (files: FileList | null) => {
        if (!files || files.length <= 0) return
        try {
            const formData = new FormData()
            formData.append('file', files[0])
            uploadService.mutate(formData as any)
        } catch (error) {
            // message.error('Lưu file không thành công!')
        }
    }

    return (
        <></>
        // <Spin spinning={uploadService.isLoading}>
        //     <input
        //         accept="capture=camera,image/*"
        //         type="file"
        //         ref={inputRef}
        //         className="!hidden"
        //         onChange={(event) => handleUploadImage(event.target.files)
        //         }
        //     />

        //     <div className={classNames("relative m-auto overflow-hidden text-center  border border-solid border-slate-200 cursor-pointer", {
        //         "h-[135px] w-[135px] rounded-full": !className,
        //         [`${className}`]: className
        //     })}
        //     >
        //         <PreImage
        //             src={filePath || '/images/default.png'}
        //             height={200}
        //         />
        //         <Button className='absolute z-10 top-2 right-4' onClick={() => inputRef.current?.click()}><EditIcon /></Button>
        //     </div>
        // </Spin >
    )
}