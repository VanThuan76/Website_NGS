import Head from 'next/head';
import LayoutWebsite from 'src/shared/components/layout/LayoutWebsite';
import axios from "axios";
import {GetServerSideProps} from "next";
import {APP_SAVE_KEY} from "@/utils/constants";
import EditorPreview from "@/components/common/editor/EditorPreview";
import {IAdminNews} from "../../shared/schemas/models/INews";

type Props = IAdminNews
export function News(props : Props) {
  return (
    <>
      <Head>
        <title>Tin tức NGS</title>

        <meta name='description' content={ props.description || 'Tin tức NGS'} />
        <meta name='keywords' content='Công nghệ thông tin, Giải pháp số' />
      </Head>
      <EditorPreview data={JSON.parse(props.content)} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async ctx => {
  try{
    const data = await axios.get(`${process.env.NEXT_PUBLIC_DEV_API_URL}/articles/get-by-slug?slug=${ctx.query.slug}`, {headers : {
          'Authorization': `Bearer ${ctx.req.cookies[APP_SAVE_KEY.TOKEN_KEY]}`,
          'Content-Type': 'application/json'
      }})
    return { props: data.data };
  }catch (e){
    console.error(e)
    return {props: {} , redirect: { destination: '/404', permanent: true }}
  }

};




News.getLayout = (children: React.ReactNode) => <LayoutWebsite>{children}</LayoutWebsite>;
export default News;
