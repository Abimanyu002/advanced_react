import React from "react"
import Header from "./Header"
import Button from "./Button"
/**
 * Challenge: set up the context again on your own!
 */
const Theme=React.createContext()

export default function App() {
    return (
      <Theme.Provider value="light">
          <div className="container dark-theme">
              <Header />
              <Button />
          </div>
      </Theme.Provider>
    )
}
export {Theme} 