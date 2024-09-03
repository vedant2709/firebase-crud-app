import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


const bookCollectionRef=collection(db,"books");

class BookDataService{
    addBooks=(newBook)=>{
        return addDoc(bookCollectionRef,newBook)
    }

    updateBook=(id,updatedBook)=>{
        const bookDoc=doc(db,"books",id)
        return updateDoc(bookDoc,updatedBook)
    }

    deleteBook=(id)=>{
        const bookDoc=doc(db,"books",id)
        return deleteDoc(bookDoc)
    }

    getAllBooks=()=>{
        return getDocs(bookCollectionRef)
    }

    getBook=()=>{
        const bookDoc=doc(db,"books",id)
        return getDocs(bookDoc)
    }
}

export default new BookDataService();