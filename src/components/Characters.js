import { useGetCharactersQuery } from '../services/swapApi'
import { Card } from 'semantic-ui-react'
import { nanoid } from '@reduxjs/toolkit'
import { CharacterDetails } from './CharacterDetails'

const Characters = () => {
	const { data } = useGetCharactersQuery()

	console.log(data)

	return (
		<Card.Group centered>
			{data &&
				data.results.map(character => (
					<Card key={nanoid()}>
						<Card.Content>
							<Card.Header>{character.name}</Card.Header>
						</Card.Content>
						<CharacterDetails characterDetails={character} />
					</Card>
				))}
		</Card.Group>
	)
}
export default Characters
