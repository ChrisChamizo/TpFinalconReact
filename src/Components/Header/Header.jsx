/*Importo los componentes de CHAKRA IU */
import {Box,Button,Flex,Heading,Text} from "@chakra-ui/react"


/*Creo la funcion Header*/

function Header() {
    return (
      <Box as="header" bg="#040b15" color="white" p="4">
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Text fontSize="2xl" fontWeight="bold" color="red.600" mr="4">
              CC
            </Text>
            <Heading as="h1" size="lg" fontWeight="bold">
              Christian Chamizo
            </Heading>
          </Flex>
          <Flex>
            <Button variant="link" colorScheme="red" mr="8">
              INICIO
            </Button>
            <Button variant="link" colorScheme="white" mr="8">
              SOBRE MI
            </Button>
            <Button variant="link" colorScheme="white" mr="8">
              SERVICIOS
            </Button>
            <Button variant="link" colorScheme="white" mr="8">
              RESUMEN
            </Button>
            <Button variant="link" colorScheme="white" mr="8">
              PORTAFOLIO
            </Button>
            <Button variant="link" colorScheme="white" mr="8">
              CONTACTAME
            </Button>
          </Flex>
        </Flex>
      </Box>
    );
  }
  export {Header}


