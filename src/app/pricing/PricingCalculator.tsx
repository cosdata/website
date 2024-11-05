'use client'

import { useState } from "react"
import { Info } from "lucide-react"
import { Afacad, Noto_Sans_Mono, Geologica } from 'next/font/google'
import { commonStyles } from '../styles/common'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const afacad = Afacad({ weight: ['400', '500', '600', '700'], subsets: ["latin"], display: 'swap' })
export const noto_sans_mono = Noto_Sans_Mono({ weight: ['400', '500', '600', '700'], subsets: ["latin"], display: 'swap' })
export const geologica = Geologica({ weight: ['400', '500', '600', '700'], subsets: ["latin"], display: 'swap' })

const dimensions = [768, 1024, 1536, 3072]
const scaleMarkers = ['10k', '100k', '1m', '10m', '100m', '1b']
const scaleValues = [10000, 100000, 1000000, 10000000, 100000000, 1000000000]

function formatNumber(num: number): string {
  if (num >= 1000000000) return `${(num / 1000000000).toFixed(0)}B`
  if (num >= 1000000) return `${(num / 1000000).toFixed(0)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
  return num.toString()
}

function parseInputValue(value: string): number {
  const cleanValue = value.toLowerCase().replace(/[^0-9kmb]/g, '')
  if (cleanValue.endsWith('b')) return parseFloat(cleanValue) * 1000000000
  if (cleanValue.endsWith('m')) return parseFloat(cleanValue) * 1000000
  if (cleanValue.endsWith('k')) return parseFloat(cleanValue) * 1000
  return parseFloat(cleanValue) || 0
}

export default function Component() {
  const [selectedDimension, setSelectedDimension] = useState(1536)
  const [vectorsWritten, setVectorsWritten] = useState(1000000)
  const [queriesPerMonth, setQueriesPerMonth] = useState(1000000)
  const [totalVectors, setTotalVectors] = useState(1000000)

  const writeCost = (vectorsWritten / 1000000) * 4 * (selectedDimension / 1536)
  const queryCost = (queriesPerMonth / 1000000) * 10 * (selectedDimension / 1536)
  const storageCost = (selectedDimension * 4 * totalVectors / 1000000000) * 0.33
  const totalCost = writeCost + queryCost + storageCost

  return (
    <div className={` ${geologica.className} ${commonStyles.mainContainer}  flex flex-col items-center`}>
      <div className="grid md:grid-cols-[2fr_1fr] w-full gap-6">
        <Card className="bg-white shadow-md rounded-lg xl:min-w-[800px]">
          <CardHeader className="pb-2">
            <CardTitle className={`text-2xl sm:text-3xl xl:text-4xl font-bold text-left text-[#0055c8] ${geologica.className} mt-4`}>
              Cosdata Cloud Pricing Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 xl:text-xl">
            <div className="space-y-2">
              <label className={`text-sm xl:text-xl font-medium text-[#374151] ${afacad.className}`}>Dimensions</label>
              <Select
                value={selectedDimension.toString()}
                onValueChange={(value) => setSelectedDimension(parseInt(value))}
              >
                <SelectTrigger className="w-[200px] xl:w-[300px] xl:text-xl">
                  <SelectValue placeholder="Select dimensions" />
                </SelectTrigger>
                <SelectContent>
                  {dimensions.map((d) => (
                    <SelectItem key={d} value={d.toString()} className={`xl:text-xl ${afacad.className}`}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {[
              {
                label: "Vectors Written Per Month",
                value: vectorsWritten,
                setValue: setVectorsWritten,
              },
              {
                label: "Queries Per Month",
                value: queriesPerMonth,
                setValue: setQueriesPerMonth,
              },
              {
                label: "Total Vectors Stored",
                value: totalVectors,
                setValue: setTotalVectors,
              },
            ].map((item) => (
              <div key={item.label} className="space-y-6">
                <div className="space-y-2">
                  <label className={`text-sm xl:text-xl font-medium text-[#374151] ${afacad.className}`}>{item.label}</label>
                  <div className="flex flex-col-reverse md:flex-row  gap-4">
                    <div className="flex-1 sm:min-w-[300px]  lg:min-w-[400px] xl:min-w-[500px] xl:text-xl">
                      <Slider
                        value={[Math.log10(item.value)]}
                        min={Math.log10(10000)}
                        max={Math.log10(1000000000)}
                        step={0.001}
                        onValueChange={(value) => item.setValue(Math.pow(10, value[0]))}
                        className="py-4"
                      />
                      <div className="flex justify-between text-sm xl:text-xl text-[#374151]">
                        {scaleMarkers.map((marker) => (
                          <span key={marker} className={`${afacad.className}`}>{marker}</span>
                        ))}
                      </div>
                    </div>
                    <Input
                      type="text"
                      value={Math.floor(item.value)}
                      onChange={(e) => item.setValue(parseInputValue(e.target.value))}
                      className={`w-32 xl:text-xl ${afacad.className}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-lg h-fit xl:min-w-[400px]">
          <CardHeader>
            <CardTitle className={`text-xl xl:text-2xl font-bold text-left text-[#374151] ${geologica.className}`}>
              Estimated monthly costs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 xl:text-xl">
            <TooltipProvider>
              {[
                {
                  label: "Writes",
                  cost: writeCost,
                  tooltip: `$4 per million writes * (${selectedDimension} / 1536 dimensions)`,
                },
                {
                  label: "Queries",
                  cost: queryCost,
                  tooltip: `$10 per million queries * (${selectedDimension} / 1536 dimensions)`,
                },
                {
                  label: "Storage",
                  cost: storageCost,
                  tooltip: `${selectedDimension} * 4 bytes * ${formatNumber(totalVectors)} vectors / 1B * $0.33/GB`,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm xl:text-xl text-[#374151] ${afacad.className}`}>{item.label}</span>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-[#374151]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm xl:text-xl">{item.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <span className={`text-sm xl:text-xl font-medium tabular-nums ${afacad.className}`}>
                    ${item.cost.toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className={`text-sm xl:text-xl font-medium text-[#374151] ${afacad.className}`}>Total Cost</span>
                  <span className={`text-sm xl:text-xl font-medium tabular-nums ${afacad.className}`}>
                    ${totalCost.toFixed(2)}
                  </span>
                </div>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}