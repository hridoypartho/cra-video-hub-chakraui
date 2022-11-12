import { Container, VStack, Heading, Input, Button, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <Container maxW={'container.xl'} h='100vh' p='16'>
            <form action="#">
                <VStack alignItems={'stretch'} spacing='8' w={["full", "96"]}
                    m='auto'
                    my={'16'}>
                    <Heading>
                        VIDEO HUB
                    </Heading>
                    <Avatar alignSelf={'center'} boxSize='32' />
                    <Input placeholder='Name'
                        type={'text'} required focusBorderColor='purple.500' />
                    <Input placeholder='Email'
                        type={'email'} required focusBorderColor='purple.500' />
                    <Input placeholder='Password'
                        type={'password'} required focusBorderColor='purple.500' />

                    <Button variant={'link'} alignSelf='flex-end'>
                        <Link to={'/forgetpassword'}>
                            Forget Password?
                        </Link>
                    </Button>
                    <Button colorScheme={'purple'} type="submit">Sign Up</Button>
                    <Text textAlign={'right'}>
                        Already Signed Up?{" "}
                        <Button variant={'link'} colorScheme='purple'>
                            <Link to={'/login'}>
                                Log in
                            </Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default Signup