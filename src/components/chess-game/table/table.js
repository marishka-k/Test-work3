import styles from'./table.module.css'
import TableRow from './table-row/table-row'

export default function Table () {
  return(
    <ul className={styles.content}>
      <TableRow isFirstRow={true} text1='Место проведения:' text2='Клуб «Картонажник»' />
      <TableRow text1='Дата и время мероприятия:' text2='22 июня 1927 г. в 18:00' />
      <TableRow text1='Стоимость входных билетов:' text2='20 коп.' />
      <TableRow text1='Плата за игру:' text2='50 коп.' />
      <TableRow isLastRow={true} text1='Взнос на телеграммы:' text2='21 руб. 16 коп.' text2line='100 руб.'/>
    </ul>
  )
    
}