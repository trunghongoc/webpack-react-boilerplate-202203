import { FC } from 'react'
import PropTypes from 'prop-types'
import style from './helloWorld.module.scss'
import { data } from './data'
import './style'

interface IProps {
  title: string
}
const HelloWorld: FC<IProps> = ({ title }: IProps): JSX.Element => (
  <>
    <div className={style.hello}>{title}</div>
    <div className="red">Màu đỏ</div>
    <div>Name: {data?.name}</div>
  </>
)

HelloWorld.propTypes = {
  title: PropTypes.string.isRequired
}

export default HelloWorld
