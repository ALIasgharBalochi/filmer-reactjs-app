
import { Link } from "react-router-dom";
import { useGetRequestTokenQuery } from "../api/UserApi";

const LoginRegestringPage = () => {
    const {data} = useGetRequestTokenQuery()
    
    // const RedirectUser = () => {
    //     redirect(`https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=filmer-app.vercel.app`)
    // } 
    return (
        <div className="div-container-regestring">
            <div className="div-regestring">
               <h1 className="h1-regestring">please for login and regestring click on this button </h1>
               <button ><Link to={`https://www.themoviedb.org/authenticate/${data?.request_token}?redirect_to=https://filmer-app.vercel.app/`}>regestring / log in</Link></button>
            </div>
        </div>
    )
}
export default LoginRegestringPage;