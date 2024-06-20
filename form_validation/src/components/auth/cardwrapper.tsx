import React from 'react'
import { Card,CardContent,CardHeader,CardFooter } from '@/components/ui/card'
import BackButton from './backbutton';
import AuthHeader from './authheader';

interface CardWrapperProps{
    label:string,
    title:string,
    backbuttonhref:string,
    backbuttonlabel:string
    children:React.ReactNode
}

const CardWrapper = ({label,title,backbuttonhref,backbuttonlabel,children}:CardWrapperProps) => {
  return (
    <Card className='w-1/3 shadow-md'>
      <CardHeader>
        <AuthHeader label={label} title={title}/>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <BackButton href={backbuttonhref} label={backbuttonlabel} />
      </CardFooter>
    </Card>


)
}

export default CardWrapper