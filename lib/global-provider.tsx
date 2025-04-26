import { createContext } from "react";
import { ReactNode } from "react";
import { useAppwrite } from "./useAppwrite";
import {getCurrentUser} from "./appwrite";


interface User {
    $id: string;
    name: string;
    email: string;
    avatar: string;
}


interface GlobalContexType {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    refetch: (newParams?: Record<string, string | number>)=> Promise<void>;
}



const GlobalContext = createContext<GlobalContexType | undefined> (undefined)

export const  GlobalProvider = ({children}: {children: ReactNode })=>{
    cosnt {
        data:user,
        loading,
        refetch
    } = useAppwrite({ fn,params, skip}, {
        fn: getCurrentUser,
    })

    return (
        <GlobalContext.Provider value={}>
            {children}
        </GlobalContext.Provider>
    )
}