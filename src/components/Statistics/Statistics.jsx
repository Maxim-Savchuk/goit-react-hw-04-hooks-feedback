import PropTypes from 'prop-types';
import { Notification } from 'components/Notification';
import { Container, Title, Text } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Container>
            <Title>Statistics</Title>
            {total ?
                (
                    <div>
                        <Text>Good: <span>{good}</span></Text>
                        <Text>Neutral: <span>{neutral}</span></Text>
                        <Text>Bad: <span>{bad}</span></Text>
                        <Text>Total: <span>{total}</span></Text>
                        <Text>Positive feedback: <span>{positivePercentage}</span></Text>
                    </div>
                ) : (
                    <Notification message="No feedback given" />
                )
            }
        </Container>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string,
}