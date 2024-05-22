"use client"
// lib/withAuth.js
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { auth } from './firebase';


const AuthProvider = ({children}:any) => {
    const router = useRouter();

    const pathName = usePathname();
    const excludedRoutes = ["/login", "signup"];
    useEffect(() => {
      const isExcludedRoute = excludedRoutes.includes(pathName);
      if(excludedRoutes) return;
    
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
