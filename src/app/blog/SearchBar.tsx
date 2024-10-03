'use client'

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export default function SearchBar({ placeholder, onSearch }: { placeholder: string, onSearch: (query: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearch}
        className="w-full py-2 pr-10 pl-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
    </div>
  )
}