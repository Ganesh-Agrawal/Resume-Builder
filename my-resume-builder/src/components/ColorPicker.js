import React from 'react'

export default function ColorPicker() {
  return (
    <div>
        <label for="exampleColorInput" class="form-label">Color picker</label>
        <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"/>
   
    </div>
  )
}
