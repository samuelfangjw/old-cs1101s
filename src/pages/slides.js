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
          height: "50vh",
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
                <a href="https://1drv.ms/p/s!Arpt8z7gqAdjrFvjVMEc7O5Tm7Cj?e=CboYQd" target="_blank">
                  Studio S2
                </a>
              </td>
              <td>
                Elements of Programming
              </td>
            </tr>
            <tr>
              <td>Studio S3</td>
              <td>TBC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Slides;
