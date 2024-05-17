"use client"
// lib/withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from './firebase';


const AuthProvider = ({children}:any) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push('/login'); // Redirect to login page if not authenticated
        }
      });

      return () => unsubscribe();
    }, [router]);

    return (<>{children}</>);
};

export default AuthProvider;
