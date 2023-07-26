import './Header.css'
import { 
  Center,
  Heading
} from '@chakra-ui/react'

interface IHeader {
  title: String
}

export const MyHeader = ({title}:IHeader) => {
  return(
    <Center>
      <Heading as='h2' size='4xl' >
      {title}
      </Heading>
    </Center>
  )
}
