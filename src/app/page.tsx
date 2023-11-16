"use client"

import { table } from 'console'
import Image from 'next/image'


export default function Home() {
  let lilian = "X"

function  eu(celula : any){
    

    if(celula.innerHTML === ""){
        celula.innerHTML = lilian
    }else{
        return
    }

    if(lilian == "X"){
        lilian = "O"
    }else{
        lilian = "X"
    }
}
  return (
    <table>
      <tbody>
        <tr>
            <td onClick={(e) => eu(e.target)}></td>
            <td onClick={() => eu(2)}></td>
            <td onClick={() => eu(3)}></td>
          </tr>
          <tr>
            <td onClick={() => eu(4)}></td>
            <td onClick={() => eu(5)}></td>
            <td onClick={() => eu(6)}></td>
          </tr>
          <tr>
            <td onClick={() => eu(7)}></td>
            <td onClick={() => eu(8)}></td>
            <td onClick={() => eu(9)}></td>
          </tr>
      </tbody>
    </table>
  )
}
