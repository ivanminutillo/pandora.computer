'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CornerDownLeft } from 'lucide-react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
// import Donought from '@/components/donought'
// we import types and typed-graphql document from the generated code (`..graphclient/`)
  
function App() {
  const [input, setInput] = useState("");

  return (
    <main className='h-full max-w-screen-sm mx-auto mt-24'>
      <div className='w-full flex items-center flex-col place-content-center'>
        <Image src="/logo.png" width={124} height={124} alt="Moloch.Computer" className="h-[180px] w-[180px]" />
        <h2 className='text-4xl my-6 text-center '>Find your agent</h2>
        <form className="w-full relative" action={`/predict/${input}`}>
              <Input className="w-full pr-12 bg-white h-12" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your agent Safe address..." />
              <Button size="icon" type="submit" className="absolute right-1.5 top-1.5 ml-auto gap-1.5">
                <CornerDownLeft className="size-3.5" />
              </Button>
          </form>

        <Separator className='mt-4' />
        <footer className=' pt-4 w-full'>
          <div className='text-sm'>
            <span>Made by <a href="https://discordapp.com/users/ivanminutillo" target="_blank" rel="noreferrer" className='text-blue-500'>tatha.eth</a></span>
            <span className='px-4'>·</span>
            <span>Donation: 0x3fd7c92B0a5d23dc5355244EEa8C59933C8eaBC2</span>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App