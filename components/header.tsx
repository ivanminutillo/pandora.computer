'use client'
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function Header() {
  const [input, setInput] = useState("");
    return (
    <header className="sticky relative top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="flex-col relative z-20 gap-6 text-lg font-medium flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex flex-1 items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Image src="/logo.png" width={32} height={32} alt="Moloch.Computer" className="h-[3rem] w-[3rem]" />
          <span>Pandora</span>
          {/* <form className="w-full pl-2 " action={`/predict/${input}`}>
            <Input className="w-full md:w-[420px]" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your agent Safe address..." />
        </form> */}
        </Link>
        {/* Add a search bar that takes the input value and redirect to /predict/[id] */}
        
      </nav>
      
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link href="#" className="hover:text-foreground">
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet> */}
      <div className="md:flex hidden relative z-20 justify-end w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Link
          href="/about"
          className="text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          About
        </Link>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </header>
    )
}