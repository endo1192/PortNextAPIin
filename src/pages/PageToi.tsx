import React, { useState } from 'react';
import styled from "styled-components";
import { FormEventHandler } from "react";
import Cheader from "../compo/header";
import Cfooter from "../compo/footer";
import  {Calendar}  from '../compo/calendar';
import styles from "../styles/home.module.css";




const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    //const form = new FormData(event.currentTarget);

    
    //for (const [key, value] of form.entries()) {
    //    console.log(`${key}: ${value}`);
    //}

    
    //const formDataObj = Object.fromEntries(form.entries());
   
      

    const formDataObj = {
        firstName: event.currentTarget.firstName.value,
        lastName: event.currentTarget.lastName.value,
        question: event.currentTarget.question.value,
    };


    
    if (!formDataObj.firstName || !formDataObj.lastName || !formDataObj.question) {
        alert('すべてのフィールドを入力してください');
        return; 
    }


    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formDataObj.lastName)) {
        alert('メールアドレスの形式が正しくありません');
        return; 
    }

    /*const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailform`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formDataObj), 
        //body: form, 
    });*/

    //const response = await handler(formDataObj);

    const response = await fetch('/api/MailAPI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObj),
    });

    const result = await response.json();

    if (result.success) {
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit form.');
      console.error('Error:', result.error);
    }
};

function PageToi() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [question, setQuestion] = useState('');

    return (
        <>
        <div className={styles.Home}>
            <Cheader /><br /><br /><br /><br /><br /><br />
            <p>ご連絡・ご要望のある方は以下のフォーム、または「j2200026@gunma-u.ac.jp」までお願いします</p><br /><br /><br /><br />
            <Sform method="POST" onSubmit={handleSubmit}>
                <Slabel>
                    <p>おなまえ:</p>
                    <Sinput 
                        type="text" 
                        name="firstName" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                </Slabel><br /><br />
                <Slabel>
                    <p>メールアドレス:</p>
                    <Sinput 
                        type="text" 
                        name="lastName" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                    />
                </Slabel><br /><br />
                <Slabel>
                    <p>お問い合わせ内容:</p>
                    <Stextarea 
                        name="question" 
                        value={question} 
                        onChange={(e) => setQuestion(e.target.value)} 
                    />
                </Slabel><br /><br />
                <SUinput type="submit" value="Submit" />
            </Sform><br /><br /><br />
            <p>予定一覧</p>
            <Calendar /><br /><br />
        </div>
        <Cfooter />
        </>
    );
}

const Sform = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Slabel = styled.label`
    color: white;
    font-size: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Sinput = styled.input`
    font-size: 30px;
    width: 90%;
    height: auto;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    color: black;
`;

const SUinput = styled.input`
    font-size: 30px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    &:hover {
      color: #ccc; /* ホバー時の色変更 */
    }
    cursor: pointer; /* カーソルをポインターに変更 */
`;

const Stextarea = styled.textarea`
    font-size: 30px;
    width: 90%;
    height: 200px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    color: black;
`;

export default PageToi;
