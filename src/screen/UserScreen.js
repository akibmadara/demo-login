import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
function UserScreen() {
    const [newPassword, setNewPassword] = useState(false)
    const history = useHistory()
    const logoutHandler = () =>{
        history.push('/Login')
    }
    return (
        <>
        <div className='m-5'>
            <strong style={{fontWeight:'700'}}>Username : &nbsp;&nbsp;userName</strong>
            <br/> <br/>
            {newPassword ?
            <span style={{fontWeight:'700'}}> New Password : <input type='password'></input> </span>
            :
            <b style={{fontWeight:'700'}}>Password : &nbsp;&nbsp;&nbsp;********</b>
            }
        </div>
        <footer style={{marginTop:'370px'}}>
            <Button className='bg-white text-dark' style={{border:'1px solid gray', margin:'4px', outline:'none', boxShadow:'none'}} onClick={()=>setNewPassword(!newPassword)}>{newPassword ? 'Save': 'Change'} Password</Button>
            <Button className='bg-white text-dark' style={{border:'1px solid gray', margin:'4px', outline:'none', boxShadow:'none'}} onClick={()=>logoutHandler()}>Logout</Button>
        </footer>
        </>
    )
}

export default UserScreen
