import React from 'react'
import styles from './styles.module.css'

export const PrimaryButton = ({type,text}) => {
  return <button className={styles[type]}>{text}</button>
  
}
export const DefaultButton = ({text, type}) => {
  return <button className={styles[type]}>{text}</button>
}
export const DashedButton = ({type,text}) => {
  return <button className={styles[type]}>{text}</button>
}
export const TextButton = ({type,text}) => {
  return <button className={styles[type]}>{text}</button>
}
export const LinkButton = ({type,text}) => {
  return <button className={styles[type]}>{text}</button>

  
}

