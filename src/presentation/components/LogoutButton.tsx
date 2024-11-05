import { useNavigate } from "react-router-dom"

import { resetAuthCookies } from "../../infrastructure/utils/AuthService"


const LogoutButton: React.FC = () => {
    const navigate = useNavigate()
    
    const submitLogout = async () => {
        resetAuthCookies()
        navigate('/')
    }
  return (
    <div onClick={submitLogout}>Log out</div>
  )
}

export default LogoutButton
