import React, { createContext, useState} from "react";

export const CounterContext = createContext()

export const CounterProvider = ({children})=>{
    const [count, setCount] = useState(0)
    const values = {
        count,
        suma(){
            setCount( val => val+1)
        },
        resta(){
            setCount( val => val -1)
        },
        user: {
            jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        }
    }

     return <CounterContext.Provider value={ values }>
        {children}
     </CounterContext.Provider>
}