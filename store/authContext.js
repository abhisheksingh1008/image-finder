"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthContext = createContext({
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const toast = useToast();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      toast({
        title: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else if (data.user) {
      //   console.log(data.user);
      setUser(data.user);
      toast({
        title: "Login successful!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }

    router.replace("/");
  };

  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.log(error);
      toast({
        title: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else if (data.user) {
      //   console.log(data.user);
      setUser(data.user);
      toast({
        title: "Sign up successful!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }

    router.replace("/");
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  };

  useEffect(() => {
    async function getUser() {
      await supabase.auth.getUser().then((data) => setUser(data.user));
    }

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
