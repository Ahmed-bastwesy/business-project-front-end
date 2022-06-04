import React, { useState , useEffect ,useRef}  from "react";
import {Card} from "react-bootstrap";


export default function Home() {

  return (
    <div>
      <Card>
        <Card.Header>
          <h4>Home page</h4>
        </Card.Header>
        <Card.Body>
            <h1>this is homepage</h1>
        </Card.Body>
      </Card>
    </div>
  );
}



