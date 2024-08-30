// Import necessary components and functions from respective libraries
import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Importing necessary Redux actions and components
import NoteCard from "../components/Homepage/NotesPage/NoteCards/NoteCard";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import { BsPlusLg } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

// React functional component for the Notes Page
export default function NotesPage() {
  const dispatch = useDispatch();
  
  // Fetching note data from Redux store
  const { data } = useSelector((state) => state.noteReducer);
  console.log(data);
  
  // State variables for managing notes and modal visibility
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Refs for initial and final focus inside the modal
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  
  // State variables to manage title and body of the new note
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Fetch notes data from Redux upon component mount
  useEffect(() => {
    dispatch(getNotes());
    // eslint-disable-next-line
  }, []);

  // Update notes when 'data' (Redux state) changes
  useEffect(() => {
    setNotes(data);
  }, [data]);

  // Function to create a new note
  const createNote = () => {
    dispatch(createNotes({ title, body }));
    onClose(); // Close the modal after creating the note
  };

  return (
    <Box mt={20} padding={8}>
      {/* Grid layout to display notes */}
      <Grid
        gap={10}
        w={"90%"}
        margin={"auto"}
        gridTemplateColumns="repeat(4 ,1fr)"
      >
        {/* Mapping through notes to display NoteCards */}
        {notes?.map((el) => (
          <NoteCard {...el} />
        ))}
      </Grid>

      {/* Button to open the modal for creating a new note */}
      <>
        <IconButton
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
          }
          position={"fixed"}
          w={"80px"}
          h={"80px"}
          borderRadius={50}
          bg={"yellowgreen"}
          bottom={0}
          right={0}
          onClick={onOpen}
          margin={16}
          icon={<BsPlusLg />}
        ></IconButton>

        {/* Modal for creating a new note */}
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

              {/* Input fields for title and body of the note */}
              <Input value={title} placeholder="Please enter title" onChange={(e) => setTitle(e.target.value)}></Input>
              <Textarea mt={8} value={body} placeholder={'Please enter description'} onChange={(e) => setBody(e.target.value)}></Textarea>
              
            </ModalBody>

            {/* Buttons to create or cancel creating a note */}
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={createNote}>
                Create
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
}
