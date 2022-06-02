import React from 'react'
import { Form, Button } from 'react-bootstrap'
import languageChoices from  '../../assets/langChoices.json'

 const FormData = (props) => {
    return (
        <>
        <Form onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name: </Form.Label>
          <Form.Control id="name" onChange={props.handleUsername}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Language Translation Selection</Form.Label>
          <Form.Select onChange={props.handleLanguageChoice}>
            <option value="en">English</option>
            {languageChoices.map( (lang,idx) => (
              <option key={idx} value={lang.code}>{lang.lang}</option>
            ))}
            {/* Do we want to use a function to populate languages? or select just certain ones? */}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Transcribe/Translate</Form.Label>
          <Form.Select onChange={props.handleTranscribeOrTranslate}>
            <option value="transcribe">Origin text</option>
            <option value="translate">Origin text + Translated text</option>
          </Form.Select>
        </Form.Group>
        <div >
        <Button className="child" type="submit">Submit!</Button>
        <p>Note: Submit will save to a Database</p>
        </div>
        </Form>
        </>
    )
    
}
export default FormData