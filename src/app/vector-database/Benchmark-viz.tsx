'use client'

import { useState } from "react"
import { Info } from "lucide-react"
import { Afacad, Noto_Sans_Mono, Geologica } from 'next/font/google'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const afacad = Afacad({ weight: ['400', '500', '600', '700'], subsets: ["latin"], display: 'swap' })
export const noto_sans_mono = Noto_Sans_Mono({ weight: ['400', '500', '600', '700'], subsets: ["latin"], display: 'swap' })
export const geologica = Geologica({ weight: ['400', '500', '600', '700'], subsets: ["latin"], display: 'swap' })

type LatencyData = {
  p50: number
  p90: number
  p99: number
  max: number
}

type RecallData = {
  k1: number
  k10: number
  k100: number
}

type ScaleData = {
  documents: string
  warmLatency: LatencyData
  coldLatency: LatencyData
  recallPrecision: RecallData
}

const benchmarkData: ScaleData[] = [
  {
    documents: "1m",
    warmLatency: { p50: 28, p90: 37, p99: 65, max: 98 },
    coldLatency: { p50: 48, p90: 67, p99: 85, max: 128 },
    recallPrecision: { k1: 95, k10: 90, k100: 85 },
  },
  {
    documents: "10m",
    warmLatency: { p50: 35, p90: 45, p99: 75, max: 110 },
    coldLatency: { p50: 55, p90: 75, p99: 95, max: 140 },
    recallPrecision: { k1: 93, k10: 88, k100: 83 },
  },
  {
    documents: "100m",
    warmLatency: { p50: 45, p90: 58, p99: 88, max: 125 },
    coldLatency: { p50: 65, p90: 88, p99: 108, max: 155 },
    recallPrecision: { k1: 91, k10: 86, k100: 81 },
  },
  {
    documents: "1B",
    warmLatency: { p50: 55, p90: 68, p99: 98, max: 135 },
    coldLatency: { p50: 75, p90: 98, p99: 118, max: 165 },
    recallPrecision: { k1: 89, k10: 84, k100: 79 },
  },
]

export default function Component() {
  const [queryType, setQueryType] = useState<"warm" | "cold">("warm")

  const getPercentageWidth = (value: number, maxValue: number) => {
    return `${(value / maxValue) * 100}%`
  }

  return (
    <div className={`max-w-[1440px] mx-auto px-4 py-12 ${geologica.className} `}>
      {/* <div className={`max-w-[1440px] mx-auto px-4 py-12 ${geologica.className}  mt-[50px] sm:mt-[80px] md:mt-[90px] lg:mt-[100px] xl:mt-[140px] 2xl:mt-[180px] pb-[0px] lg:pb-[60px] relative transform -skew-y-6 origin-top-left`}> */}
      {/* <div className="relative bg-transparent transform skew-y-6 origin-top-left mb-0"> */}
      <Card className="bg-white shadow-md rounded-lg">
        <CardHeader className="pb-2">
          <CardTitle className={`text-2xl sm:text-3xl font-bold text-left text-[#0055c8] ${geologica.className} mt-4`}>Vector Database Benchmark</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <Tabs defaultValue="1m" className="space-y-6">
            <div className="inline-block">
              <div className="bg-gray-100 p-4 rounded-lg">
                <TabsList className="bg-transparent">
                  {benchmarkData.map((scale) => (
                    <TabsTrigger
                      key={scale.documents}
                      value={scale.documents}
                      className={`inline-block px-2 lg:px-4 py-3 rounded-lg transition duration-300 flex items-center min-w-[50px] sm:min-w-[125px] lg:min-w-[200px] justify-center ${afacad.className} text-base data-[state=active]:bg-[#0055c8] data-[state=active]:text-white`}
                    >
                      {scale.documents}<span className="hidden sm:inline-block">&nbsp;documents</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
            {benchmarkData.map((scale) => (
              <TabsContent key={scale.documents} value={scale.documents}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className={`text-lg sm:text-xl font-bold text-[#0055c8] mb-2 text-left ${geologica.className}`}>Query Latency</h3>
                    <div className="space-y-2">
                      {Object.entries(queryType === "warm" ? scale.warmLatency : scale.coldLatency).map(([percentile, value]) => (
                        <div key={percentile} className="grid grid-cols-[80px_1fr_60px] items-center gap-2">
                          <div className={`text-sm sm:text-base text-[#374151] ${afacad.className} font-medium`}>{percentile.toUpperCase()}</div>
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#0055c8] rounded-full transition-all duration-500 ease-out"
                              style={{ width: getPercentageWidth(value, scale[`${queryType}Latency`].max) }}
                            />
                          </div>
                          <div className={`text-sm sm:text-base text-[#374151] ${afacad.className} tabular-nums text-right`}>{value}ms</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex rounded-full overflow-hidden border border-[#0055c8] w-fit">
                      <Button
                        variant="ghost"
                        className={`inline-block px-2 lg:px-4 py-3 rounded-lg transition duration-300 flex items-center min-w-[125px] lg:min-w-[200px] justify-center ${afacad.className} rounded-none text-base focus:bg-[#0055c8] focus:text-white ${queryType === "warm" ? "bg-[#0055c8] text-white" : "text-[#0055c8]"}`}
                        onClick={() => setQueryType("warm")}
                      >
                        Warm
                      </Button>
                      <Button
                        variant="ghost"
                        className={`inline-block px-2 lg:px-4 py-3 rounded-lg transition duration-300 flex items-center min-w-[125px] lg:min-w-[200px] justify-center ${afacad.className} rounded-none text-base focus:bg-[#0055c8] focus:text-white ${queryType === "cold" ? "bg-[#0055c8] text-white" : "text-[#0055c8]"}`}
                        onClick={() => setQueryType("cold")}
                      >
                        Cold
                      </Button>
                    </div>
                    <div className={`flex items-center gap-2 text-sm sm:text-base text-[#374151] ${afacad.className}`}>
                      <Info className="h-4 w-4" />
                      <span>
                        {queryType === "warm"
                          ? "Warm queries have all their data in cache."
                          : "Cold queries need to load data from disk."}
                      </span>
                    </div>
                    <p className={`text-sm sm:text-base text-[#374151] ${afacad.className}`}>
                      Approach: Search for 100 random vectors from the 768d dataset with top k = 10, when dataset is
                      {queryType === "warm" ? " fully in cache" : " not in cache"}.
                      {queryType === "warm"
                        ? " Warming the cache for an index takes about ~10s (for 1m vectors) after the first cold query, and typically stays in cache for a few hours."
                        : " Cold queries require loading data from disk, which increases latency."}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className={`text-lg sm:text-xl font-bold text-[#0055c8] mb-2 text-left ${geologica.className}`}>Recall Precision</h3>
                    <div className="space-y-2">
                      {Object.entries(scale.recallPrecision).map(([k, value]) => (
                        <div key={k} className="grid grid-cols-[80px_1fr_60px] items-center gap-2">
                          <div className={`text-sm sm:text-base text-[#374151] ${afacad.className} font-medium`}>Recall@{k.slice(1)}</div>
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#0055c8] rounded-full transition-all duration-500 ease-out"
                              style={{ width: `${value}%` }}
                            />
                          </div>
                          <div className={`text-sm sm:text-base text-[#374151] ${afacad.className} tabular-nums text-right`}>{value}%</div>
                        </div>
                      ))}
                    </div>
                    <div className="md:h-[116px]" /> {/* Adjusted spacer to align with Query Latency section */}
                    <p className={`text-sm sm:text-base text-[#374151] ${afacad.className}`}>
                      Approach: Measure the percentage of correct results returned by the vector database compared to
                      an exact nearest neighbor search at different k values. Higher percentages indicate better accuracy in finding similar vectors.
                      This metric is crucial for understanding the trade-off between search speed and result accuracy at various levels of precision.
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
      {/* </div> */}
    </div>
  )
}