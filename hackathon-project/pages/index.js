import Image from 'next/image'
import {Box, Button, Center, HStack, Spacer, Text, VStack} from "@chakra-ui/react";
import landinglogo from "../public/landingLogo.png";
import landingfront from "../public/landingpagefrontimage.svg"

export default function Home() {
  return (
    <div style={{height: '100vh', backgroundColor: '#71E294', width: '100vw'}}>
       <Box>
        <HStack ml={66} mr={66} pt={43}>
           <Image src={landinglogo} alt={'https://via.placeholder.com/150'} width={'200px'} height={'50px'}/>
           <Spacer width={'full'}/>
           <Button variant={'ghost'}>Login</Button>
           <Button colorScheme={'orange'}>Sign up</Button>
         </HStack>
       </Box>
      <Center>
          <HStack>
              <div style={{paddingRight: '7px'}}>
                  <VStack alignItems={'flex-start'}>
                      <HStack>
                          <Text fontSize={'4xl'} fontWeight={700} color={'darkgreen'}>Bloom</Text>
                          <Text fontSize={'4xl'} fontWeight={700} color={'white'}>into your</Text>
                      </HStack>
                      <Text fontSize={'4xl'} fontWeight={700} color={'white'}>
                          new, improved self.
                      </Text>
                      <Text fontSize={'xs'} color={'white'}> Bloom is a way for you to begin your day with a positive step.</Text>
                      <Text fontSize={'xs'} color={'white'}> Enjoy health and wellness content while earning Bloomcoin (BLCN).</Text>
                      <Button colorScheme={'green'} borderRadius={20} as={'a'} href={'/Homepage.js'}>Get Started</Button>
                  </VStack>



              </div>
              <Image src={landingfront} alt={'https://via.placeholder.com/150'} width={'584px'} height={'548px'}/>
          </HStack>
      </Center>
      </div>
  )
}
