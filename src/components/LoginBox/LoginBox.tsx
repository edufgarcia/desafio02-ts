import { 
  Box,
  Center,
  Input
} from '@chakra-ui/react'
import { MyButton } from "../Button/Button"
import { login } from '../../services/login'

export type voidFunction = () => void

interface ILoginBox {
  event: voidFunction,
  title: String
}

export const LoginBox = (
  {
    title,
    event
  }:ILoginBox) => {
  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
      <Center>
        <h1>{title}</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <MyButton title='Login' event={event}></MyButton>
      </Center>
    </Box>
  )
}
