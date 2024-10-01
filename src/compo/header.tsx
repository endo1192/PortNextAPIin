import React from 'react';
import styled from "styled-components";
//import {  Link  } from "react-router-dom";
import Link from "next/link";
//import PageAbout from "./PageAbout";
//import PageSkills from "./PageSkills";
//import PageWorks from "./PageWorks";
//import PageToi from "./PageToi";
//import App from "./App";

function Cheader() {
    return (
        <Sheader>
            <Snav>
                <Sul className="main-nav">
                    <Sli><SLink href="/"><Simg className="logo" src="/images/logo.png" alt="ホーム"/></SLink></Sli>
                    {/*<Sli><SLink href="/">Fumihiro Endo</SLink></Sli>*/}
                </Sul>
                <S2ul className="pages">
                    <Sli><SLink href="/PageAbout">about</SLink></Sli>
                    <Sli><SLink href="/PageSkills">skills</SLink></Sli>
                    <Sli><SLink href="/PageWorks">work</SLink></Sli>
                    <Sli><SLink href="/PageToi">Contact</SLink></Sli>
                </S2ul>
            </Snav>
        </Sheader>
    );
}

const Snav = styled.nav`
  display: flex;
  justify-content: space-between; /* 要素間のスペースを調整 */
  align-items: center;
  padding: 1rem;
  height: 100px; /* 全体の高さを統一 */
  box-sizing: border-box;
`;

const Simg = styled.img`
  width: 190px; /* 固定サイズに変更 */
  @media (max-width: 768px) {
      width: 140px; /* スマートフォン向けに縮小 */
  }
`;

const Sli = styled.li`
  margin-right: 1.5rem; /* マージンを少し狭く */
  list-style: none;
  &:last-child {
      margin-right: 0;
  }
`;

const Sul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  align-items: center; /* 高さを揃える */
  height: 100%;
  justify-content: flex-start;
  margin-right: 3rem;
`;

const S2ul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: flex-end;
  color: #f7f9ff;
  align-items: center; /* 高さを揃える */
  height: 100%; /* 高さをSulと同じに */
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* テキストの色を継承 */
  font-size: 1.2rem;
  &:hover {
      color: #ccc; /* ホバー時の色変更 */
  }
  @media (min-width: 1200px) {
        font-size: 3rem; /* 画面サイズが1200px以上の場合にフォントサイズを大きく */
  }

  @media (min-width: 768px) and (max-width: 1199px) {
        font-size: 2.5rem; /* 768pxから1199pxの画面幅に対してフォントサイズを設定 */
  }

  @media (min-width: 470px) and (max-width: 768px) {
        font-size: 1.3rem; /* 768pxから1199pxの画面幅に対してフォントサイズを設定 */
  }

  @media (max-width: 470px) {
        font-size: 1rem; /* 画面サイズが768px以下の場合のフォントサイズ */
  }
`;

const Sheader = styled.header`
  width: 100%;
  background: rgb(41, 41, 84);
  font-size: 2rem;
  font-family: 'Times New Roman', Times, serif;
  padding: 0 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  text-decoration: none;
`;
  
  export default Cheader;