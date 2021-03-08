import React from "react";
import Layout from "@theme/Layout";
import "./slides.css";

function Slides() {
  return (
    <Layout title="Slides">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        <p>Slides will be uploaded here after every Studio Session.</p>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Studio</th>
              <th>Topics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://1drv.ms/p/s!Arpt8z7gqAdjrFvjVMEc7O5Tm7Cj?e=CboYQd"
                  target="_blank"
                >
                  Studio S2
                </a>
              </td>
              <td>Elements of Programming and Substitution Model</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://1drv.ms/p/s!Arpt8z7gqAdjrF5SgC3565sVvXhz?e=CYSLcU"
                  target="_blank"
                >
                  Studio S3
                </a>
              </td>
              <td>Recursion and Orders of Growth</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://1drv.ms/p/s!Arpt8z7gqAdjrGB1xYuh2oqxV1um?e=3fEsDt"
                  target="_blank"
                >
                  Studio S4
                </a>
              </td>
              <td>Higher Order Functions and Scoping Rules</td>
            </tr>
            <tr>
              <td>
                Studio S5 (No slides this week)
              </td>
              <td>Data Abstraction</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://1drv.ms/p/s!Arpt8z7gqAdjrGi4zHYu9a46Z4Gc?e=I9wx0k"
                  target="_blank"
                >
                  Studio S6
                </a>
              </td>
              <td>List and Tree Processing</td>
            </tr>
            <tr>
              <td>
                Studio S7 (No slides this week)
              </td>
              <td>Midterm Preperation</td>
            </tr>
            <td>
                <a
                  href="https://1drv.ms/p/s!Arpt8z7gqAdjrGxDgJACiHL2xHO_?e=A6K9Zd"
                  target="_blank"
                >
                  Studio S8
                </a>
              </td>
              <td>Midterm Review</td>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Slides;
