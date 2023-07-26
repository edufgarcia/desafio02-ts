import React from 'react'
import './Button.css'
import { 
  Center,Button
} from '@chakra-ui/react'
import { voidFunction } from '../LoginBox/LoginBox'

interface IButton {
  event: voidFunction,
  title: String
}

export const MyButton = ({ event, title }: IButton) => {
  return(
    <Center>
      <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        {title}
      </Button>
    </Center>
  )
}
