import React, { useEffect } from "react"

const ChatbotEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.chatbase.co/embed.min.js"
    script.setAttribute("chatbotId", "q4ZlkvlhjGhRIu14UjtCU")
    script.setAttribute("domain", "www.chatbase.co")
    script.defer = true

    const configScript = document.createElement("script")
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "q4ZlkvlhjGhRIu14UjtCU",
        domain: "www.chatbase.co"
      }
    `

    document.body.appendChild(configScript)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(configScript)
      document.body.removeChild(script)
    }
  }, [])

  return <div id="chatbot-container" />
}

export default ChatbotEmbed
