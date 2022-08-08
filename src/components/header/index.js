import { GitHubSearch, HeaderContainer, MenuBox } from "./style"
import { ReactComponent as Logo } from "../../assets/images/logo.svg"
import { ReactComponent as Menu } from "../../assets/images/menu.svg"
import { ReactComponent as Git } from "../../assets/images/git.svg"
import { Link } from "react-router-dom"
import { TextBodyP, TextTitleH2, TextTitleH3 } from "../../common/foundation/typography"
import { useState } from "react"

const ComponentHeader = ()=>{
    const [avatarUrl, setAvatarUrl]= useState(false);
    const [gitUser, setGitUser]=useState();
    const [hideMenu, setHideMenu]=useState(true);
    const [hideGitSearch, setHideGitSearch]=useState(true);
    
    
    const fetchGitHub = async (user)=>{
        const options = {
            method: 'GET',
            Headers: {
                "Content-Type": "application/json"
            }
        };
        try{
            const response = await fetch(`https://api.github.com/users/${user}`, options);
            const dataJson = await response.json(); 
            console.log(dataJson)
            setAvatarUrl(dataJson.avatar_url);
            setGitUser(dataJson);
        }catch(err){
            console.log(err)
        }
    }

    return(
        <HeaderContainer >
            <Menu onClick={()=>setHideMenu(!hideMenu)} className="menuMobile"/>

            <MenuBox hide={hideMenu}>
                <nav>
                    <Link to="/"><TextBodyP>Home</TextBodyP></Link>
                    <Link to="/movie/stats-alternative"><TextBodyP>Stats</TextBodyP></Link>
                </nav>
            </MenuBox>

            <Logo className="logo"/>

            {avatarUrl ? <img onClick={()=>setHideGitSearch(!hideGitSearch)} src={avatarUrl}/> : <Git onClick={()=>setHideGitSearch(!hideGitSearch)} className="git"/>}

            <GitHubSearch hide={hideGitSearch}>
                <input 
                    onBlur={event=>{
                        event.target.value=""
                        setHideGitSearch(true)
                    }} 
                    onChange={(event)=>setGitUser(event.target.value)} 
                    type="search" 
                    placeholder="Digite seu usuário gitHub"
                />  
                <button onClick={()=>fetchGitHub(gitUser)}>search</button>
            </GitHubSearch>
        </HeaderContainer>
    )
}

export default ComponentHeader;