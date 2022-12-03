import { Modal, Button } from 'semantic-ui-react'
import { useState } from 'react'

export const CharacterDetails = ({ characterDetails }) => {
	const [modalOpen, setModalOpen] = useState(false)

	if (characterDetails) {
		return (
			<Modal
				onOpen={() => setModalOpen(true)}
				onClose={() => setModalOpen(false)}
				open={modalOpen}
				trigger={<Button onClick={() => setModalOpen(true)}>Click for more details</Button>}
			>
				<Modal.Header>{characterDetails.name}</Modal.Header>
				<Modal.Content>
					<p>date of birth: {characterDetails.birth_year}</p>
					<p>height: {characterDetails.height}</p>
					<p>mass: {characterDetails.mass}</p>
					<p>eye colour: {characterDetails.eye_color}</p>
					<p>gender: {characterDetails.gender}</p>
				</Modal.Content>
			</Modal>
		)
	}
	return null
}
