import React from 'react'
import classes from './SignUp.module.scss'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import { useRouter } from 'next/router'


function SignUp() {

    const router = useRouter()

    const goOnToSignin = () => {
        // console.log("Go on to sign in");
        router.push("/login")
        
    }

  return (

    <div className={classes.container}>
        <Title>
            SignUp De
        </Title>

        <Button onClick={goOnToSignin}>Go TO Sign In</Button>

    </div>
  )
}

export default SignUp