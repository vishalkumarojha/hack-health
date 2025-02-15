"use client"

import * as React from "react"
import { format } from "date-fns"

import { Card, CardContent, CardHeader, CardTitle } from "../components/UI/card"
import { Badge } from "../components/UI/badge"
import { Separator } from "../components/UI/separator"
import { transportOptions } from "../lib/data"

export default function TransportPage() {
  // Group transport options by date
  const groupedTransport = React.useMemo(() => {
    return transportOptions.reduce(
      (acc, option) => {
        const date = option.date
        if (!acc[date]) {
          acc[date] = []
        }
        acc[date].push(option)
        return acc
      },
      {} as Record<string, typeof transportOptions>,
    )
  }, [])

  const dates = ["2025-02-18", "2025-02-19"]

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Transport Details</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {dates.map((date) => (
          <div key={date} className="space-y-4">
            <h2 className="text-xl font-semibold">{format(new Date(date), "EEEE, MMMM d, yyyy")}</h2>
            <div className="space-y-4">
              {(groupedTransport[date] || []).map((option) => (
                <Card key={option.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{option.name}</CardTitle>
                      <Badge variant="secondary">{option.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Route</div>
                      <div className="font-medium">
                        From: {option.location.name}
                        <br />
                        To: {option.location.address.split(" to ")[1]}
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Schedule</div>
                      <div className="font-medium">
                        {option.schedule.map((time, index) => (
                          <div key={index}>{time}</div>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Bus Details</div>
                      <div className="font-medium">{option.contact}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {(!groupedTransport[date] || groupedTransport[date].length === 0) && (
                <Card>
                  <CardContent className="py-4">
                    <p className="text-center text-muted-foreground">No transport options available for this date.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

