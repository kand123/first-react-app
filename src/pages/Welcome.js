import {useIdentityContext} from 'react-netlify-identity-gotrue'

const Welcome = () => {
    const identity = useIdentityContext()
    return (
        <>
          {!identity.provisionalUser && !identity.user && (
            <h2>
             Welcome to the Studio Ghibli Fan Page! Sign up and Login to join the fun.
            </h2>
          )}
    
          {identity.provisionalUser && (
            <h2>Thanks for signing up! Check your email to confirm your account.</h2>
          )}
    
          {identity.user && (
            
              <h2>Welcome to the Fan Page, {identity.user.user_metadata?.full_name}!</h2>
                  
          )}
                  </>
          )
}
export default Welcome