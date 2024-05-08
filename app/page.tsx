'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CornerDownLeft, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
import { formatAddress } from 'ens-tools';
import Link from 'next/link'

// import Donought from '@/components/donought'
// we import types and typed-graphql document from the generated code (`..graphclient/`)
  
function App() {
  const [input, setInput] = useState("");

  return (
    <div className='h-full max-w-screen-sm mx-6  md:mx-auto mt-24'>
      <div className='w-full flex items-center flex-col place-content-center'>
        <h2 className='text-4xl mb-6 text-center '>Olas agents directory</h2>
        <Image src="/solarpunk.png" width={800} height={305} alt="Moloch.Computer" className="h-[300px] w-full rounded-md" />
        <form className="w-full mt-4 relative" action={`/predict/${input}`}>
              <Input className="w-full pr-12  h-12" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your agent Safe address..." />
              <Button size="icon" type="submit" className="absolute right-1.5 top-1.5 ml-auto gap-1.5">
                <CornerDownLeft className="size-3.5" />
              </Button>
          </form>
        <div className='grid grid-cols-3 w-full my-4 mt-2 gap-2'>
          <Link className='group' href="/predict/0xccb133749b4a2d58be39d66238e56f29D042c219">
            <Card className='w-full px-4 py-2 group-hover:bg-muted/70 transition-all'>
            <div className='flex justify-between items-top'>
              <div>
                <h3 className='font-semibold'>Trader Agent #416</h3>
                <p className='text-muted-foreground text-sm'>{formatAddress('0xccb133749b4a2d58be39d66238e56f29D042c219')}</p>
              </div>
              <ArrowUpRight className='w-5 h-5 text-muted-foreground mt-0.5'/>
            </div>
            </Card>
          </Link>
          <Link className='group' href="/predict/0x20Ce8794c864AE77e60e4A65C60B1e1300b0729D">
            <Card className='w-full px-4 py-2 group-hover:bg-muted/70 transition-all'>
            <div className='flex justify-between items-top'>
              <div>
                <h3 className='font-semibold'>Trader Agent #413</h3>
                <p className='text-muted-foreground text-sm'>{formatAddress('0x20Ce8794c864AE77e60e4A65C60B1e1300b0729D')}</p>
              </div>
              <ArrowUpRight className='w-5 h-5 text-muted-foreground mt-0.5'/>
            </div>
            </Card>
          </Link>
          <Link className='group' href="/predict/0x593C4ca4c85f24145dE87E2591B7Ec5D2e01D5E9">
            <Card className='w-full px-4 py-2 group-hover:bg-muted/70 transition-all'>
            <div className='flex justify-between items-top'>
              <div>
                <h3 className='font-semibold'>Trader Agent #418</h3>
                <p className='text-muted-foreground text-sm'>{formatAddress('0x593C4ca4c85f24145dE87E2591B7Ec5D2e01D5E9')}</p>
              </div>
              <ArrowUpRight className='w-5 h-5 text-muted-foreground mt-0.5'/>
            </div>
            </Card>
          </Link>
        </div>

        
      </div>
    </div>
  )
}

export default App