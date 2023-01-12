import React from 'react'
import Input from './UI/Input/Input'
import {textInputData} from '../components/UI/Input/Input.mock'

export default function MainApp() {
    return (
        <div className="p-5">
            <Input {...textInputData}/>
        </div>
        
    )
}
