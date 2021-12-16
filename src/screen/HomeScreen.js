import React, { useState} from 'react'


function HomeScreen(props) {


    const [textValue, setTextValue] = useState('0')
    const changeTextHandler = (e) => {
        setTextValue(e)
    }
    return (
    <>
    <select style={{width:'200px',height:'40px', margin:'10px', borderRadius:'5px'}} className='select-custom' onChange={(e)=>changeTextHandler(e.target.value)}>
        <option value="0">Dropdown</option>
        <option value="1">Lorem 1</option>
        <option value="2">Lorem 2</option>
        <option value="3">Lorem 3</option>
        <option value="4">Lorem 4</option>
    </select>



 {textValue === '0' &&
        <div className='mt-3 mb-3 mx-4'>In publishing and graphic design, Lorem ipsum 1 is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</div>
    }
    {textValue === '1' &&
        <div className='mt-3 mb-3 mx-4'>In publishing and graphic design, Lorem ipsum 1 is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</div>
    }
    {textValue === '2' &&
        <div className='mt-3 mb-3 mx-4'>In publishing and graphic design, Lorem ipsum 2 is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</div>
    }
    {textValue === '3' &&
        <div className='mt-3 mb-3 mx-4'>In publishing and graphic design, Lorem ipsum 3 is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</div>
    }
    {textValue === '4' &&
        <div className='mt-3 mb-3 mx-4'>In publishing and graphic design, Lorem ipsum 4 is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</div>
    }
    </>
    )
}

export default HomeScreen
