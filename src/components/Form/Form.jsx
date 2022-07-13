import React, {useState} from 'react'
import './Form.css'

function Form(props) {
  const [fideId, setFideId] = useState('')

  const onInputChange = (event) => {
		setFideId(event.target.value)
	}

	const onFormSubmit = (event) => {
		event.preventDefault()
		props.setFideId(fideId)
	}

  return (
    <div>
			<form onSubmit={onFormSubmit}>
				<input 
					type="text" 
					id="fideid" 
					name="fideid" 
					placeholder="FIDE ID"
					onChange={onInputChange}
				/><br /><br />
				<input 
					type="submit" 
					value="Find"
				/>
			</form>
    </div>
  )
}

export default Form