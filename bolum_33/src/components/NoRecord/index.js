"use client";
import React from 'react'

const NoRecord = (props) => {
  return (
      <tr>
          <td colSpan={12}>
              <div className={"alert alert-danger text-center"}>
                  Herhangi bir kayıt bulunamadı
              </div>
          </td>
      </tr>
  )
}

export default NoRecord
