import OriginalSearchBar from '@theme-original/SearchBar'
import { TraceEvent } from '@uniswap/analytics'
import { BrowserEvent, EventName } from '@uniswap/analytics-events'
import React from 'react'

export default function SearchBarWithAnalytics(props) {
  return (
    <>
      <TraceEvent events={[BrowserEvent.onClick]} name={EventName.SEARCH_BAR_CLICKED}>
        {/* Required for onClick to register */}
        <div>
          <OriginalSearchBar {...props} />
        </div>
      </TraceEvent>
    </>
  )
}
