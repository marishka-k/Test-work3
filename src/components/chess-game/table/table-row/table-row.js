import { useMemo } from 'react'
import styles from'./table-row.module.css'

export default function TableRow ({isFirstRow, isLastRow, text1, text2, text2line}) {

  const text1Class = useMemo(()=> {
    let _text1Class
    if (isFirstRow) {
      _text1Class = `${styles.left_cell} ${styles.first_cell}`
    } else if (isLastRow) {
      _text1Class = `${styles.left_cell} ${styles.last_cell}`
    } else _text1Class = styles.left_cell
    return _text1Class
  }, [isFirstRow, isLastRow])

  const text2Class = useMemo(()=> {
    let _text2Class
    if (isFirstRow) {
      _text2Class = `${styles.right_cell} ${styles.first_cell}`
    } else if (isLastRow) {
      _text2Class = `${styles.right_cell} ${styles.last_cell}`
    } else _text2Class = styles.right_cell
    return _text2Class
  },[isFirstRow, isLastRow ])
    
  return(
    <li className={styles.row}>
      <div className={text1Class}>
        <p className={styles.clean}>{text1}</p>
      </div>
      {text2line
        ? <div className={`${text2Class} ${styles.right_cell_dop}`}>
            <p className={`${styles.fixed_text} ${styles.clean} `}> <span>{text2line}</span></p> <p className={styles.clean}>{text2}</p>
          </div>
        : <div className={text2Class}> 
            <p className={styles.clean}> {text2}</p>
          </div>
      }
    </li>
  )
    
}