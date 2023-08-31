import React from "react";

import './main.css'

export default function Main() {
  return (
    <>

      <section>
        {" "}

        <div class="tbl-container">
                    <table class="neumorphic">
                        <tbody>
                            <tr>
                                <td><a className="dropdown-item fst-italic" href="/Crud">Crud Operation</a></td>
                                <td> <a className="dropdown-item fst-italic" href="/Other">Others </a> </td>
                              
                            </tr>
                        </tbody>
                    </table>
                  
                   
                </div>
        <div class="air air1"></div>
        <div class="air air2"></div>
        <div class="air air3"></div>
        <div class="air air4"></div>
      </section>
    </>
  );
}
