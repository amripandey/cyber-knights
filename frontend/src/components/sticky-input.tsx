"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function StickyInput() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return // Prevent empty submissions

    setLoading(true)

    try {
      const response = await fetch("/api/input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit data")
      }

      console.log("Submitted successfully:", input)
      setInput("") // Clear input field after successful submission
    } catch (error) {
      console.error("Error submitting data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-0 w-full bg-white p-4 border-t shadow-lg mt-auto flex justify-center"
    >
      <div className="w-full max-w-[800px] flex items-center space-x-2">
        <div className="flex-grow">
          <Input
            type="text"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full text-left px-4"
            disabled={loading}
          />
        </div>
        <Button type="submit" size="icon" disabled={loading}>
          {loading ? "..." : <Send className="h-4 w-4" />}
        </Button>
      </div>
    </form>
  )
}
