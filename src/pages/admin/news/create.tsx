import { useRouter } from 'next/router'
import { ListBulletIcon } from '@radix-ui/react-icons'

import FormNews from '@/components/business/admin/news/FormNews'
import { Button } from '@/components/common/ui/button'
import { IAdminNews, useCreateNews } from 'src/shared/schemas/models/INews'
import DashBoardLayout from '@/components/layout/layoutAdmin/DashboardLayout'

type Props = {}

export function CreateNews({ }: Props) {
    const router = useRouter()

    const createNews = useCreateNews(() =>
        router.push('/news')
    )
    function onSubmit(values: Partial<IAdminNews>) {
        // beforeCreate(values)
        createNews.mutate(values)
    }
    return (
        <section className='w-full'>
            <div className='flex justify-between mb-6'>
                <div className='text-2xl font-bold'>Create News</div>
                <Button onClick={() => router.push('/news')}><ListBulletIcon className='mr-2' />List News</Button>
            </div>
            <FormNews onSubmit={onSubmit} isLoading={createNews.isLoading} onBack={() => router.push('/news')} />

        </section>
    )
}
CreateNews.getLayout = (children: React.ReactNode) => <DashBoardLayout>{children}</DashBoardLayout>;
export default CreateNews;