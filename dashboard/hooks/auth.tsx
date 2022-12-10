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
  signIn: () => Promise<void>;
  signUp: () => Promise<void>;
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

  const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY)

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

  }


  const signIn = async () => {
    try {
      setLoading(true);

    } catch {
      throw new Error("Não autorizado");
    } finally {
      setLoading(false);
    }
  }

  const signOut = async () => {
    setUser({} as User);
  }

  const signUp = async () => {
    setUser({} as User);
  }


  async function signout() {
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
      signIn,
      loading,
      signUp,
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
