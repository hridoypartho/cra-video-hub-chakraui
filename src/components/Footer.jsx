import { Box, Stack, VStack, Heading, HStack, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
const Footer = () => {
    return (
        <Box bg={'blackAlpha.900'} minH={'40'} p='16' color={'white'} >
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w='full' px={'4'} textAlign={['center', 'left']}>
                    <Heading>
                        Subscribe to Get Updates
                    </Heading>
                    <HStack borderBottom={'2px solid white'} py='2'>
                        <Input placeholder='Enter Email Here..'
                            border={'none'}
                            outline={'none'}
                            borderRadius={'none'}
                            focusBorderColor={'none'}
                        />
                        <Button colorScheme={'purple'} p={'0'} variant={'ghost'} borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w='full' borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white"]}
                >
                    <Heading textTransform={'uppercase'} textAlign="center">
                        VIDEO HUB
                    </Heading>
                    <Text>
                        All rights received
                    </Text>
                </VStack>
                <VStack w='full'>
                    <Heading size={'md'} textTransform='uppercase'>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme='white'>
                        <a target={'blank'} href="https://youtube/@Best-Picks">Youtube</a>
                    </Button>
                    <Button variant={'link'} colorScheme='white'>
                        <a target={'blank'} href="https://youtube/@Best-Picks">Instagram</a>
                    </Button>
                    <Button variant={'link'} colorScheme='white'>
                        <a target={'blank'} href="https://youtube/@Best-Picks">Github</a>
                    </Button>
                </VStack>

            </Stack>
        </Box>
    )
}

export default Footer