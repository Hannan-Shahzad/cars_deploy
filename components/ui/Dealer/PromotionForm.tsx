import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/User/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PromotionForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Submitted:", { title, description })
    // Reset form
    setTitle("")
    setDescription("")
  }

  return (
    <Card className="theme-card">
      <CardHeader>
        <CardTitle className="text-3xl">Create Promotion</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="promo-title" className="block text-xl font-medium mb-2">
              Promotion Title
            </label>
            <Input
              id="promo-title"
              className="theme-input w-full text-lg p-3"
              placeholder="Summer Sale"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="promo-description" className="block text-xl font-medium mb-2">
              Description
            </label>
            <textarea
              id="promo-description"
              className="theme-input w-full h-36 resize-none text-lg p-3"
              placeholder="Describe your promotion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <Button type="submit" className="theme-button-outline w-full text-xl py-6">
            Create Promotion
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

