import React from 'react';
import Pop from '../compo/pop';
import { getPage,getBlocks } from './api/NotionAPI'
import Cheader from "../compo/header";
import Cfooter from "../compo/footer";
import styles from "../styles/home.module.css";
import { GetStaticProps } from 'next';
import BlogMain from '../compo/blogMain';



export const getServerSideProps: GetStaticProps = async () => {
  const textid = process.env.NOTION_WORKS_KEY

  if (!textid) {
      throw new Error('NOTION_ABOUT_KEY is not defined in the environment variables');
  }

  const page = await getPage(textid);

  const blocks = await getBlocks(textid);


  return {
    props: {
      page: page,
      blocks: blocks,
    },
  };
};


interface PageWorksProps {
  blocks: any;
}


function PageWorks({ blocks }: PageWorksProps) {
    return(
        <>
        <div className={styles.Home}>
            <Cheader /><br /><br /><br />
            <Pop>{'Works'}</Pop>
            <BlogMain blocks={blocks} />
        </div>
        <Cfooter />
        </>
    );
}

export default PageWorks;