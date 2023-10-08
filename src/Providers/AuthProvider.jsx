/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import SweetAlert2 from "react-sweetalert2";
import Swal from "sweetalert2";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    // set user

    const [user, setUser] = useState(null);

    // create user

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update user

    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    };

    // sign in user

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // sign out user 

    const signOutUser = () => {
        setLoading(true);
        Swal.fire({
            title: '<strong>Logged Out</strong>',
            icon: 'info',
            html:
                'How Was Your Experience?',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i> Not Good',
            cancelButtonAriaLabel: 'Thumbs down'
        })
        setTimeout(() => {
            return signOut(auth);
        }, 1000);

    }

    // observing the user

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("observing current user", currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = { user, createUser, updateUser, signInUser, signInWithGoogle, signOutUser, loading };



    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            <SweetAlert2></SweetAlert2>
        </div>
    );
};

export default AuthProvider;