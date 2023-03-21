import { useEffect, useState } from 'react'

import { map, orderBy, get } from 'lodash'

import { getIssues } from '@/api/issue-api'
import { genTextAreaSetInnerHTML } from '@/utils/html-utils'

import '@/lib/turn'
import styles from './style/index.module.less'

function Home(): JSX.Element {
  const [list, setList] = useState<Issue[]>([])
  const getList = async () => {
    console.log('2222')
    const data = await getIssues()
    console.log('###', data)
    setList(orderBy(data, 'number'))
    setTimeout(() => {
      // @ts-ignore
      $('#flipbook').turn({
        acceleration: true,
        duration: 1000,
        elevation: 50,
        width: document.documentElement.clientWidth,
        height: 300,
        gradients: true,
        display: 'single',
        AutoCenter: true,
        when: {},
        pages: data.length
      })
    })
  }
  useEffect(() => {
    getList()
  }, [])
  console.log('###', list)
  return (
    <div className={styles['book-viewport']}>
      <div className={styles['container']}>
        <div id="flipbook" className={styles.book}>
          {map(list, (item) => {
            return (
              <div className={styles.poetry} key={item.id}>
                <div className={styles['poetry-title']}>{item.title}</div>
                <div className={styles['poetry-label']}>{get(item, 'labels.0.name')}</div>
                <div className={styles['poetry-content']} dangerouslySetInnerHTML={genTextAreaSetInnerHTML(item.body)} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
