import * as React from 'react'
import PropTypes from 'prop-types'

// based on the awesome work done by tj/react-click-outside
export interface ClickOutsideProps {
  onClickOutside: VoidFunction
  children: (opts: {ref: React.RefObject<any>}) => React.ReactNode
}
export default class ClickOutside extends React.Component<ClickOutsideProps> {
  private isTouch: boolean = false
  private container: NonNullable<React.RefObject<any>> = React.createRef<HTMLDivElement>()

  static propTypes = {
    onClickOutside: PropTypes.func.isRequired
  }

  render() {
    const { children } = this.props
    return (
      children({
        ref: this.container
      })
    )
  }

  componentDidMount() {
    document.addEventListener('touchend', this.handle, true)
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handle, true)
    document.removeEventListener('click', this.handle, true)
  }

  handle = (e: any) => {
    if (e.type === 'touchend') this.isTouch = true
    if (e.type === 'click' && this.isTouch) return
    const { onClickOutside } = this.props
    const el = this.container
    if(el) {
      if(!el.current.contains(e.target)) {
        if(onClickOutside) onClickOutside()
      }
    }
  }
}
