import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import './style.css'

import FAHome from 'react-icons/lib/fa/home'
import FARedditAlien from 'react-icons/lib/fa/reddit-alien'
import FATwitter from 'react-icons/lib/fa/twitter'
import FABitcoin from 'react-icons/lib/fa/bitcoin'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import FAGithub from 'react-icons/lib/fa/github'
import FAComments from 'react-icons/lib/fa/comments'


export default class ZFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (      
      <div className="footerstyle">
        <br/>
        <Container> 
<div className="outer">
<div className="contact-text links">     
        <Row>
          <Col md="12">
            <p><span className="f1">MAKE SURE YOU ARE ON</span><b> WALLET.SAFECOIN.ORG</b></p>

            <p className="f2">Keys are validated client-side and do not leave your browser or network. You are responsible for keeping your own keys safe!!!</p>
	
          </Col>
              </Row>

<a href="https://safecoin.org" target="_blank" data-toggle="tooltip" title="Website">  <FAHome size={28}/>  </a>
<a href="https://discord.gg/vQgYGJz" target="_blank" data-toggle="tooltip" title="Discord">  <FAComments size={28}/>  </a>
<a href="https://twitter.com/safecoins" target="_blank" data-toggle="tooltip" title="Twitter">  <FATwitter size={28}/>  </a>
<a href="https://www.reddit.com/r/SafeCoins/" target="_blank" data-toggle="tooltip" title="Reddit">  <FARedditAlien size={28}/>  </a>
<a href="https://bitcointalk.org/index.php?topic=2838370" target="_blank" data-toggle="tooltip" title="Bitcoin Talk">  <FABitcoin size={28}/>  </a>
<a href="https://github.com/Fair-Exchange/MySafeCoinWallet.git" target="_blank" data-toggle="tooltip" title="Source Code">  <FAGithub size={28}/> </a>
<a href="mailto:fair-exchange@protonmail.com" target="_blank" data-toggle="tooltip" title="fair-exchange@protonmail.com">  <FaEnvelopeO size={28}/>  </a>
    <br/>
</div>
    </div>
        </Container>
      </div>
    )
  }
}