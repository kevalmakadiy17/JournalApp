// Import necessary components and functions from respective libraries
import {
  // Chakra UI components
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';

// Chakra UI icons for light/dark mode
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// React Router functionality for navigation
import { useNavigate } from 'react-router-dom';

// Redux hooks for state management
import { useDispatch, useSelector } from 'react-redux';

// Importing action type for logout functionality from user.types file
import { LOGOUT } from '../../../Redux/users/user.types';

// Default export for the Navbar component
export default function Navbar() {
  // Retrieve the color mode and function to toggle color mode from Chakra UI
  const { colorMode, toggleColorMode } = useColorMode();

  // Dispatch function obtained from Redux for triggering actions
  const dispatch = useDispatch();

  // Select specific state variables from Redux store
  const { auth} = useSelector((state) => state.userReducer);
  console.log(auth); // Log the 'auth' variable

  // Navigation function from React Router DOM
  const nav = useNavigate();

  // Component rendering for the global Navbar
  return (
    <>
      {/* Navbar structure */}
      <Box zIndex={1000} position={'fixed'} top={0} w={'100%'} boxShadow={'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'} bg={'green'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Logo/Title of the app, clickable to redirect to the main page */}
          <Box fontWeight={'bold'} cursor={'pointer'} onClick={() => { nav('/'); }} color="white">
            Notes App
          </Box>

          {/* Right-side elements on the Navbar */}
          <Flex alignItems={'center'}>
            <Stack alignItems={'center'} direction={'row'} spacing={7}>

              {/* Conditional rendering of buttons based on the 'auth' state */}
              <Button display={auth === true ? 'block' : 'none'} bg={'lightblue'} color={'black'} onClick={() => { nav('/notes'); }}>
                All Notes
              </Button>
              <Button display={auth === true ? 'none' : 'block'} bg={'lightblue'} color={'black'} onClick={() => { nav('/register'); }}>
                Sign up
              </Button>
              <Button display={auth === true ? 'none' : 'block'} bg={'lightblue'} color={'black'} onClick={() => { nav('/login'); }}>
                Login
              </Button>

              {/* Toggle light/dark mode button */}
              <Button bg={'lightblue'} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* Avatar dropdown menu */}
              <Menu>
                <MenuButton
                  as={Button}
                  border="2px solid yellow"
                  padding={2}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* Menu options */}
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  {/* Dispatches the logout action on click */}
                  <MenuItem onClick={() => { dispatch({ type: LOGOUT }); }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
