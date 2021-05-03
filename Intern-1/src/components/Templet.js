import React from 'react';
import useInput from  './useInput';

function Templet(){
    const [senderId,bindSenderId,resetSenderId]=useInput('');
    const [pCode,bindPCode,resetPCode]=useInput('');
    const [variableCount,bindVariableCount,resetVariableCount]=useInput('');
    const [message,bindMessage,resetMessage]=useInput('');

    const submitHandler = e=>{
        console.log('submitted')
        e.prevent.default;
        
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>SenderId</label>
                    <input
                    { ...bindSenderId}
                    type='text' />
                     <label>Promotion Code</label>
                    <input
                    { ...bindPCode}
                    type='text' />
                     <label>variable Count</label>
                    <input
                    { ...bindVariableCount}
                    type='text' />
                     <label>Message</label>
                    <input
                    { ...bindMessage}
                    type='text' />
               
                </div>
                <button onClick={submitHandler}>Submit</button>

            </form>
        </div>
    )

}
export default Templet;