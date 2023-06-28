"use client"
import Panel from '@/components/Panel/Panel'
import { MainPanel, ResultPanel, HistoryPanel } from '@/components/panels'

import { useState } from "react";


export default function Page({ }) {
  const [ActivePanel, SetActivePanel] = useState('main');
  return (
    <div className="app">
      <Panel ActivePanel={ActivePanel}>
        <MainPanel id='main' SetActivePanel={SetActivePanel}/>
        <ResultPanel id='result' SetActivePanel={SetActivePanel}/>
        <HistoryPanel id='history' SetActivePanel={SetActivePanel}/>
      </Panel>
    </div>
  )
}