import { async } from "@firebase/util";
import { DockSharp } from "@mui/icons-material";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { logoutFirebase } from "../../firebase/providers";
import { fileUpload, loadNotes } from "../../helpers";
import { logout } from "../auth/authSlice";
import {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const starLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;
    console.log(noteToFireStore);

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });

    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving);
    //esta linea de codigo solo sube una imagen
    // await fileUpload(files[0]);

    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }
    const photosUrl = await Promise.all(fileUploadPromises);
    console.log("photosUrl", photosUrl);
    dispatch(setPhotosToActiveNote(photosUrl));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout());
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/note s/${note.id}`);
    await deleteDoc(docRef);
    dispatch(deleteNoteById(note.id));
  };
};
