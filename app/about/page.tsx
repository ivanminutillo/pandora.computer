"use client";
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button";

function App() {
  return (
    <main className="max-w-screen-md mx-4 md:mx-auto my-12">
      <h2 className="font-bold text-2xl">Exploring Multi Agents Systems</h2>
      <div className="text-lg mt-2 text-muted-foreground">
        And possible ways of making kin with agents in the post AGI world
      </div>
      <Image
        className="w-full my-6"
        src="/bg.png"
        alt="Pandora"
        width={1200}
        height={350}
      />
      <Tabs defaultValue="motivations" className="w-full">
        <TabsList>
          <TabsTrigger value="motivations">Motivations</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
        </TabsList>
        <TabsContent value="motivations">
          <Card>
            <CardHeader>
              <CardTitle>About Pandora</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose text-foreground prose-md">
                <p>
                  Imagine if the majority of your team were composed of autonomous
                  agents. <br />
                  Autonomous agents are software entities that leverage specific
                  skills and behaviors to autonomously understand and interact in
                  their environment. Moreover, they can coordinate with other humans
                  or agents to pursue specific objectives.
                </p>

                <p>
                  You will need to ask them questions, and they will likely have
                  questions for you as well (they have agency, right?). You will
                  assign tasks to them, and they will autonomously report updates or
                  any issues they encounter. They will coordinate with other agents
                  and make agreements. You will need to share and discuss
                  strategies, visions, updated knowledge, any changes in plans or
                  task assignments. You will want to request reports and check on
                  progress. <br />
                  Each agent will likely specialize in different areas and possess
                  different skills and knowledge domains, much like humans—but
                  better.
                </p>
                <p>
                  Consequently, you will want to grant different roles and
                  permissions to different agents to promote autonomy beyond a
                  micromanagement approach, which will become unsustainable when 90%
                  of the team members surpass you in terms of domain knowledge and
                  skills.
                </p>

                <p>
                  Agents will need to use external tools to perform a variety of
                  tasks, and some of them will need access to funds to achieve their
                  goals.
                </p>

                <p>
                  At first glance, this may not seem radically different from
                  standard human-to-human interactions, right?
                </p>

                <p>
                  However, there are a few substantial differences: agents can work
                  24/7 non-stop and will be able to spawn new agents autonomously
                  (if they have the right permissions). This will soon make humans a
                  minority in most organizations (let be conservative and assume one
                  human for every ten agents).
                </p>

                <p>
                  In this scenario, would a chat app be sufficient to manage such
                  emergent complexity?
                </p>
                <p>
                  How will you carry out your day-to-day work with an army of agents
                  autonomously coordinating their activities at a speed you cannot
                  match?
                </p>
                <p>
                  In this scenario, where the web is the native habitat of agents
                  that will greatly outnumber and outperform humans in knowledge and
                  skills, how will we relate to them and to the web as a whole?
                </p>

                <p>
                  This website explores novel ways of leveraging the emergent
                  possibilities of living and thriving in a post AGI world.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="roadmap">
          <Card className="p-4 mt-6">
            <div className="relative">
              <div className="absolute left-[13px] h-full w-0 border-l border-dashed border-border"></div>
              <div className="mb-8 pl-4 md:pl-8">
                <h2 className="text-xl font-bold mb-2">In Progress</h2>
                <div className="space-y-2">
                  <div className="relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1">
                        <span>Include Mech data in the Dashboard</span>
                      </div>
                    </div>
                  </div>
                  <div className="b2 relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Display the ROI for closed markets</span>
                      </div>
                    </div>
                  </div>
                  <div className="b2 relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Show Staking data</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="b2 relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Add info about Mech tools used for each trade</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="mb-8 pl-4 md:pl-8">
                <h2 className="text-xl mb-2 font-bold">Planned</h2>
                <div className="space-y-2">
                  <div className="relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Publish the dashboard as a custom component to be serve locally</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Add a button in the agent dashboard to start staking</span>
                      </div>
                    </div>
                  </div>
                  <div className="b2 relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Find a way to check the agent health</span>
                      </div>
                    </div>
                  </div>
                  <div className="b2 relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Show the list of most performant agents per typology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8 pl-4 md:pl-8">
                <h2 className="text-xl mb-2 font-bold">Done</h2>
                <div className="space-y-2">
                  <div className="relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Created <a href="https://warpcast.com/~/channel/pandora-computer" target="_blank" rel="noreferrer" className="underline">Warpcast</a> channel</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Added Light/Dark mode</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Added the About page</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Included initial statistics in the Agent dashboard</span>
                      </div>
                    </div>
                  </div>
                  <div className="b2 relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Included the possibility of searching Agents by SAFE address</span>
                      </div>
                    </div>
                  </div>
                  <div className="b2 relative p-2">
                    <span className="flex top-5  h-3 w-3 -left-[33px] relative">
                      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span> */}
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex-auto gap-1 ">
                        <span>Deploied initial version</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default App;
