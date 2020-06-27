import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import { Formik } from 'formik';
import * as yup from 'yup'

const ChapterMetaForm = ({ onSave, onCancel }) => {
	const { selectedChapterData: { id, name, description } } = useContext(AppContext)
	
	return (
		<>
			<Formik
				initialValues = {{
					name : name,
					id : id,
					description : description || '',
				}}
				validationSchema={yup.object({
					name: yup.string()
						.max(100, 'Must be 100 characters or less')
						.required('Required'),
				})}
				onSubmit = {(values, { setSubmitting }) => {
					onSave({
						...values
					})
				}}
			>{({
				handleSubmit,
				handleChange,
				handleBlur,
				values,
				touched,
				isValid,
				errors,
				}) => (
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formChapterName">
						<Form.Label>Name</Form.Label>
						<Form.Control 
							required
							type="text" 
							name="name"
							value={values.name}
							onChange={handleChange} 
							isValid={touched.name && !errors.name}
							feedback={errors.name}
							placeholder="Enter name" 
						/>
						<Form.Text className="text-muted">
							Chapters are automatically prefixed with chapter numbers
						</Form.Text>
						<Form.Control.Feedback type="invalid">
							{errors.name}
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="formChapterDescription">
						<Form.Label>Description</Form.Label>
						<Form.Control 
							as="textarea" 
							rows="4" 
							name="description"
							value={values.description}
							onChange={handleChange} 
							placeholder="Enter description" 
						/>
					</Form.Group>
					
					<Button 
						variant="primary" 
						onClick={handleSubmit}
						disabled={!values.name}
						className="mr-sm-2"
					>
						Save
					</Button>
					<Button 
						variant="outline-danger" 
						onClick={onCancel}
					>
						Cancel
					</Button>
				</Form>
			)}
			</Formik>
		</>
	)
}

export default ChapterMetaForm