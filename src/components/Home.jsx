import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
const headingOptions = {
    pos: "absolute",
    left: '50%',
    top: '50%',
    transform: "translate(-50%,-50%)",
    textTransform: 'uppercase',
    p: "4",
    size: "4xl"
}
const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container minW={'100vh'} maxW={'container.xl'} p={'16'}>
                <Heading textTransform={'uppercase'} m='auto' py={'2'} w='fit-content' borderBottom={'solid'}>
                    Services
                </Heading>
                <Stack
                    h={'full'}
                    alignItems='center'
                    p={'4'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['40', '400']} filter='hue-rotate(-130deg)' />
                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign='center'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quas aut numquam molestias quibusdam, iure dolorem vitae ea dolore pariatur. Odio voluptate optio consequuntur laborum ea, illum ullam quos, ut libero qui dolor? Recusandae praesentium accusantium a sit eum at odit nihil quaerat amet deserunt, nesciunt incidunt culpa numquam deleniti sint nisi quo quae. Quod repellat debitis velit non dolores nam ullam eligendi nobis inventore, rem harum eius atque voluptatibus accusantium quo ducimus recusandae tempora exercitationem iste. Corporis voluptates velit quidem incidunt, commodi repellendus ducimus cum magni? Recusandae, repellat optio! Sequi ipsam iure deserunt similique, ipsa error voluptates libero provident!
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night life is cool
            </Heading>
        </Box>
    </Carousel>
);

export default Home;