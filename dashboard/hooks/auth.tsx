import React,
{
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react';

import { api } from '../services/api';
import { createClient } from '@supabase/supabase-js'

const NEXT_PUBLIC_SUPABASE_URL:string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const NEXT_PUBLIC_SUPABASE_KEY:string = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  loading?: boolean;
  signInWithEmail: () => Promise<void>;
  signUpWithEmail: () => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {

  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false);
  console.log('------data--------->',NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY)
  const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY)

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-pass5word',
    })

    console.log('------data--------->',data)
    console.log('--------error------->',error)
  }


  const signUpWithEmail = async () => {


    const { data, error } = await supabase.auth.signUp({
      email: 'example@email.com',
      password: 'example-password',
    })

   
    console.log('------data--------->',data)
    console.log('--------error------->',error)
  }


  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }
  const loadUserStorageData = async () => {

  }

  useEffect(() => {
    loadUserStorageData();
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      signInWithEmail,
      loading,
      signUpWithEmail,
      signOut,
      signInWithGoogle
    }}
    >
      {children}
    </AuthContext.Provider>
  )

}

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth,
}
