import { Box, Image, Text, Grid, GridItem, VStack } from "@chakra-ui/react";
export default function Homepage() {
  return (
<Grid
      minH={'100vh'}
      align={'center'}
      justify={'center'}
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='300px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    if i was to jsut type
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'nav'}>
  <VStack
    
  spacing={4}
  align='stretch'
>
      <Box h='90px' padding={'20px'} >
      <Image src='https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png' alt='Dan Abramov' borderRadius='full'/>
      </Box>
      <Box h='100px'padding={'20px'}  >
      <Image src='https://www.modernenglishteacher.com/media/31613/taking-notes-1.jpg?width=470&height=313'  borderRadius='full' alt='Dan Abramov' />
      </Box>
      <Box h='90px' padding={'20px'} >
      <Image src='https://media.istockphoto.com/id/1035462384/photo/close-up-woman-hand-writing-on-notebook.jpg?s=612x612&w=0&k=20&c=xVEbAAJ3mnolrGjQ5WDoSUAlofUAkCp1mYuDwLFYWiM=' alt='Dan Abramov' borderRadius='full'/>
      </Box>
      <Box h='90px' padding={'20px'} >
      <Image src='https://media.istockphoto.com/id/1278058065/photo/day-one-of-getting-my-life-into-gear.jpg?s=612x612&w=0&k=20&c=T7L-twVDFczTkc6FHqFXN2XFJtgkRNVBTaUQ_UPdPTA=' alt='Dan Abramov' borderRadius='full'/>
      </Box>
      <Box h='90px' padding={'20px'} >
      <Image src='https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png' alt='Dan Abramov' borderRadius='full'/>
      </Box>
      <Box h='100px'padding={'20px'}  >
      <Image src='https://www.modernenglishteacher.com/media/31613/taking-notes-1.jpg?width=470&height=313'  borderRadius='full' alt='Dan Abramov' />
      </Box>
</VStack>
  </GridItem>
  <GridItem pl='2' bg='lightbrown' area={'main'}>
    <Box padding={'10px'}>
      <Text fontSize='2xl' textColor={'purple.300'}>
      Our notes app is a platform that allows users to organize their thoughts, ideas, tasks, and important information conveniently. It typically encompasses functionalities such as user authentication, note creation, editing, and deletion.
      </Text>
    </Box>
    <Box padding={'10px'} textColor={'red.300'}>
      <Text fontSize='2xl'>
      The app enables users to register by creating an account with a unique username, email, and password. Once registered, users can log in to access their personalized space. Within the app, users can create new notes, each consisting of a title and content, offering a way to jot down thoughts, reminders, or lists. Users have the flexibility to update existing notes, modifying their content or details as needed. Additionally, the app provides the functionality to delete unwanted notes, keeping the workspace tidy and organized.      </Text>
    </Box>
    <Box padding={'10px'}>
      <Text fontSize='2xl' textColor={'green.300'}>
      Furthermore, this application prioritizes security by implementing proper authentication protocols, ensuring user data remains protected. Its user-friendly interface allows individuals to manage their notes efficiently, facilitating easy creation, modification, and removal of notes according to their preferences and needs. Overall, the app's core features center around empowering users to store and manage their information effectively, offering a seamless experience for organizing and accessing personal notes.
</Text>
    </Box>
  </GridItem>
  <GridItem pl='2' bg='orange.300' area={'footer'}>
  &copy; 18111 Nordhoff St, Northridge, CA 91330
  </GridItem>
</Grid>
  );
}