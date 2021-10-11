import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ReactLogo from '@/assets/icon.png'
import ExampleActions from '@/store/ducks/duckExample'
import { selectExampleText } from '@/store/selectors/example'

import { Container, Title, Subtitle } from './styles'

const HomePage = ({ text, getText }) => {
  useEffect(() => {
    getText()
  }, [])

  return (
    <Container>
      <Image source={ReactLogo} />
      <Title>Welcome!</Title>

      <Subtitle>{text}</Subtitle>
    </Container>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ExampleActions, dispatch)

const mapStateToProps = state => ({
  text: selectExampleText(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
