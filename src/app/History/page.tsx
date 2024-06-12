'use client'
import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CyclesContext } from '@/context/CyclesContext'
import { DefaultLayout } from '@/layouts/DefaultLayout'

export default function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <DefaultLayout>
      <HistoryContainer>
        <h1>Meu histórico</h1>
        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Duração</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount} minutos</td>
                    <td>
                      {formatDistanceToNow(cycle.startDate, {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td>
                      {cycle.finishedDate && (
                        <Status statusColor="green">Concluído</Status>
                      )}

                      {cycle.interruptedDate && (
                        <Status statusColor="red">Interrompido</Status>
                      )}

                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>
    </DefaultLayout>
  )
}
