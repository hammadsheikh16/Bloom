import Card from "../Components/Cards";
import vid1 from "../public/video 1.jpg"
import {Box, HStack, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import currStats from "../public/curr bloomcoin stats.png"

export default function HomePage(){
        return (
            <div style={{height: '100vh', backgroundColor: '#F2F2F2', width: '100vw'}}>
                    <HStack ml={54} mr={54}>


                        <Box backgroundColor={'white'} w={'800px'} h={'487px'} borderRadius={'lg'}>



                        </Box>



                        <Card image={vid1} width={'auto'} height={'auto'}
                              title={'Beginner’s Guide to Healthy Eating | 15 healthy eating tips'}
                              time={'11:43'} coinAmount={'0.02'}
                              name={'Fit Voyager'}
                              videoDate={'1,00000 views May 27 2022'}
                              description={'I appreciate your curiosity about my eating habits, sleep patterns, exercise routine and more. So, I figured we could spend the day together to get your questions answered! Watch to learn all about my daily wellness routine that keeps me...'}/>
                        <Box backgroundColor={'white'}></Box>


                        <Box backgroundColor={'white'} w={'800px'} h={'487px'} borderRadius={'lg'}>

                            <VStack alignItems={'left'} marginX={18}>

                                <Text fontSize={'large'} fontWeight={'bold'}>Bloomcoin</Text>
                                <Image src={currStats} alt={'https://via.placeholder.com/150'} layout={'intrinsic'}/>
                                <Text fontWeight={'bold'}>Current Value</Text>
                                <Text fontSize={'small'}>BLCN</Text>
                                <Text fontSize={'large'}>768.39 CAD</Text>

                            </VStack>

                        </Box>


                    </HStack>

            </div>
            )

}