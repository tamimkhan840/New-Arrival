/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider,createUserWithEmailAndPassword, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();


export const ContextProvider = ({ children }) => {


    const [flashData, setFlashData] = useState([])
    const [bestSelling, setBestSelling] = useState([])
    const [ourProduct, setOurProduct] = useState([])
    const [product, setProduct] = useState([])
    const [addToCart,setAddToCart] = useState([])
    const [favorite, setFavorite] = useState([])
    const [onOpen,setOnOpen] = useState(false)

    const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
//   const [loading, setLoading] = useState(true);

    console.log(favorite);
    const signUpWithEmailAndPassword = async (email, password, ) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          // Here you can also add code to store the user's name in the Firebase database if needed
          alert('Sign-up successful');
          setCurrentUser(user);
          navigate("/")
        } catch (error) {
          throw new Error(error.message);
        }
      };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          setCurrentUser(result.user);
          alert("Google login successful.");
          navigate("/")
        } catch (error) {
          console.error("Google Login Error:", error);
        }
      };

      const loginWithGithub = async () => {
        const provider = new GithubAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          setCurrentUser(result.user);
          alert("Github login successful");
          navigate("/")
        } catch (error) {
          console.error("GitHub Login Error:", error);
        }
      };
     const loginWithEmailAndPassword = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser(userCredential.user);
            alert('Login successful');
            navigate("/")
          } catch (error) {
            alert("Login failed.: " + error.message);
          }
     }
      const logout = async () => {
        try {
          await signOut(auth);
          setCurrentUser(null);
          alert("Logout successful.");
          navigate("/log-in")
        } catch (error) {
          console.error("Logout Error:", error);
        }
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
        });
        return unsubscribe;
      }, []);

    useEffect(() => {
        async function fetchAllData() {
            try {
                const flashResponse = await axios.get('https://fakestoreapi.com/products?limit=7');
                const bestSellingResponse = await axios.get('https://fakestoreapi.com/products?limit=4');
                const ourProductResponse = await axios.get('https://fakestoreapi.com/products?limit=8');

                setFlashData(flashResponse.data);
                setBestSelling(bestSellingResponse.data);
                setOurProduct(ourProductResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchAllData();
    }, []);


    const value = {
        flashData,
        setFlashData,
        addToCart,
        setAddToCart,
        favorite,
        setFavorite,
        onOpen,
        setOnOpen,
        bestSelling,
        ourProduct,
        setProduct,
        product,
        currentUser, loginWithGoogle, loginWithGithub, logout,
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword
    }



    return (
        <ShopContext.Provider value={value}>
         {!loading && children}
        </ShopContext.Provider>
    )
}