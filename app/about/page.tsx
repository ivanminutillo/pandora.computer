'use client'
import React, { useEffect } from 'react'
// import Donought from '@/components/donought'
// we import types and typed-graphql document from the generated code (`..graphclient/`)
import { TradesDocument, TradesQuery, execute } from '../.graphclient'
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
  
function App() {
  
  return (
    <main className='max-w-screen-md mx-auto my-12'>
      <div className='prose prose-md'>
        <h2>Toward Multi Agents co-owning Communities</h2>
        <h4>An ongoing experiment in designing new User Experiences for a multi agents world.</h4>
        <p>The messaging app is a crucial organization tool for most of the today companies, critical for fluent and direct communication among all the team members.
        It allows startups, collectives, communities of any size, to coordinate remotely and flourish in a p2p way. We know them, most of us live in these systems daily. </p>
        <p>There's one hack tough. They have been designed for human to human communication.</p>

        <p>Imagine if the majority of your team is made of autonomous agents. <br/>
        Autonomous Agents are software that leverages upon a specific set of skills and behaviours to autonomously understand and interact in the environment they live in, plus they can coordinate with other humans or agents to pursue specific objectives.</p>

        <p>You need to ask them questions, and they will likely ask questions to you as well (they have agency right?) you will assign them tasks, they will autonomously report updates or any issues they'll face, they will coordinate with other agents and make agreements. 
        You need to share and discuss strategies, visions, updated knowledge, any plan variation or tasks assignment.
        You'll want to ask for reports and check progresses. <br/>
        Each Agent will likely be specialized in different areas and have different skills and knowledge domains, exactly like humans <b>- but better</b>. </p>
        <p>Therefore, You'll want to grant different roles and permissions to different agents to promote autonomy beyond a micromanagement approach that will be impossible to sustain when the 90% of the team members surpass you in terms of domain knowledge and skills. </p>

        <p> Agents will need to use external tools to perform a variety of tasks and some of them will need access to funds to achieve their goals. </p>

        <p>At first glance, this may not sound radically different from standard human-to-human interactions, isn'it?</p>

        <p>Well there are few substantial differences: agents will work 24h non stop and they'll be able to spawn new agents autonomously (if they've the right permission). This will make soon humans a minority in most of the organizations (let be conservative and assumes 1 human each 10 agents).</p>

        <p>In this scenario, would a chat app be sufficient to deal with such emergent complexity?</p>
        <p>How will you carry your day to day work with an army of agents autonomously coordinating their activities at a speed you will not be able to carry with?</p>
        <p>In this scenario, where the web will be the native habitat of agents that will heavily surpass humans in numbers, knowledge and skills, how will we relate with them and with the web as a whole?</p>

        <p>This website explores novel ways of leveraging the emergent possibilities of living and thriving in a world with autonomous agents.</p>
      </div>
    </main>
  )
}

export default App