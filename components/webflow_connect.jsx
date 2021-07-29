import React from 'react';
import {Card, Button} from 'react-bootstrap';

export default function WebflowConnect() {
  return (
    <Card className="p-5">
      <h5 className="text-center">Connect Webflow</h5>

      <p style={{'font-size': '12px'}}>
        Link to your webflow account <br/>
        <a href='https://webflow.com' style={{'font-size': '12px'}}>How to find your API key</a>
      </p>

      <input className="mt-3"></input>
      <Button className="mt-3" variant='primary'>Save</Button>
    </Card>
  )
}
